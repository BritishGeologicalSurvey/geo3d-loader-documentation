# Serving Project Data

## Note for users

Please contact Zbigniew Małolepszy (Geo3D Viewer Lead) - zbigniew.malolepszy@pgi.gov.pl;  who can advise on model hostng options for your organisation.

Below are options for the BGS configuration for serving data into the Geo3D Viewer. The g3d grids and project.json file must be published to a web-accessible location from which the Geo3D Viewer can load them. The Geo3D Viewer only needs static files served over HTTP(S), so no application server or database is required.

## Required Structure

Each project is stored in its own folder, with a single `projectsList.json` at the root listing all available projects:

```
<root>/
├── projectsList.json
├── grangemouth/
│   ├── project.json
│   ├── thumbnail.png
│   └── assets/
│       ├── 1.g3d
│       ├── 2.g3d
│       └── ...
└── northumberlandandsolway/
    ├── project.json
    ├── thumbnail.png
    └── assets/
```

`projectsList.json` holds an entry for each project containing its `id`, `title`, `description`, and the URLs of its `project.json` and `thumbnail.png`:

```json
{
  "resourceType": "projectsList",
  "items": [
    {
      "id": 1,
      "title": "Grangemouth",
      "url": "https://<host>/<path>/grangemouth/project.json",
      "thumbnail": "https://<host>/<path>/grangemouth/thumbnail.png",
      "description": "Grangemouth"
    }
  ]
}
```

**Important:** The URLs in `projectsList.json` and the `indices` URL of each layer in `project.json` are absolute. They must point to the location where the files are actually hosted. If the files are moved to a different server or hosting method, these URLs must be updated.

## Option 1: S3-compatible Object Storage (MinIO)

Project files can be uploaded to a bucket on an S3-compatible object store such as MinIO, keeping the folder structure shown above. The bucket, or the relevant prefix, must allow anonymous read access.

Example URLs from the BGS test bucket `3ddata`:

- https://osgeodev.bgs.ac.uk/api/v1/buckets/3ddata/objects/download?prefix=projectsList.json
- https://osgeodev.bgs.ac.uk/api/v1/buckets/3ddata/objects/download?prefix=grangemouth/project.json
- https://osgeodev.bgs.ac.uk/api/v1/buckets/3ddata/objects/download?prefix=northumberlandandsolway/project.json

Asset URLs in `project.json` follow the same pattern, e.g. `...?prefix=grangemouth/assets/1.g3d`.

Object storage is well suited to organisations that already run S3 infrastructure. Projects can be added or updated by uploading files through the MinIO Object Browser or any S3 client, without redeploying anything.

## Option 2: Static Web Server (nginx)

Alternatively, the project folders can be served as static files from a web server. At BGS this is done with an nginx container deployed to Kubernetes, e.g. https://metadata-waf.bgs.ac.uk/PGI-Geo3D/bgs/

The project files are placed under `content/PGI-Geo3D/` and copied into the image at build time.

**Dockerfile**

```dockerfile
# Stage 1: prepare files and normalise permissions
FROM alpine:3.23 AS builder
RUN mkdir -p /usr/share/nginx/html
COPY content/ /tmp/content/
RUN cp -r /tmp/content/PGI-Geo3D /usr/share/nginx/html/PGI-Geo3D
RUN find /usr/share/nginx/html -type d -exec chmod 755 {} \; \
    && find /usr/share/nginx/html -type f -exec chmod 644 {} \;

# Stage 2: unprivileged nginx runtime
FROM nginxinc/nginx-unprivileged:1-alpine3.24
USER root
RUN rm -rf /usr/share/nginx/html/*
COPY --chown=nginx:nginx content/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=nginx:nginx /usr/share/nginx/html /usr/share/nginx/html
USER nginx
CMD ["nginx", "-g", "daemon off;"]
```

**nginx configuration (`content/default.conf`)**

```nginx
server {
    listen 8080;

    location / {
        root /usr/share/nginx/html/;
        autoindex on;
        autoindex_exact_size on;
        autoindex_format html;
        autoindex_localtime on;
    }
}
```

`autoindex` is not required by the Viewer. It simply allows the published files to be browsed in a web browser.

Because the data is built into the image, adding or updating a project requires rebuilding and redeploying the container. The advantage is that each image is a versioned, reproducible snapshot of the published models.

## Cross-Origin Access (CORS)

If the Geo3D Viewer is hosted on a different domain from the project data, the data server must return an `Access-Control-Allow-Origin` header. Without it, the browser will block the requests. For nginx, this can be added within the `location` block:

```nginx
add_header Access-Control-Allow-Origin "*" always;
```

For MinIO, CORS is configured at the server or bucket level.

## Choosing an Option

| | S3 / MinIO | nginx |
|---|---|---|
| Updating projects | Upload files directly | Rebuild and redeploy image |
| Versioning | Via bucket versioning, if enabled | Via image tags |
| Infrastructure | Requires an object store | Any container platform or web server |
| Browsing files | Object Browser | Directory listing (`autoindex`) |

Both options have been tested successfully with the Geo3D Viewer.
# Project JSON Configurator

The **Project JSON Configurator** is a web-based tool that enables users to customise, enhance, and manage Geo3D project configuration files before publication within the Geo3D Viewer. While the model conversion tools generate the core project.json file automatically, the Configurator provides an intuitive interface for reviewing and editing project settings without the need to manually modify the JSON structure.

The Configurator acts as the final stage in the Geo3D publication workflow, allowing geological models to be enriched with metadata, styling, viewing preferences, analytical tools, and user interface options. This ensures that models are not only technically correct but also presented in a clear and informative manner for end users.

## Purpose of the Project JSON Configurator

The primary purpose of the Configurator is to transform the automatically generated project configuration into a polished viewer-ready product. It allows users to:

- Add project metadata and descriptions.
- Configure geological unit names and attributes.
- Define layer colours and stratigraphic ordering.
- Specify coordinate reference systems.
- Configure viewer behaviour and display options.
- Enable or disable analysis tools.
- Configure cross-section functionality.
- Support multilingual projects.
- Validate project settings before publication.

By using a form-based interface, the Configurator removes the need for users to edit JSON files directly, reducing the likelihood of errors and making the workflow accessible to both technical and non-technical users.

## Loading Existing Projects

Following model conversion, the generated JSON file can be loaded into the Configurator using the **Upload Project Config** function. Once loaded, the Configurator automatically populates the available settings from the uploaded file.

Users can then review and modify the configuration as required before exporting an updated version for use within the Geo3D Viewer.

**Note** – the GVS tool within the configurator should be used if starting a project from scratch in conjunction with the conversion tools which will populate many of the fields required in the project configurator for final output to load into the Geo3D Viewer.

## Project Metadata

One of the most important functions of the Configurator is the management of project metadata. This information provides contextual information about the model and improves the user experience within the Geo3D Viewer.

Typical metadata includes:

- Project title.
- Project description.
- Publication information.
- Organisation details.
- Multilingual content.

Descriptions can include rich-text formatting and embedded web-hosted images, allowing projects to be accompanied by supporting information, explanatory diagrams, logos, and hyperlinks to external resources.

## Geological Layers and Stratigraphy

The Configurator provides comprehensive control over the geological units displayed within the viewer.

Users can:

- View all geological units included in the model.
- Assign or modify colours.
- Review stratigraphic ordering.
- Reorganise geological units.
- Group layers into logical categories.

This information is typically imported from the Generalised Vertical Section (GVS) configuration but can be reviewed and amended before publication.

Maintaining a correct stratigraphic order is particularly important as it improves interpretation and ensures consistency with established geological nomenclature.

**Viewer Display Settings**

The Configurator allows users to control several aspects of how the model is displayed within the Geo3D Viewer.

These include:

- Coordinate reference systems (CRS).
- Rendering distances.
- Coordinate grid settings.
- Camera controls.
- Measurement units.
- Visual appearance options.

For UK-based models, a CRS of **EPSG:27700 (British National Grid)** is typically used.

Recommended default rendering settings include:

- Near Plane: 100
- Far Plane: 10,000
- Line Threshold: 10

These settings provide a good balance between model visibility and rendering performance.

## Viewer Features and Tools

The Project Configurator also allows users to enable or disable specific Viewer functionality according to project requirements.

Examples include:

### Display Features

- Coordinate grid.
- Viewer information panels.
- Tooltips.
- Background settings.

### Analysis Tools

- Synthetic borehole drilling.
- Dip and azimuth measurements.
- Rose diagrams.
- Borehole visualisation.

### Navigation Tools

- Camera views.
- Full-screen mode.
- Screenshot capture.

### Cross-Section Tools

- X-axis sections.
- Y-axis sections.
- Z-axis sections.
- Arbitary line cross-sections.

The ability to selectively enable tools allows organisations to tailor the Viewer experience to specific user groups and applications.

### Multilingual Support

The Configurator supports multilingual projects by allowing multiple language entries for titles, descriptions, attributes, and labels.

Where multilingual support is enabled:

- Every display field must contain values for each language.
- The Viewer automatically switches content according to the selected language.
- Geological terminology and metadata can be presented consistently across different audiences.

Version 1 projects typically use English (en) by default, although additional languages can be added where required.

## Project Validation

Before exporting a completed configuration, users should review:

- Project metadata.
- Layer colours.
- Stratigraphic ordering.
- CRS information.
- Viewer settings.
- Enabled tools and features.

Conducting these checks helps ensure that the model behaves as expected within the Geo3D Viewer and provides an optimal user experience.

## Exporting the Final Configuration

Once configuration is complete, the updated settings are exported as an amended project.json file. This file becomes the master configuration document used by the Geo3D Viewer when loading the project.

The final project.json controls virtually every aspect of how a model is presented, including its metadata, geological structure, visual appearance, analytical functionality, and user interaction options.

## Future Development

As the Geo3D platform continues to evolve, the Project JSON Configurator is expected to become increasingly important within the publication workflow in future versions. Enhancements may include support for additional model types, extended metadata standards, richer attribute management, integration of borehole and geophysical datasets, improved validation tools, and automated project publishing workflows.

Ultimately, the Configurator provides the mechanism through which raw geological model outputs are transformed into well-presented, user-friendly Geo3D projects, ensuring that complex subsurface information can be effectively communicated and explored within the Geo3D Viewer environment.


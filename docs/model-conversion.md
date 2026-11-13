# Model Conversion Tools

The Geo3D Loader v1 workflow relies on a set of model conversion tools that transform geological modelling outputs into a format that can be efficiently visualised and analysed within the Geo3D Viewer. These tools provide the critical link between geological model generation and web-based 3D visualisation, ensuring that model data are converted into a consistent structure suitable for publication and interactive use.

## ASCII Grid Conversion

The primary conversion tool currently supported by the Geo3D Loader is the **asc-to-g3d** converter. This utility has been developed to process geological surfaces supplied as ESRI ASCII Grid files and convert them into the Geo3D (.g3d) format used by the Geo3D Viewer.

The converter performs several key functions:

- Reads and processes one or more ASCII grid files (using a combination of at least two from the calculated top, base or thickness).
- Converts geological surfaces into optimised Geo3D datasets (layers).
- Generates a project configuration (.json) file containing model geometry, extents, and rendering information.
- Applies geological unit information through a corresponding **layer configuration file**.
- Preserves stratigraphic relationships defined by the user.
- Creates a structure suitable for direct loading into the Geo3D Viewer.

By automating these tasks, the conversion process significantly reduces the effort required to publish geological models while ensuring consistency between projects.

## Layer Configuration and Geological Attribution

Prior to conversion, it is recommended users generate a **layer configuration file** using the Project Configurator's GVS (Generalised Vertical Section) tool. This file provides the geological context for the model by defining:

- Geological unit names.
- Geological hierarchy and Stratigraphic ordering.
- Unit grouping (e.g. Bedrock, Superficial Deposits).
- Display colours.

During conversion, the asc-to-g3d tool combines the geometric information contained within the ASCII grids with the geological metadata contained within the **layer configuration file**. The resulting Geo3D model therefore contains both the geological layers and the information required for meaningful visualisation within the Viewer.

## Generated Outputs

The conversion process produces several outputs required by the Geo3D platform:

### Geo3D Files (.g3d)

These files contain the converted geological model data and are stored within the project's **assets** directory. Each geological unit is represented by an individual Geo3D file.

**Project Configuration File (project.json)**

The generated JSON file contains information including:

- Model dimensions.
- Bounding extents.
- Spatial positioning.
- Stratigraphic grid geometry parameters.
- Rendering settings.
- Layer resources.

This file forms the core configuration used by the Geo3D Viewer when loading a project.

## Supporting Metadata

Additional metadata generated during conversion can be further enhanced within the Project Configurator, allowing users to add project-specific descriptions, coordinate reference systems, multilingual content, and customised viewer settings.

## Quality Assurance and Validation

Following conversion, models should always be reviewed within the local Geo3D Loader environment calling to the Geo3D Viewer before publication. Recommended checks include:

- Verification that all geological units are present.
- Confirmation of correct stratigraphic ordering.
- Validation of unit colours.
- Inspection for missing or corrupted layers.
- Verification of model extents and coordinate reference system (usingn the Open Street Map overaly can help here).
- Testing of viewer tools such as cross-sections and synthetic boreholes.

Early validation helps identify issues before models are distributed to end users.

## Future Conversion Capabilities

Version 1 of the Geo3D Loader focuses exclusively on the conversion of ASCII grid datasets. However, future developments are expected to significantly expand the range of supported geological model formats.

Planned enhancements include support for:

- GOCAD TSurf models.
- OBJ surface models.
- Other Triangulated Irregular Network (TIN) formats.
- Voxel and block model datasets.
- Borehole and well datasets.
- Geophysical interpretation products.
- 2D vector data, including faults, linework, infrastructure and cross-sections.

These developments will enable the Geo3D Loader to support a broader range of geological and subsurface modelling workflows while maintaining a common publication pathway into the Geo3D Viewer.

## Role Within the Geo3D Workflow

The conversion tools form the foundation of the Geo3D ecosystem. They provide a repeatable and standardised mechanism for transforming geological model outputs into a format that can be visualised, shared and interrogated within the Geo3D Viewer. By separating model generation from model visualisation, the workflow allows geological specialists to continue using their preferred modelling software while providing a consistent route for publishing models to a web-based Geo3D environment.

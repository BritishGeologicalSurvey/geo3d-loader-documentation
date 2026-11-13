# Generalised Vertical Section (GVS) Configurator

The **Generalised Vertical Section (GVS) Configurator** is a key component of the Geo3D Loader workflow, providing the mechanism for defining the geological units, stratigraphic relationships, and visual styling of a geological model before it is converted into Geo3D format. The GVS Configurator captures the geological framework of a model and ensures that units are displayed in the correct order and with consistent symbology within the Geo3D Viewer.

In practical terms, the GVS Configurator acts as the geological legend for a model. While the ASCII grids contain the geometry of the geological layers, the GVS configuration provides the geological meaning by linking unit names, colours, grouping information, and stratigraphic order to those units.

## Purpose of the GVS Configurator

The primary purpose of the GVS Configurator is to create a structured definition of the geological units that make up a model. This information is stored in a configuration file (layer_config.txt) which is subsequently used by the model conversion tools to generate the final project structure. The name of the layer_config.txt name can also be changed to provide some content of the fields required when loaded into the project configurator.

The GVS Configurator allows users to:

- Define geological unit names.
- Establish stratigraphic ordering.
- Assign display colours.
- Group units into geological categories.
- Create a standardised legend structure.
- Support consistent visualisation across multiple projects.

By separating geological configuration from model geometry, the workflow allows geological information to be maintained and updated independently of the underlying model layers.

## Creating a Geological Vertical Section

A new GVS is created using the **GVS Config** option within the Project Configurator.

For each geological unit within the model, users create a corresponding layer entry and specify:

**Layer Name**

The layer name must exactly match the name of the corresponding ASCII grid file used during model conversion. This allows the conversion tool to correctly associate geological metadata with the relevant layer.

Examples might include:

- River Terrace Deposits
- Head Deposits
- Mercia Mudstone Group
- Sherwood Sandstone Group

Consistent naming is essential to ensure successful model conversion.

### Layer Name Suffixes

It is important to note that the asc-to-g3d tool requires two ASCII grid files per layer to generate the g3d file, these can be: top & base, top & thickness, or base & thickness. The suffix used by each file will be important to determine what it represents. If files with all three suffixes are provided the asc-to-g3d tool will select which two to use.

Example 
- MY-LAYER_T.asc The \_T means it represents the "top"
- MY-LAYER_B.asc The \_B means it represents the "base"
- MY-LAYER_TH.asc The \_TH means it represents the "thickness"

The exact suffixes to be used can be configured when using the asc-to-g3d tool, the defaults are those shown in the above example.
The root part of the file name e.g. MY-LAYER must be consistent for related ASCII files, the root name will also be used to name the G3D file e.g. MY-LAYER.g3d, the name in the GVC configuration file must also match, again in this example it would be MY-LAYER.



### Stratigraphic Ordering

One of the most important functions of the GVS Configurator is the definition of the stratigraphic sequence.

Units should be entered in their correct geological order, typically from youngest to oldest. This ordering controls how units appear within the Geo3D Viewer and ensures that geological relationships are represented correctly.

Maintaining a correct stratigraphic hierarchy provides users with a clearer understanding of the geological succession and improves interpretation of the model.

### Geological Grouping

Each layer can be assigned to a broader geological grouping to improve model organisation and navigation.

Typical groups may include:

- Artificial Ground
- Superficial Deposits
- Bedrock
- Engineering Geology Units
- Hydrogeological Units

Grouping allows related geological units to be displayed together within the Viewer, improving usability when working with large and complex models.

### Colour Assignment

The GVS Configurator allows an RGB colour value to be assigned to each geological unit.

Carefully selected colours improve interpretation and help users distinguish between adjacent units. In many cases, colours are chosen to align with established geological mapping standards or organisational symbology conventions.

Although colours can be modified later within the Project JSON Configurator, defining them during the GVS creation stage provides a consistent starting point for model visualisation.

### Exporting the GVS Configuration

Once all geological units have been defined, the configuration is exported as a:

layer_config.txt file. for example London_3D.txt 

This file contains:

- Geological unit names.
- Stratigraphic hierarchy.
- Colour definitions.
- Group assignments.

The file serves as the primary geological configuration document used during model conversion.

## Integration with the Model Conversion Process

The GVS file forms a critical input to the **asc-to-g3d** conversion tool.

During conversion, the converter combines:

- Geological layer geometry from the ASCII grids (at least two of layer top, base or thickness).
- Geological attribution from the GVS configuration.

The resulting Geo3D model therefore contains both the physical geometry of the geological layers and the geological information required for visualisation and interpretation.

Without a GVS configuration, the converter would be unable to establish relationships between model layers, colours, and geological classifications. It would just use default colours and ordering that may have no geological bearing. 

## Updating Existing Projects

The GVS Configurator can also be used to update existing models.

When an amended GVS file is uploaded through the Project Configurator, the geological layer information within the project configuration is replaced with the contents of the updated GVS. This allows users to:

- Revise geological unit names.
- Correct stratigraphic ordering.
- Update colours.
- Reorganise geological groups.

without needing to regenerate the underlying model geometry.

## Benefits of Using the GVS Configurator

The GVS Configurator provides several important benefits within the Geo3D workflow:

- Establishes a consistent geological hierarchy.
- Standardises colour schemes and legends.
- Improves model readability and interpretation.
- Simplifies model maintenance and updating.
- Separates geological attribution from model geometry.
- Supports standardisation across multiple Geo3D projects.

By defining the geological framework of a model in a structured and repeatable manner, the GVS Configurator ensures that geological models loaded into the Geo3D Viewer are presented in a clear, consistent, and scientifically meaningful way. It therefore forms a fundamental part of the Geo3D Loader workflow and provides the foundation upon which effective geological visualisation is built.


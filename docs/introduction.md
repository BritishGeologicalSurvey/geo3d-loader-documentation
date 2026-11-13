# Introduction to the Geo3D Loader 

## BGS and PGI collaboration 

The PGI (Polish Geological Institute) developed Geo3D Viewer, a web-based 3D visualisation platform to allow users to explore, interrogate, and analyse geological models interactively. The Viewer provides functionality such as layer control, cross-sections, virtual borehole drilling, coordinate display, measurement tools, map overlays, and other analytical capabilities. This allows complex geological information to be presented in an intuitive way to a wide range of users, from geological specialists and engineers through to planners, decision-makers, and the public. 

The Geo3D Loader represents a collaborative effort between the British Geological Survey (BGS) and PGI, combining expertise in geological modelling, data management, and 3D visualisation to deliver an effective solution for loading and curating data into the Geo3D Viewer. 

## Geo3D Loader 

The Geo3D Loader provides a workflow for converting, configuring, and publishing geological models for use within the Geo3D Viewer environment. It allows geological model outputs to be transformed into an optimised Geo3D Viewer format that can be visualised, interrogated, and analysed through the web-based viewer.  

Version 1 of the Geo3D Loader has been developed with a primary focus on the conversion and publication of geological models represented as ASCII grid surfaces (a common output from 3D geological modelling software typically used by GIS). This approach provides a straightforward workflow for converting gridded geological horizons into the Geo3D Viewer format and has enabled the initial deployment of geological models within the Geo3D Viewer environment. 

Future versions of the Geo3D Loader will expand the range of supported geological and geospatial data formats. Planned developments include support for Triangulated Irregular Network (TIN) surface formats, such as OBJ and GOCAD TSurf files, which are widely used to visualise 3D geological surfaces and structural models. Support for voxel and block model datasets is also planned, enabling the visualisation of three-dimensional volumetric properties such as lithology, geotechnical parameters, hydrogeological units, geochemistry, and geophysical properties. 

In addition to geological model data, future versions of the Geo3D Loader will incorporate workflows and conversion tools for a wider range of ancillary subsurface datasets. These are expected to include borehole records, geophysical well data, and 2D vector datasets such as geological linework, faults, cross-sections, infrastructure networks, and survey lines and boundaries. The inclusion of these data types will allow users to integrate observational data alongside interpreted geological models, providing greater context and supporting more detailed model validation and interpretation. 

The long-term vision for the Geo3D Loader is to provide a comprehensive model publication framework capable of handling the diverse range of geological, geotechnical, hydrogeological, and geophysical datasets produced by geological survey organisations such as the BGS and PGI, plus any other organisation or company involved in geological modelling and the dissemination of geomodelling outputs. By expanding format support and improving data integration capabilities, future versions will enable richer and more informative 3D visualisations, allowing users to interact with both interpreted models and the underlying evidence used to create them within a single, unified environment within the Geo3D Viewer. 

## Geo3D Loading Workflow 

The loading process consists of two main stages. Firstly, geological surfaces are converted from ASCII grids into Geo3D (.g3d) files using the asc-to-g3d conversion tool. During this process, a supporting configuration file (an optional configuration file that part fills in the required fields for loading into the Geo3D Viewer) is generated that defines the geometry, extent, and structure of the model. Secondly, the Project Configurator is used to enhance the model by defining geological unit names, colours, stratigraphic order, metadata, coordinate reference systems, viewer settings, and analysis tools. Together, these components enable the creation of professional, interactive 3D geological models that can be shared and viewed through the Geo3D Viewer. 

By providing a consistent workflow for preparing and publishing models, it ensures that geological information is presented in a clear, accessible, and visually engaging format for both technical specialists and non-technical stakeholders. 

The version 1 Geo3D Loader [step by step user guide](http://geo3d-loader-documentation-830d89.glpages.ad.nerc.ac.uk/docs/Model_loader_instructions.html) describes the process for converting geological datasets, creating project configurations, and optimising the final presentation of models within the Geo3D Viewer. Following these steps will ensure that models are loaded correctly, perform efficiently, and provide users with the best possible visualisation and interpretation experience. 

## Important Note 

The Geo3D Viewer is under active development, with new functionality, enhancements, and user interface improvements being introduced on a regular basis. As a result, some of the features, configuration options, and workflows described in this Version 1 Geo3D Loader guide and tools may change over time. Certain settings may become deprecated, be relocated within the interface, or cease to function as newer versions of the Viewer are released. 

Likewise, some functionality referenced within the Project Configurator may have been superseded by improvements implemented directly within the Geo3D Viewer, reducing the need for manual configuration. In a small number of cases, features may be visible within the interface but not yet fully implemented or may require updates to either the Viewer or the Geo3D Loader before operating as intended. 

Users are therefore encouraged to treat the documentation provided as a guide for the current Version 1 implementation and to refer to the latest project documentation, release notes, or development updates where available. Any discrepancies between this guide and the behaviour observed in the Geo3D Viewer should be considered in the context of the platform's ongoing development and continuous improvement cycle which is being done collaboratively between PGI and BGS.  
# openModal Project.

Platform proposed by Wender Z. Xavier on [BiDU'18](http://#) for comprehension and analyses of human mobility data.

## Requirements
* Node.js (tested on v10.11).
* Python 2.7

## Online Version
  
You can access [openModal](#) at PUC-Minas Server.

## What's Included
```
+-- algorithms/ - Python implementations
 |-- pts.py - Public Transportation Evaluation implementation
 |-- signature.py - Mobility Signature implementation
+-- client/ - React front-end views
 +-- public/ - Mobility Signature implementation
  +-- results/ - Folder containing the results file after each execution
 +-- node_modules/ - Required project packages for the frontend
 +-- src/ - Described below
 |-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
+-- datasets/ - Datasets for the cities stored on the platform
 +-- chicago-server/
  |-- bus.csv
  |-- metro.csv 
 +-- dubai-server/
  |-- bus.csv
  |-- metro.csv 
  |-- tram.csv 
 +-- taichung-server/
  |-- bus.csv
  |-- metro.csv 
+-- node_modules/ - Required project packages. Do not modify this folder contents.
|-- server.js - Node server configuration (executes the python scripts).
|-- README.MD - This README file.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

#### Source Folder
```
+-- src/
 +-- actions/
  |--Constant.js - Constant actions names for the redux store
  |--modal.js - openModal actions of the redux store
 +-- assets/ - folders containing the assets used on card creation of each panel
  +-- city/
  +-- funcs/
  +-- results/
 +-- components/
  |-- Analyses.js - Analysis panel grid component
  |-- AnalysisCard.js - Analyses Card component
  |-- App.js - Routes for views
  |-- CityCard.js - Dataset card component
  |-- Datasets.js - Dataset panel grid component
  |-- Division.js - Panels component
  |-- Navigation.js - Main navigation component
  |-- ResultsCard.js - Results card component
  |-- Results.js - Results panel grid component
 +-- reducer/
  |-- modal.js - Modal reducer
 +-- styles/ - Style files for the app
 +-- utils/
  +-- algorithm-variables/ - Modal with necessary variables for each algorithm
   |-- pts.js
   |-- signature.js
  |-- CityData.js - Description of stored datasets of the app
  |-- Constants.js - Available datasets types for the app
  |-- FuncData.js - Description of algorithms of the app
  |-- ResultsType.js - Description of the results of the app
 +-- views/ - Available views for the app
  |-- Modal.js
  |-- GeoData.js
  |-- Docs.js
  |-- Contribute.js
|-- index.js - Entry points of openModal app
```
## Dependences
* [Mocha.js](https://mochajs.org/) - Test Framework for Javascript

## Author
Wender Z. Xavier

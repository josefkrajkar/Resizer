# Resizer

Javascript resizer component

**Description:**

This is a simple React library that contains component "Resizer" - container for dynamic changes of width and height of the chosen html content.

**Important note:**

This script is build in the ES6 javascript and React and probably will not work in older versions of web browsers.
The script was successfully tested on Google Chrome, Mozilla Firefox and Microsot Edge.

**How to run the example:**

Clone the repository and run ```npm install``` in the root folder of downloaded repository. Then simply run ```npm start``` to check the live example.

**How to use the Resizer in your project:**

Please, make sure that you imported the file "resizer.js" into your code.
Then you can add the the Resizer container and use following attributes if you want to:


- ```<Resizer type="horizontal">...Resizable content...</Resizer>``` - make content horizontaly resizable 
- ```<Resizer type="vertical">...Resizable content...</Resizer>``` - make content verticaly resizable 
- ```<Resizer type="both">...Resizable content...</Resizer>``` - make content resizable horizontaly and verticaly


Then you can click (or better double-click) the resizable content on your created webpage and dynamically change its width or height.
For more informations about using this component, please refer to [src/index.js file](https://github.com/josefkrajkar/Resizer/blob/new_version/src/index.js) or to static example on [this link](http://resizer.surge.sh/).  

Thank you for your time and "May the Code Be With You"

TODO list:
- create a proper repository using react-create-app - Done :)
- translate comments to English - Done :)
- Implement Flow - Done :)
- write unit tests using Enzyme and Jest

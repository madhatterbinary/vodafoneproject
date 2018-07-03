STRUCTURE:

The main architeture of the project is divided in two main sections:

1 - Pages.
2 - Panels.

1 - Pages.(Gold.jsx, Silver.jsx, SpaceGrey.jsx)

The pages contain the images of the different phones. They are integrated with React routes. The purpose is to be able to reuse this pages routes for further enhancement of the phones' information or even reuse it for other completely different projects.

2 - Panels.

The panels are divided in three main sections:

1 - Header Panels.
2 - Buttons Panels.
3 - Prices Panels.

1 - Header Panels. (PhonesHeaderPanel.jsx )

Contains the tile of the phone, the ratings and the subtitle description of the specific phone.

2 - Buttons Panels.(ButtonsPanel.jsx)

Contains two sets of panels. One panel for the phones colors selections and the other panel for the phone memory capacity selection.
The phones colors buttons contain, the routes navigation links, while the buttons for memory capacity are a toggle for the two type of memory capacity.

3 - Prices Panels. (PhonePricePanel.jsx)

There are only two prices to display and both of them change according to the respective two memory capacity for each phone.

TOOLINGS:

1 - The project uses Webpack 3 for configuration via plugins for image compression and optimisation, but also for bundling the javascript and transpiling the code into one single file using Babel.

2 - The project uses also PostCSS instead of processors like SASS, saving on performance and file size.

3 - PostCSS follows similar style patterns as SASS but it is only used for general style, while for components style each css file is created within eah component folder.

4 - The project is integrated with Redux library only used in the Pages and for the main Panel to fetch data from the server.

5 - The project uses React-Material-UI for creating the visuals and layouts together with the use of flexbox for responsivieness and mobile devices compatibility.

6 - The project is also integrated with firebase database (https://vodafone-ulysses.firebaseio.com/0.json).Configuration is set in the index.html.

7 - Unit Testing Jest is installed, but the project didn't covered testing due to time constrains.
# vodafoneproject

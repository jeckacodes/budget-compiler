1. Implement a Project Name input form. It's a top-level component. It starts blank. When the user types a project name, the app state keeps track.
When the user submits, the app sends a get request to the database. If the project is a new project, the database creates a new entry for it. If the project exists, the database sends back all the information related to that project. The client then updates its state with that information and displays it.
2. Implement the list component. The list component displays the data passed to it, if any, but always has a box at the end for adding another item.  First, implement that blank box.
3. Implement options in the List view.
4. When the Graph button is clicked, it should send data to the server. The server sends the data to the database to be inserted/updated (implement later), but it also generates and returns data for use in the Graph view. One thing the server does is convert string price values to numbers.
5. Set up Mongoose schema and connect database.
6. Database is connected, but each Graph generation adds a duplicate Mongoose document. Need to use Update where appropriate.
# Backend-startup
<p>here be a some basic concepts and example based notes on nodejs, expressjs </p>
<p>
  // their will be some pkg to install 
  <h6>npm i http</h6>
    <h6>npm i fs</h6>
    <h6>npm i express</h6>
    <h6>npm i express</h6>
    
  
  // NOw one twist will be come to , its twist is will be ::=== when user will update the code then the major cause will be the server will be start and stop continiously and start again and again to solve this problem we will install the npm pkg

<h6> npm i nodemon</h6>

Nodemon is a development tool that automatically restarts a Node.js application when file changes in the directory are detected. It helps streamline the development process by eliminating the need to manually stop and restart the server every time code changes are made. Here are some key features:

Automatic Restarts: Monitors your project files and restarts the server whenever it detects changes.
Easy Integration: Simple to install and use, typically with a command like nodemon app.js instead of node app.js.
Customization: Allows configuration to specify which files or directories to watch, which extensions to watch, and other options through a nodemon.json file or command-line arguments.
Compatibility: Works with any Node.js application and can be integrated with other tools and frameworks.......::
</p>

### npm i concurrently
### 

- This module allows you to run multiple commands or servers concurrently with a single command. It's useful when you have both frontend and backend servers that need to be started simultaneously. By using concurrently, you can launch both with one command rather than running separate terminal windows for each server.

### npm i cors

- This module enables Cross-Origin Resource Sharing (CORS) for your backend server, allowing it to handle requests from different domains, such as when the frontend and backend are hosted on different ports. It prevents CORS-related errors by managing the sharing of resources between two applications running on separate ports, typically for a frontend and backend setup.


- for Uploading the files on backend their will be many pkg
 ###  npm i multer and ,
 ### formidable 
 - Is a Node.js module often used in Express applications to handle incoming form data, especially file uploads. It can parse form data sent through HTTP POST, including both multipart (file uploads) and URL-encoded forms.

- Key Features of formidable:
- **File Upload Handling:** It can handle large file uploads by parsing them in chunks, making it efficient for handling files.
- **Supports Multipart/Form-Data:** Used for forms that include file uploads.
- **Supports URL-encoded Forms:** Parses standard HTML form submissions.
- **Handles Streaming:** Works with streams to parse data incrementally, avoiding loading the entire form into memory.
- **Customizable:** You can set options like upload directory, max file size, and how fields are stored.

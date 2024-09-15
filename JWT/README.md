## Packages Used

### 1. **bcrypt** (`^5.1.1`)

<h1>here some pakages for using the jwt auth </h1>

`bcrypt` is a library used to hash passwords securely. It helps protect sensitive user data by creating salted password hashes, which makes it hard for attackers to retrieve the original password.

- **Usage**: Encrypt and compare user passwords.
- **Docs**: [bcrypt on npm](https://www.npmjs.com/package/bcrypt)

### 2. **dotenv** (`^16.4.5`)

`dotenv` is a module that loads environment variables from a `.env` file into `process.env`. This keeps sensitive configuration, like API keys or database URIs, out of the source code.

- **Usage**: Store and access configuration variables in a `.env` file.
- **Docs**: [dotenv on npm](https://www.npmjs.com/package/dotenv)

### 3. **express** (`^4.19.2`)

`express` is a minimal and flexible Node.js web application framework. It provides powerful tools for building APIs, handling routing, and managing middleware with ease.

- **Usage**: Create and manage backend routes and API endpoints.
- **Docs**: [express on npm](https://www.npmjs.com/package/express)

### 4. **mongoose** (`^8.6.1`)

`mongoose` is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution for modeling application data, along with powerful querying and validation tools.

- **Usage**: Interact with MongoDB and define schemas for the database.
- **Docs**: [mongoose on npm](https://www.npmjs.com/package/mongoose)

### 5. **multer** (`^1.4.5-lts.1`)

`multer` is a middleware for handling `multipart/form-data`, which is used for file uploads. It allows for the easy handling of files in Node.js applications.

- **Usage**: Upload files like images, documents, etc., to your server.
- **Docs**: [multer on npm](https://www.npmjs.com/package/multer)

### 6. **nodemon** (`^3.1.4`)

`nodemon` is a tool that automatically restarts your Node.js server when it detects changes in the code. It's commonly used during development to speed up the workflow.

- **Usage**: Auto-restart your server during development.
- **Docs**: [nodemon on npm](https://www.npmjs.com/package/nodemon)

### How to Install

To install these packages, run the following command:

```bash
npm install



DB_URI=<your_mongodb_uri>
SECRET_KEY=<your_secret_key>
# ------------------------
<p>

This format ensures that each package is described clearly and links to official documentation are provided for deeper understanding.
</p>
<h1>what is multer in nodejs</h1>
<p>

Multer is a Node.js middleware used for handling multipart/form-data, which is primarily used for uploading files. It is commonly used in applications where users need to upload files, such as profile pictures, documents, or other media files. Multer can be integrated into your Express.js or Node.js application to process file uploads, manage file storage, and handle validation for file types and sizes. </p>

<h2>Key Features of Multer:</h2>
<p>File Upload Handling: Multer simplifies the process of handling file uploads in Node.js.</p>
<p><span style="font-weight:700">Custom Storage:</span> You can store files either on disk (local storage) or in memory. Multer provides built-in disk storage or you can customize the storage options (e.g., cloud storage like AWS S3).</p>
<p>File Type and Size Filtering: Multer allows you to define limits for file size and filters for acceptable file types.</p >
<p><span style="font-weight:700">Multiple File Upload:</span> It supports single and multiple file uploads with easy-to-use methods.</p>
<h2>
Basic Example:</h2>
<h3>
Installation:</h3>
<script>
    npm install multer
</script>
<script>
const express = require('express');
const multer = require('multer');
const app = express();

// Define storage strategy (here, storing the files locally)
const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, 'uploads/'); // The folder where files will be stored
},
filename: function (req, file, cb) {
cb(null, Date.now() + '-' + file.originalname); // Naming the file
}
});

// Initialize multer with the storage option
const upload = multer({ storage: storage });

// Route to handle single file upload
app.post('/upload', upload.single('file'), (req, res) => {
// Access the uploaded file using req.file
res.send('File uploaded successfully!');
});

app.listen(3000, () => {
console.log('Server started on port 3000');
});
</script>

<p>
In this example, files uploaded to the /upload endpoint will be stored in the uploads/ directory on the server with a unique name.</p>
```

### for using the express validator in auth use >>> npm i express validator

<p>
Running npm i express-validator installs the express-validator package, a set of express.js middlewares that simplify the process of validating and sanitizing data in your Node.js applications. Here’s a breakdown:<br>

express-validator:<br>
<br>
<span style="font-weight:800">
Validation:</span> It helps validate incoming data in HTTP requests, ensuring it meets specified rules. For example, it checks if a string is an email, if a number falls within a certain range, or if a required field is present.
<span style="font-weight:800">Sanitization:</span> It can also clean or sanitize data to prevent malicious input. For example, trimming whitespace, escaping special characters, or normalizing emails.</p>

<script>
    npm install express-validator
</script>
<script>
    const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

app.post('/register', [
  // Validate the 'email' field
  body('email').isEmail().withMessage('Enter a valid email'),
  // Validate the 'password' field
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('User registered successfully!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
</script>
<p>body(): Specifies which field to validate from the request body. <br>
isEmail(): Ensures the value is a valid email.<br>

isLength(): Validates the length of the input.<br>
validationResult(req): Collects all validation errors and sends them in a response if any are found.</p>

### Nodemailer Integration Guide

<h1>
Introduction</h1>
<p>Nodemailer is a popular Node.js library for sending emails. It supports various email transport methods, including SMTP, AWS SES, and SendGrid, and makes it easy to send HTML or text-based emails from your application.</p>
<h3>
Installation</h3>
<p>To use Nodemailer in your Node.js project, you need to install it first. Use the following command to add Nodemailer to your project dependencies:</p>
<script>
  npm install nodemailer
</script>
<p>
Basic Usage<br>
Below is an example of how to configure Nodemailer to send an email using SMTP:</p>
<script>
  // Import the nodemailer package
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
host: 'smtp.example.com', // SMTP server
port: 587, // Port
secure: false, // true for 465, false for other ports
auth: {
user: 'your-email@example.com', // SMTP user
pass: 'your-password', // SMTP password
},
});

// Define the email options
const mailOptions = {
from: '"Your Name" <your-email@example.com>', // Sender address
to: 'recipient@example.com', // List of recipients
subject: 'Hello from Nodemailer', // Subject line
text: 'Hello world?', // Plain text body
html: '<b>Hello world?</b>', // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
return console.log(`Error occurred: ${error.message}`);
}
console.log(`Message sent: ${info.response}`);
});
</script>

<p>
Configuration Options<br>
<ul>
<li>host: The SMTP server address.</li>
<li>port: The port to connect to, usually 587 for TLS.</li>
<li>secure: Set to true for SSL and false for other connections.</li>
<li>auth: An object containing user credentials.</li>
<li>user: Your SMTP account username.</li>
<li>pass: Your SMTP account password.</li> </ul></p>
<h3>
Example with Gmail SMTP <br>
If you want to send emails using Gmail, use the following configuration:</h3>
<script>
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Gmail address from environment variables
    pass: process.env.GMAIL_PASS, // Gmail app-specific password
  },
});
</script>
<h3>
Sending HTML Emails</h3>
<p>Nodemailer supports sending rich HTML emails. Here's how you can send an HTML-based email: </p>
<script>
  const mailOptions = {
  from: '"Your Name" <your-email@example.com>',
  to: 'recipient@example.com',
  subject: 'Hello from Nodemailer with HTML',
  html: `
    <h1>Hello World</h1>
    <p>This is an <strong>HTML</strong> email.</p>
  `,
};
</script`>
### full code will be still pending 

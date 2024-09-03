<h1>Project Title: Server-Side Rendering in Node.js</h1>

<h1>Introduction</h1>
<p>This project demonstrates the implementation of server-side rendering (SSR) in a Node.js application using Express.js and EJS as the templating engine. SSR is beneficial for improving SEO, reducing the time to first paint, and delivering fully rendered HTML to the client, which enhances user experience.</p>

<h1>Prerequisites</h1>
<p>Before you begin, ensure you have met the following requirements:</p>
<ul>
    <li><strong>Node.js</strong> (v14.x or later)</li>
    <li><strong>npm</strong> (v6.x or later)</li>
    <li>A basic understanding of Node.js, Express.js, and templating engines like EJS.</li>
</ul>

<h1>Installation</h1>
<p>Follow these steps to install the project:</p>
<ol>
    <li><strong>Clone the repository:</strong></li>
    <p><code>git clone https://github.com/your-username/your-repo-name.git</code><br><code>cd your-repo-name</code></p>

    <li><strong>Install dependencies:</strong></li>
    <p><code>npm install</code></p>

</ol>

<h1>Project Structure</h1>
<p>This project has the following structure:</p>
<pre>
├── views/            # Directory for EJS templates
│   └── index.ejs     # Main template file rendered on the server
├── server.js         # Main server file
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
</pre>

<h1>Usage</h1>
<p>Follow these steps to use the project:</p>
<ol>
    <li><strong>Start the server:</strong></li>
    <p><code>node server.js</code></p>

    <li><strong>Access the application:</strong></li>
    <p>Open a web browser and navigate to <code>http://localhost:3000</code>. You will see a web page with the message rendered server-side.</p>

</ol>

<h1>How Server-Side Rendering Works</h1>
<p>In this project, SSR is achieved by rendering the EJS templates on the server using Express.js. Here’s how it works:</p>
<ul>
    <li><strong>Express.js:</strong> The main web framework used to create the server and handle routing.</li>
    <li><strong>EJS (Embedded JavaScript Templating):</strong> The templating engine used to render HTML pages on the server. EJS allows us to embed JavaScript code within our HTML, making it possible to pass dynamic data from the server to the client.</li>
</ul>

<h1>Key Files</h1>
<p>1. <strong>server.js:</strong></p>
<p>This file sets up the Express server and defines the routes. For each route, the server renders an EJS template and sends the fully rendered HTML to the client.</p>
<pre>
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index', { title: 'SSR Example', message: 'Hello from server-side!' });
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

</pre>

<p>2. <strong>views/index.ejs:</strong></p>
<p>This file is the EJS template that gets rendered on the server. It contains standard HTML with embedded JavaScript to dynamically render the <code>title</code> and <code>message</code> passed from the server.</p>
<pre>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>
</body>
</html>
</pre>

<h1>Benefits of Server-Side Rendering</h1>
<ul>
    <li><strong>SEO Optimization:</strong> Since the HTML content is rendered on the server and sent to the client, search engines can easily crawl the content, improving your website's SEO.</li>
    <li><strong>Faster Initial Load:</strong> The initial page load is faster because the HTML is pre-rendered on the server, reducing the amount of JavaScript that needs to be executed on the client side.</li>
    <li><strong>Improved Performance on Low-Power Devices:</strong> Since most of the rendering work is done on the server, clients with lower computational power can display the content faster.</li>
</ul>

<h1>Conclusion</h1>
<p>This project serves as a basic introduction to implementing server-side rendering in a Node.js application. By using Express.js and EJS, we've demonstrated how to render HTML on the server and deliver it to the client, improving both performance and SEO.</p>

<h1>Next Steps</h1>
<p>To further improve or expand this project:</p>
<ul>
    <li>Add more routes to render different pages.</li>
    <li>Integrate a database to render dynamic content based on user interactions.</li>
    <li>Explore other templating engines like Pug or Handlebars.</li>
    <li>Try Next.js if you're working with React, as it provides a more robust solution for SSR.</li>
</ul>

<h1>License</h1>
<p>This project is open-source and available under the <a href="LICENSE">MIT License</a>.</p>

<!-- EJS :: stand for embaded javascript engine and their will be few more like pugjs,handlebars  , but we will use the ejs  -->

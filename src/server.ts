// import express from 'express';
// import exphbs from 'express-handlebars';
// import path from 'path';

// const app = express();
// const port = 3000;

// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "login"}));
// app.set('view engine', '.hbs');
// app.set('pages', path.join(__dirname, 'pages'));

// // Define a route to render a Handlebars template
// app.get('/', (req, res) => {
//   console.log(req)
//   res.render('index', { name: 'World' });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
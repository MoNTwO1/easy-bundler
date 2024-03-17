import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs';

//const exphbs  = require('express-handlebars');
const app = express();
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// app.use(express.static('./'));
app.use(express.static(`${__dirname}/dist`));

app.set("view engine", "hbs");
app.set("views", __dirname + "/src/pages/"); // установка пути к представлениям

app.get('/', (req, res) => {
  res.render('login-page', {
    title: 'Home Page',
  });
});

app.get('/registration', (req, res) => {
  res.render('registration-page', {
    title: 'Reg',
  });
});



//hbs.registerPartials(path.join(__dirname, '/src/components/'));
// app.set('view engine', '.hbs');
// app.engine('.hbs', exphbs({
//   extname: '.hbs',
//   defaultLayout: 'main',
//   layoutsDir: __dirname + '/src/pages/',
//   partialsDir: __dirname + '/src/components/'
// }));

// app.use("/", function(request, response){      
//   response.render("login-page/login-page.hbs");
// }); 

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist/index.html'));
// });

//console.log(__dirname )
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set("views", __dirname + "/src/pages/");

// app.use('/', (req, res) => {
//   res.render('regustration-page/regustration-page');
// });

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
//app.set("view engine", "hbs");
//app.use(express.static(path.resolve(__dirname, 'dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist/index.html'));
// });
// app.engine('hbs', require('exphbs'));
// app.set("view engine", "hbs");
// app.set("views", __dirname + "/pages"); // установка пути к представлениям
// app.use("/registration", function(_, response){
     
//     response.render("registration-page.hbs");
// });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
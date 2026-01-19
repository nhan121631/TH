const express = require('express');
const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
// app.engine('handlebars', handlebars.engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

app.get('/home', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let users = [
  { id: 1, name: "Nhan" },
  { id: 2, name: "An" }
];
app.get('/users', (req, res) => {
  res.render('users', { users: users });
}
);
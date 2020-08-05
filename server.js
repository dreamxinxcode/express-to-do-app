const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

const tasks = ['Water the dog', 'Fold the dishes', 'Walk the laundry'];

// Homepage
app.get('/', (req, res) => {
  const templateVars = {
    tasks: tasks
  };
  res.render('homepage', templateVars);
});

// Add task
app.post("/", (req, res) => {
  tasks.push(req.body.newTask);
  res.redirect('/', templateVars);
});

// Delete task
app.post("/:shortURL/delete", (req, res) => {
  delete urlDatabase[req.params.shortURL];
  res.redirect('/urls');
});

// Start server
app.listen(PORT, () => {
  console.log('Server running');
});
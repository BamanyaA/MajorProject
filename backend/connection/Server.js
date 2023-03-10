const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const uri="mongodb+srv://Tilahun21:Enatnesh1212@tourwebsiteclustor.oekzhtk.mongodb.net/?retryWrites=true&w=majority"

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error connecting to MongoDB", err);
});

// Define schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String
});

// Define model
const User = mongoose.model('User', userSchema);

// Use middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define route for form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Create a new user document
  const user = new User({ name, email });

  // Save the user document to MongoDB
  user.save().then(() => {
    console.log("User saved to MongoDB");
    res.send("User saved to MongoDB");
  }).catch((err) => {
    console.log("Error saving user to MongoDB", err);
    res.status(500).send("Error saving user to MongoDB");
  });
});



// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

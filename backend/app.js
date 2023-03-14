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


// import routes file
const userRoutes = require('./routes/user');
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);



// Start the server
app.listen(3000, () => {
  
  console.log('Server started on port 3000');
});

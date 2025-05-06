const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PostRoutes = require('./routes/posts');
// const cors = require('cors');

const CategoryRoutes = require("./routes/categories")


const app = express();
const PORT = process.env.PORT || 8000;


//middleware
app.use(bodyParser.json());
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/blog")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("Error connecting to MongoDB", err);
});
//connecting to MongoDB


//Use routes
app.use('/api/posts', PostRoutes);
app.use('/api/categories', CategoryRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
const url = "mongodb+srv://Sedulous:ZSu2usgHR3zhA%23a@cluster0.u1xia.mongodb.net/Milli?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url, {
 useNewUrlParser: true, useUnifiedTopology: true, }).then(() => console.log('Connected to MongoDB'))
 .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
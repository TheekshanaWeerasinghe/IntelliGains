const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');

const app = express();
connectDB(); 

app.use(cors());
app.use(express.json()); 

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

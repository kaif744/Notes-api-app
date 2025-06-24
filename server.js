const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const noteRoutes = require('./routes/noteRoutes');
require('dotenv').config();

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.static('public')); // 👈 serve frontend

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.log('❌ DB Connection Error:', err));

// Mount the route
app.use('/api/notes', noteRoutes); // This is what makes /api/notes work

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
app.get('/api/test', (req, res) => {
  res.send('✅ API is working');
});


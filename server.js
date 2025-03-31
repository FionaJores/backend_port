const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 3000;
const apiRoutes = require('./routes/api');


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-domain.vercel.app" 
  ],
  credentials: true
}));

app.use(express.json());


app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

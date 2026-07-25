const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Macker AI Backend is running successfully!');
});

const PORT = process.env.PORT || process.env.RAILWAY_PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
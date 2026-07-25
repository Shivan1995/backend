const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        project: "Macker AI Pro",
        status: "Backend Running 🚀",
        version: "1.0.3"
    });
});

const PORT = 4730;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
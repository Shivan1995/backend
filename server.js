const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        project: "Macker AI Pro",
        status: "Backend Running 🚀",
        version: "1.0.1"
    });
});

const PORT = process.env.PORT || process.env.RAILWAY_PORT || 4730;

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

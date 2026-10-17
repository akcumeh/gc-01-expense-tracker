import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send("Hello World, welcome to ExTrak. ExTrak is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});


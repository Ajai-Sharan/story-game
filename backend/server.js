import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import storyRouter from './router/story.router.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 5000; 

app.use(cors({ origin: "https://story-game-bay.vercel.app/" }));
app.use(express.json());

app.use('/api', storyRouter);

app.get('/', (req, res) => {
    res.send('Storytelling Game Backend');
});


export default app;
import express from "express";
import { generateStorySegment } from "../controller/generateStroy.controller.js"; 

const router = express.Router();


router.post("/story", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
          return res.status(400).json({ error: 'Prompt is required' });
        }

        const storySegment = await generateStorySegment(prompt);
        res.json(storySegment);

    } catch (error) {

        console.error('Error generating story:', error); 
        res.status(500).json({ error: 'Failed to generate story' });

    }
});



export default router;

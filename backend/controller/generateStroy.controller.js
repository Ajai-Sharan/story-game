import { GoogleGenAI } from '@google/genai';
import axios from 'axios';


export const generateStorySegment = async (prompt) => {

  if (!process.env.GEMINI_API_KEY) {
    throw new Error('Gemini API key is not set in environment variables');
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const storyResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Create a short story segment (2-3 paragraphs) based on this prompt: ${prompt}. 
                   Make it engaging and descriptive.`,
    });

    if (!storyResponse || !storyResponse.text) {
      throw new Error('Failed to generate story segment');
    }

    const storyText = storyResponse.text.trim();

    const choicesResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Based on this story segment: "${storyText}"
                     Generate 3 interesting possible continuations for the story (one sentence each).
                    Make them diverse and engaging. Give only plain text without any extra formatting and don't add any symbols or numbers before the choices and give only the choices without any extra text and add the theme in brackets.`,
    });


    if (!choicesResponse || !choicesResponse.text) {
      throw new Error('Failed to generate story choices');
    }

    const choices = choicesResponse.text
      .split('\n')
      .filter(choice => choice.trim())
      .map(choice => choice.replace(/^\d+\.\s*/, '').replace(/\*/g, '').trim()) || [];

    const keywords = prompt.split(' ').slice(0, 5).join(' ');

    const unsplashResponse = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: keywords,
        per_page: 3,
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    const images = unsplashResponse.data.results.map(image => ({
      url: image.urls.small, 
      description: image.alt_description || 'No description available',
    }));

    return {
      text: storyText,
      choices,
      images
    };
  } catch (error) {
    console.error('Error in generateStorySegment:', error);
    throw new Error('Failed to connect to Gemini API. Please check the endpoint or your network.');
  }

}



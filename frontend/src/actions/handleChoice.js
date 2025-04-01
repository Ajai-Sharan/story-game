import { generateStory } from './generateStory';

export const handleChoice = (choice, setStorySegments, setIsLoading, setError, storySegments) => {
  generateStory(choice, setStorySegments, setIsLoading, setError, storySegments);
};

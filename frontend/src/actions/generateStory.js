export const generateStory = async (userPrompt, setStorySegments, setIsLoading, setError, storySegments) => {
  try {
    setIsLoading(true);
    setError('');

    const response = await fetch(`http://localhost:5001/api/story`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: userPrompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate story');
    }

    const data = await response.json();
    setStorySegments([...storySegments, data]);
  } catch (err) {
    setError('Failed to generate story. Please try again.');
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};

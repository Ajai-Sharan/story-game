export const downloadStory = (storySegments) => {
  const storyText = storySegments
    .map(segment => segment.text)
    .join('\n\n');

  const blob = new Blob([storyText], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-ai-story.txt';
  a.click();
  window.URL.revokeObjectURL(url);
};

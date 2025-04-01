import React from 'react';
import { Book } from 'lucide-react';
import ErrorMessage from './components/ErrorMessage';
import StorySegments from './components/StorySegments';
import Actions from './components/Actions';
import StoryInput from './components/StoryInput';
import useStoryStore from './store/useStoryStore';

function App() {
  const {
    prompt,
    setPrompt,
    isLoading,
    setIsLoading,
    storySegments,
    setStorySegments,
    error,
    setError,
  } = useStoryStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        
        <div className="flex items-center justify-center mb-8">
          <Book className="w-8 h-8 text-indigo-600 mr-2" />
          <h1 className="text-4xl font-bold text-gray-800">AI Story Weaver</h1>
        </div>

        <StoryInput
          prompt={prompt}
          setPrompt={setPrompt}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setStorySegments={setStorySegments}
          setError={setError}
          storySegments={storySegments}
        />

        <ErrorMessage error={error} />

        <StorySegments
          storySegments={storySegments}
          isLoading={isLoading}
          setStorySegments={setStorySegments}
          setIsLoading={setIsLoading}
          setError={setError}
        />

        <Actions storySegments={storySegments} />
      </div>
    </div>
  );
}

export default App;
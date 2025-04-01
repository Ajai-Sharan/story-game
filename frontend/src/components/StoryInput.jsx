import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { generateStory } from '../actions/generateStory';

function StoryInput({ prompt, setPrompt, isLoading, setIsLoading, setStorySegments,  setError, storySegments }) {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Begin your story with a prompt
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => {setPrompt(e.target.value); setStorySegments([])} }
            placeholder="A dragon in a futuristic city..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            disabled={isLoading}
          />
          <button
            onClick={() => generateStory(prompt, setStorySegments, setIsLoading, setError, storySegments)}
            disabled={isLoading || !prompt.trim()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isLoading ? (
              <Sparkles className="animate-spin h-5 w-5" />
            ) : (
              <ArrowRight className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoryInput;

import { Download } from 'lucide-react';
import { downloadStory } from '../actions/downloadStory.js';

const Actions = ({ storySegments }) => {
  if (storySegments.length === 0) return null;

  return (
    <div className="max-w-2xl mx-auto mt-8 flex justify-end gap-4">
      <button
        onClick={() => downloadStory(storySegments)}
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Download className="h-4 w-4 mr-2" />
        Download Story
      </button>
    </div>
  );
};

export default Actions;

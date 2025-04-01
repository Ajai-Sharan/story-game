import { handleChoice } from '../actions/handleChoice.js';

const StorySegments = ({ storySegments, isLoading, setStorySegments, setIsLoading, setError }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {storySegments.map((segment, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          {segment.images && segment.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {segment.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="flex flex-col items-center">
                    <img
                      src={image.url}
                      alt={image.description || `Image ${imgIndex + 1}`}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {image.description || 'No description available'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          <div className="p-6">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              {segment.text}
            </p>
            {index === storySegments.length - 1 && segment.choices && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700 mb-2">What happens next?</p>
                {segment.choices.map((choice, choiceIndex) => (
                  <button
                    key={choiceIndex}
                    onClick={() => handleChoice(choice, setStorySegments, setIsLoading, setError, storySegments)}
                    disabled={isLoading}
                    className="w-full text-left p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-150 disabled:opacity-50"
                  >
                    {choice}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StorySegments;

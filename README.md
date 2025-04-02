# Story Game

**Story Game** is an interactive storytelling application where users can generate engaging story segments based on their prompts. The app uses AI to create story continuations, provide choices for the next steps, and fetch relevant images from Unsplash to enhance the storytelling experience.

## Features
- **AI-Generated Stories**: Generate story segments based on user prompts using AI.
- **Interactive Choices**: Provide users with multiple choices to decide the next step in the story.
- **Image Integration**: Fetch relevant images from Unsplash based on the story's theme.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Sharable Links**: Generate sharable links for story segments.

## Technologies Used

**Frontend**:

- **React**: For building the user interface.

- **Tailwind CSS**: For styling the application.

- **Fetch API**: For making API requests to the backend.

**Backend**:

- **Node.js**: For building the server.

- **Express.js**: For handling API routes.

- **Google GenAI**: For generating story content and choices.

- **Unsplash API**: For fetching relevant images.

- **CORS**: For handling cross-origin requests.

**Deployment**:

- **Vercel**: For deploying both the frontend and backend.

## Project Structure
The project is organized as follows:
```
story-game/
├── backend/
│   ├── controller/
│   │   └── generateStory.controller.js  # Handles story generation logic
│   ├── router/
│   │   └── story.router.js             # API routes for story generation
│   ├── server.js                       # Express server setup
│   └── shared/                         # Directory for sharable files (if applicable)
├── frontend/
│   ├── src/
│   │   ├── actions/
│   │   │   └── generateStory.js        # Handles API calls for story generation
│   │   ├── components/
│   │   │   ├── StoryInput.jsx          # Input field for user prompts
│   │   │   ├── StorySegments.jsx       # Displays story segments and images
│   │   │   └── Actions.jsx             # Handles user choices
│   │   ├── App.jsx                     # Main React component
│   │   └── index.css                   # Tailwind CSS styles
│   └── public/
│       └── index.html                  # HTML entry point
├── .env                                # Environment variables
├── package.json                        # Project dependencies
└── README.md                           # Project documentation
```

## Setup and Installation

**Prerequisites**

- Node.js (v18 or higher)
- npm or yarn
- Unsplash API Access Key
- Google GenAI API Key

**Steps**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/story-game.git
    cd story-game
   ```
2. **Install Dependencies**:
    - for the backend
   ```bash
    cd backend
    npm install
   ```
   - for the frontend
   ```bash
    cd ../frontend
    npm install
   ```
3. **Set Up Environment Variables**:Create a `.env` file in the `backend` directory and add the following:
    ```
    PORT=5000
    GEMINI_API_KEY=your_google_genai_api_key
    UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    ```


## Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.





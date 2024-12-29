# Netflix Gemini

Netflix Gemini is a UI clone of Netflix with a unique feature of integrating the Google Gemini API to recommend movies based on user search. The project showcases a seamless user experience, modern design, and additional functionalities like multi-language support and GPT-powered search.

## Features

### Authentication
- **Login/Signup**:
  - Fully functional Sign-In and Sign-Up forms.
  - Redirect to the Browse page upon successful authentication.

### Browse Page
- **Protected Route**:
  - Users must be logged in to access this page.
  - Redirects unauthorized users to the Login page.
- **Header**:
  - Includes navigation and branding.
- **Main Movie Section**:
  - Features a trailer playing in the background (autoplay and muted).
- **Title and Description**:
  - Displays key details about the featured movie.
- **Movie Suggestions**:
  - Horizontal scrolling lists of movies.

### Netflix GPT
- **Search Bar**:
  - GPT-powered search for movie recommendations.
- **Movie Suggestions**:
  - Provides tailored recommendations using the Google Gemini API.
- **Multi-language Support**:
  - Allows users to search and interact in multiple languages.

## Steps

### Day 1: Setup and Authentication
1. **Setting up Tailwind CSS**
   - Configured Tailwind for styling the application.
2. **Header Component**
   - Built the navigation bar.
3. **Routing**
   - Implemented routing for various pages.
4. **Login Form**
   - Created a login form with validation.
5. **Sign-Up Form**
   - Developed a sign-up form with validation.
6. **Form Validation**
   - Ensured robust validation for all input fields.
7. **useRef Hook**
   - Utilized useRef for efficient DOM manipulation.
8. **Firebase Setup**
   - Configured Firebase for authentication and database management.
9. **Deploying the App**
   - Deployed the app to production.
10. **Firebase Sign-Up Implementation**
    - Created Sign-Up functionality using Firebase.

### Day 2: User Management and Movie Features
11. **Sign-In API**
    - Implemented user sign-in functionality.
12. **Redux User Store**
    - Created a Redux slice to manage user state.
13. **Logout Feature**
    - Enabled users to log out.
14. **Route Protection**
    - Redirected `/browse` to the login page if not authenticated, and vice versa.
15. **Constants File**
    - Centralized constant values for reusability.
16. **API Call for Movies**
    - Fetched movie data from an external API.
17. **Custom Hook for Now Playing Movies**
    - Encapsulated fetching logic in a reusable hook.
18. **Redux Store Update**
    - Updated the store with movie data.
19. **Fetch Trailer Data**
    - Retrieved trailer video IDs using the YouTube API.
20. **Updated Store with Trailer IDs**
    - Managed trailer data in the Redux store.
21. **Trailer Playback**
    - Implemented autoplay and mute for the background trailer.
22. **Tailwind Enhancements**
    - Enhanced the design using Tailwind CSS.
23. **Movie List Component**
    - Built a component to display movie lists.
24. **Movie Card Component**
    - Designed cards for individual movies.
25. **Cards Section UI**
    - Finalized the UI for the movie cards section.

### GPT Search Feature
26. **GPT Search Page**
    - Created a dedicated page for GPT-powered movie search.
27. **Search Bar**
    - Integrated Google Gemini API for intelligent search.
28. **Multi-language Support**
    - Enabled multi-language search capabilities.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Firebase
- **API Integration**: Google Gemini API, YouTube API
- **State Management**: Redux
- **Hosting**: Deployed on a production platform

## How to Run the Project
1. Clone the repository:
   ```bash
   https://github.com/Tusharpal353/Netflix-GPT.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-gemini
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.


---
Enjoy exploring Netflix Gemini, where modern UI meets intelligent movie recommendations!


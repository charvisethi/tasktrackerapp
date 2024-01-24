Task Tracker App
Task Tracker App is a simple React application for tracking tasks with Firebase Realtime Database integration for data storage.

Table of Contents
Introduction
Features
Prerequisites
Installation
Usage
Contributing
License

Introduction
Task Tracker App allows users to manage their tasks effectively. Users can add, edit, and delete tasks, as well as toggle the status of each task between "In Progress" and "Completed." The app utilizes Firebase Realtime Database for seamless data storage and retrieval.

Features
Add tasks with a title, description, and initial status.
Edit existing tasks to update title, description, and status.
Delete tasks when they are no longer needed.
Toggle the status of tasks between "In Progress" and "Completed."
Firebase Realtime Database integration for data persistence.

Prerequisites
Ensure you have the following installed on your machine:

Node.js (including npm)
Firebase account and a Firebase Realtime Database set up.
Installation
Clone the repository:
https://github.com/charvisethi/tasktrackerapp
cd tasktrackerapp
Install dependencies:
npm install
Create a .env file in the root directory and add your Firebase configuration:
makefile
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Replace the placeholders with your Firebase project details.

Usage
Start the React app:
npm start

Open your browser and go to http://localhost:3000 to view and interact with the Task Tracker App.

Contributing
Contributions are welcome! If you have any improvements or feature suggestions, feel free to submit a pull request.

License
This project is licensed under the MIT License.

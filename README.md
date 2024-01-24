# Task Tracker App

Task Tracker App is a simple React application for tracking tasks with Firebase Realtime Database integration for data storage.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Task Tracker App allows users to manage their tasks effectively. Users can add, edit, and delete tasks, as well as toggle the status of each task between "In Progress" and "Completed." The app utilizes Firebase Realtime Database for seamless data storage and retrieval.

## Features

- Add tasks with a title, description, and initial status.
- Edit existing tasks to update title, description, and status.
- Delete tasks when they are no longer needed.
- Toggle the status of tasks between "In Progress" and "Completed."
- Firebase Realtime Database integration for data persistence.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (including npm)
- [Firebase](https://firebase.google.com/) account and a Firebase Realtime Database set up.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/charvisethi/tasktrackerapp

2. Navigate to the project directory:

   ```bash
   cd task-tracker-app

3. Install dependencies:

   ```bash
   npm install

4. Create a .env file in the root directory and add your Firebase configuration:

   ```makefile
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_DATABASE_URL=your-database-url
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id

Replace the placeholders with your Firebase project details.

## Usage
1. Start the React app:
   
      ```bash
      npm start
      
2. Open your browser and go to http://localhost:3000 to view and interact with the Task Tracker App.

## Contributing
Contributions are welcome! If you have any improvements or feature suggestions, feel free to submit a pull request.

## License
This project is licensed under the MIT License.
   

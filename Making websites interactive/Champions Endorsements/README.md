# We are the Champions - Endorsements Project

This is a simple HTML, CSS, and Vanilla JavaScript project that allows users to enter endorsements into an input field and displays them using Firebase Realtime Database. It's a fun project inspired by the iconic Freddie Mercury.
## Table of Contents 
- [Project Description](https://chat.openai.com/c/39befe2a-d3fd-4686-a557-95791c9ec8af#project-description) 
- [Usage](https://chat.openai.com/c/39befe2a-d3fd-4686-a557-95791c9ec8af#usage) 
- [Installation](https://chat.openai.com/c/39befe2a-d3fd-4686-a557-95791c9ec8af#installation) 
- [Firebase Configuration](https://chat.openai.com/c/39befe2a-d3fd-4686-a557-95791c9ec8af#firebase-configuration) 
- [Project Structure](https://chat.openai.com/c/39befe2a-d3fd-4686-a557-95791c9ec8af#project-structure) 
- [Contributing](https://chat.openai.com/c/39befe2a-d3fd-4686-a557-95791c9ec8af#contributing) 
- [License](https://chat.openai.com/c/39befe2a-d3fd-4686-a557-95791c9ec8af#license)
## Project Description

"We are the Champions - Endorsements" is a web application that lets users write endorsements and publish them. These endorsements are stored in a Firebase Realtime Database and displayed in a list format on the web page.

The project includes the following components:
- An input field where users can write their endorsements.
- A "Publish" button to add endorsements to the Firebase database.
- A list to display the endorsements in a visually appealing manner.
- Firebase Realtime Database integration to store and retrieve endorsements.
## Usage
1. Enter your endorsement in the input field.
2. Click the "Publish" button to add your endorsement to the list.
3. Your endorsement will be displayed in the list below the input field.
## Installation

To run this project locally, follow these steps: 
1. Clone this repository to your local machine:

```bash

git clone <repository-url>
``` 
2. Open the project folder in your code editor. 
3. Serve the project using a local development server or a web server of your choice. You can use tools like `Live Server` in Visual Studio Code or Python's built-in `http.server`. For example, using Python:

```bash

python -m http.server
``` 
4. Open your web browser and navigate to the project's URL, typically `http://localhost:8000` or another port specified by your server.
## Firebase Configuration

This project uses Firebase Realtime Database for storing endorsements. To configure Firebase for your project, follow these steps: 
1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/) . 
2. Go to the project settings and scroll down to the Firebase SDK snippet section. 
3. Select "Config" to get your Firebase configuration object. 
4. Replace the Firebase configuration object in `index.js` with your own configuration:

```javascript

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
``` 
5. Ensure that your Firebase Realtime Database rules are configured to allow read and write access.
## Project Structure 
- `index.html`: The main HTML file that defines the structure of the web page. 
- `index.css`: The CSS file that styles the web page. 
- `index.js`: The JavaScript file that handles user interactions, Firebase integration, and DOM manipulation. 
- `assets/`: A folder containing images and icons used in the project.
## Contributing

Contributions to this project are welcome. If you have suggestions, enhancements, or bug fixes, please open an issue or create a pull request.
## License

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE) . You are free to use, modify, and distribute this project as per the terms of the license.

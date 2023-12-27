<img width="1400" alt="Screenshot 2023-12-27 at 1 58 24 PM" src="https://github.com/descope-sample-apps/expo-sample-app/assets/32936811/3ca54235-19a3-407f-8b36-dd1425d957e2">


---

This sample app is an open-source project, built with React Native and Expo. It demonstrates the integration of Descope Flows in a mobile application. This app also showcases user login via OAuth 2.0 standard, managing user sessions, and navigating between different screens based on the authentication state.

> **Note:** If you simply want Social Login, without any other flows, you can simply attach a `Sign Up or In / OAuth` action between the `Start` and `End` parts of your flow, and define which Provider you wish to you (e.g. Google, Facebook, GitHub, etc.)

## Table of Contents 📝

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Deployment](#deployment)
5. [Issue Reporting](#issue-reporting)

## Features ✨

- **Descope OAuth Login**: Users can log in using OAuth providers like Google, facilitated by Descope.
- **Navigation Flow**: Seamless navigation between login, main, and logout screens.
- **User Session Management**: Handles user sessions, displaying user information post-login.

## Installation 💿

1. Clone the repository:

```bash
git clone https://github.com/your-github-username/your-react-native-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Setup environment variables:

Create a `.env` file in the root of the project and fill in the Descope Project ID:

```env
EXPO_PUBLIC_DESCOPE_PROJECT_ID=<Your Descope Project ID>
```

## Running the Application 🚀

To start the application, run:

```bash
npx expo start --localhost
```

This will open up a web interface. From there, you can choose to run the app on an iOS simulator, Android emulator, or your physical device by scanning the QR code.

## Deployment 🌐

To deploy your app, you can use Expo's build services:

> You'll need to make sure that you've already installed the `eas-cli` to be able to run these commands below. For more information, visit the Expo Documentation [here](https://docs.expo.dev/build/setup/).

1. Run the following command to build your project:

```bash
expo build:android
# or
expo build:ios
```

2. Follow the instructions on the Expo website to set up your developer accounts on Apple App Store and Google Play Store.

3. Upload the generated build to the respective store.

## Issue Reporting ⚠️

For any issues or suggestions, feel free to open an issue in the GitHub repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

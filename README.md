# React Native Shop App

This is a React Native application that displays a set of categorical icons. When a user clicks on any of these categories, they can view stored messages related to that category.

## Project Structure

```
react-native-shop/
├── android/                # Android specific files
├── ios/                    # iOS specific files
├── node_modules/           # Dependencies
├── src/
│   ├── components/         # Reusable components
│   │   ├── CategoryIcon.js # Category icon component
│   │   └── MessageItem.js  # Message item component
│   ├── data/
│   │   └── categories.js   # Mock data for categories
│   ├── screens/
│   │   ├── HomeScreen.js   # Main screen with categories
│   │   └── MessagesScreen.js # Screen to display messages
│   └── styles/
│       └── globalStyles.js # Global styling (optional)
├── .gitignore              # Git ignore file
├── App.js                  # Main application component
├── app.json                # Application configuration
├── babel.config.js         # Babel configuration
├── index.js                # Entry point
├── package.json            # Project dependencies
└── README.md               # Documentation
```

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Configuration and Setup

### 1. Clone the repository

```bash
git [clone https://github.com/yourusername/react-native-shop.git](https://github.com/LouisaSally/react-native-shop)
cd react-native-shop
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. iOS setup (macOS only)

Install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
```

### 4. Running the application

#### For iOS (macOS only):

```bash
npx react-native run-ios
```

#### For Android:

```bash
npx react-native run-android
```

## Application Screenshots

### Home Screen
![Home Screen](screenshots/home_screen.jpeg)

The home screen displays circular icons representing different categories: You, Home, Love, Family, Friends, and School.

### Messages Screen
![Messages Screen](screenshots/messages_screen.jpeg)

When a category is selected, the messages screen displays a list of related messages.

## Features

- Circular category icons with distinct colors
- Navigation between screens
- Display of category-specific messages
- Clean and intuitive UI

## Technical Implementation

- **Navigation**: Uses React Navigation for screen transitions
- **UI Components**: Custom components for icons and message items
- **Data Management**: Mock data stored in a separate file
- **Styling**: StyleSheet API for consistent styling across platforms

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Clean and rebuild the project:

```bash
# For Android
cd android && ./gradlew clean && cd ..
npx react-native run-android

# For iOS
cd ios && pod install && cd ..
npx react-native run-ios
```

# React Native Chat App

A real-time chat application built with React Native that allows users to create and join chat rooms, and communicate with other users in real-time.

## Features

- Set username
- View available chat rooms
- Create new chat rooms
- Join existing chat rooms
- Real-time messaging using WebSocket
- System notifications for user join/leave events
- Modern UI with support for both iOS and Android

## Prerequisites

- Node.js >= 18
- React Native development environment set up
- iOS: XCode (for iOS development)
- Android: Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ChatAppTask
```

2. Install dependencies:
```bash
npm install
```

3. iOS specific setup:
```bash
cd ios
pod install
cd ..
```

## Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

## API Integration

The app integrates with a chat API service with the following endpoints:

- Base URL: https://chat-api-k4vi.onrender.com/
- API Documentation:
  - Swagger UI: https://chat-api-k4vi.onrender.com/docs
  - Redocly UI: https://chat-api-k4vi.onrender.com/redoc

### WebSocket Connection

The app uses WebSocket for real-time communication:
- WebSocket URL: ws://chat-api-k4vi.onrender.com/ws/{roomID}/{username}

## Project Structure

```
src/
├── components/      # Reusable components
├── navigation/      # Navigation configuration
├── screens/         # Screen components
├── services/        # API and WebSocket services
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Tech Stack

- React Native
- TypeScript
- React Navigation
- Axios for HTTP requests
- WebSocket for real-time communication
- React Native Vector Icons
- React Native Async Storage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Demo 
I am adding demo video. Please go and watch of features.

https://youtube.com/shorts/iCSSSb_05SY?si=8MkQI2WUOVDODYXC

## App link

https://drive.google.com/file/d/1cmhh28VEVHGBLxc-35oOF7f1ijYjWCu8/view?usp=sharing

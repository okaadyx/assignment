# Food Catalog App

![Platform](https://img.shields.io/badge/platform-android%20|%20ios-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

A robust React Native mobile application for browsing, searching, and managing a catalog of food items. This app demonstrates modern mobile development practices using TypeScript, Redux Toolkit, and React Query.

## App Overview

The **Food Catalog App** allows users to:
- **Browse** a diverse collection of food items with rich visuals.
- **Search** instantly for foods by name or category (Client-side search).
- **Filter** items by specific categories (e.g., Pizza, Dessert).
- **Manage Favorites**, persisting them across sessions.
- **View Details** including price, cuisine type, and dietary classification (Veg/Non-Veg).

The app is built to simulate a real-world e-commerce or food delivery experience, using a static API configuration (JsonBin) to mock backend interactions.

---

## 🚀 How to Run

**APK Download:** [Get the latest build here](https://drive.google.com/file/d/1Vx4Hz4SmY5mFGjv1hVAWHBuLFPMZj7Nd/view?usp=sharing)

**Demo Video:** [Watch the demo here](https://drive.google.com/file/d/1VBV__C4LAr_g6dY7yauDIkVObZ4MlIBQ/view?usp=sharing)

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v20 or higher)
- **React Native CLI**: `npm install -g react-native-cli`
- **Java Development Kit (JDK)**: v17 recommended
- **Android Studio** (for Android development)
- **Xcode** (macOS only, for iOS development)

**Project Dependencies:**
- React Native: 0.83.1
- React: 19.2.0
- TypeScript: 5.8.3

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/okaadyx/test-assignment
   cd test-assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS pods (macOS only):**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### Android
1. Start Metro Bundler:
   ```bash
   npm start
   ```
2. Launch App:
   ```bash
   npx react-native run-android
   ```

#### iOS
1. Start Metro Bundler:
   ```bash
   npm start
   ```
2. Launch App:
   ```bash
   npx react-native run-ios
   ```

### Troubleshooting
- **Metro Cache**: `npm start -- --reset-cache`
- **Android Build**: `cd android && ./gradlew clean && cd ..`
- **iOS Build**: Delete `ios/Pods` & `Podfile.lock`, then `pod install`.

---

## 🏗 Architecture

The application is structured around a clean, modular architecture that separates concerns for maintainability and scalability.

```
App
├── UI Layer (Screens & Components)
├── State Management (Redux Toolkit)
├── Data Layer (React Query & Axios)
└── Service Layer (API Definition)
```

### Key Components

1.  **Service Layer (`services/`)**
    *   **Abstraction**: A dedicated `FoodApi` class handles all network requests.
    *   **Mock Backend**: Connects to JsonBin to simulate real-world REST interactions.
    *   **Caching**: `React Query` manages caching, background refetches, and server state synchronization.

2.  **State Management (`store/`)**
    *   **Client State**: Redux Toolkit manages global UI state (Favorites).
    *   **Persistence**: `redux-persist` ensures the Favorites list survives app restarts using `AsyncStorage`.

3.  **UI Architecture (`src/components/`)**
    *   **Atomic Design**: Reusable atoms (buttons, icons) and molecules (FoodCard).
    *   **Performance**: Components utilize `React.memo` and FlatList optimizations for smooth scrolling.

## 🛠 Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Core** | React Native 0.83 | Cross-platform mobile framework |
| **Language** | TypeScript 5.8 | Static typing and type safety |
| **State** | Redux Toolkit | Global client state management |
| **Persistence** | Redux Persist | Local storage for user data |
| **Networking** | Axios + React Query | API fetching and server state management |
| **Navigation** | React Navigation v7 | Native stack and tab routing |
| **UI** | Vector Icons | Iconography |

## ✨ Features Deep Dive

### 🏠 Home Tab
- **Infinite Scroll**: Efficiently renders large lists of items.
- **Optimized Images**: Handles remote image loading gracefully.

### 🔍 Search Tab
- **Client-Side Search**: Leverages local filtering for zero-latency search results.
- **Dynamic Categories**: Automatically aggregates categories from the dataset.

### ❤️ Favorites System
- **Real-time Toggle**: Add/remove items instantly from any screen.
- **Persistent Storage**: Uses AsyncStorage json-storage backend.

## 📂 Project Structure

```bash
testing/
├── src/
│   ├── components/       # Shared UI components (FoodCard, CategoryComponent)
│   ├── screens/          # Application screens
│   │   ├── tabs/         # Tab Navigator screens (Home, Search, Favorites)
│   │   └── ...           # Stack screens (Details, Welcome)
│   ├── navigation/       # Navigation configuration
│   ├── styles/           # Global styles and themes
│   └── constants/        # App constants (Colors, API URLs)
├── services/             # API services and types
├── store/                # Redux store setup
├── android/              # Native Android code
└── ios/                  # Native iOS code
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

# Food Catalog App

A robust React Native mobile application for browsing, searching, and managing a catalog of food items. This app demonstrates modern mobile development practices using TypeScript, Redux Toolkit, and React Query.

## App Overview

The **Food Catalog App** allows users to:
- **Browse** a diverse collection of food items with rich visuals.
- **Search** instantly for foods by name or category (Client-side search).
- **Filter** items by specific categories (e.g., Pizza, Dessert).
- **Manage Favorites**, persisting them across sessions.
- **View Details** including price, cuisine type, and dietary classification (Veg/Non-Veg).

The app is built to simulate a real-world e-commerce or food delivery experience, using a static API configuration (JsonBin) to mock backend interactions.

## Architecture

The application follows a clean, modular architecture:

### 1. Service Layer (`services/`)
- **API Handling**: Centralized in `services/food/index.ts`.
- **Data Source**: Fetches data from a configured JsonBin endpoint, simulating a REST API.
- **React Query**: utilized via `useFoodList` hook to manage server state, caching, and background updates.

### 2. State Management (`store/`)
- **Redux Toolkit**: Manages global client state.
- **Favorites Slice**: Handles `addToFavorites`, `removeFromFavorites`, and `toggleFavorites` actions.
- **Persistence**: `redux-persist` saves the `favorites` slice to `AsyncStorage`, ensuring user data survives app restarts.

### 3. UI Components (`src/components/`)
- **Atomic Design**: Small, reusable components like `FoodCard` are used across multiple screens.
- **FoodCard**: 
    - Display: Thumbnail, Title, Cuisine, Price.
    - Logic: Visual indicators for Veg (Green) vs Non-Veg (Red).
    - Interaction: Heart icon for toggling favorites directly from the card.

## Features Deep Dive

### 🏠 Home Tab
- **Grid Layout**: Displays food items in a responsive 2-column grid.
- **Performance**: Optimized rendering for smooth scrolling.

### 🔍 Search Tab
- **Client-Side Filtering**: Fetches the full dataset once and performs real-time filtering using `useMemo` for instant feedback.
- **Category Discovery**: Displays available categories when the search bar is empty.

### ❤️ Favorites Tab
- **Persistence**: Saved items are stored locally.
- **Management**: Users can remove items directly from this list.

### 📄 Food Details
- **Rich Information**: Shows high-resolution images and detailed metadata.
- **Navigation**: smooth transition from listing screens.

## Technical Decisions

- **Why React Query?** 
  - To separate **Server State** (food list) from **Client State** (favorites).
  - Provides out-of-the-box caching and loading states (`isLoading`).

- **Why Redux Toolkit?**
  - Simplifies Redux logic, reducing boilerplate for the Favorites feature.
  - Built-in immutability handling (Immer) makes state updates safer.

- **Why Client-Side Search?**
  - For this dataset size, client-side filtering offers superior responsiveness (zero latency) compared to server-side search.

## Technologies

- **Core**: React Native 0.83, TypeScript 5.8
- **State**: Redux Toolkit, Redux Persist
- **Data**: Axios, TanStack React Query
- **Navigation**: React Navigation v7 (Native Stack & Bottom Tabs)
- **UI**: React Native Vector Icons, Safe Area Context

## Project Structure

```
testing/
├── src/
│   ├── components/
│   │   ├── FoodCard.tsx       # Main product display component
│   │   ├── CategoryComponent.tsx
│   │   └── ...
│   ├── screens/
│   │   ├── tabs/
│   │   │   ├── SearchScreen.tsx  # Implements client-side search logic
│   │   │   └── Favorites.tsx     # Connects to Redux store
│   │   └── ...
│   ├── navigation/            # Stack & Tab configurations
│   └── ...
├── services/
│   └── food/                  # API definitions
├── store/
│   └── FavoritesSlice.ts      # Redux logic for favorites
└── ...
```

## How to Run

1. **Install Dependencies**: `npm install`
2. **iOS Setup**: `cd ios && pod install`
3. **Run Android**: `npm start` in one terminal, `npx react-native run-android` in another.
4. **Run iOS**: `npm start` in one terminal, `npx react-native run-ios` in another.

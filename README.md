# KidGrow Teacher (boilerplate)

This workspace contains a minimal Expo + TypeScript boilerplate for the KidGrow Teacher MVP.

Project structure (important folders):
- `android/`, `ios/`
- `src/`
  - `components/` — reusable UI
  - `screens/` — app screens
  - `navigation/` — bottom tabs
  - `services/` — Firebase + storage helpers
  - `hooks/` — custom hooks (auth)

Quick start
1. Install dependencies:

```powershell
npm install
# or
yarn
```

2. Start Expo dev server:

```powershell
npm run start
# or
yarn start
```

3. Open the app in Expo Go or run on device/emulator:

```powershell
npm run android
npm run ios
```

Firebase setup
1. Create a Firebase project and enable Email/Password auth and Firestore.
2. Replace placeholder values in `src/services/firebase.ts` (apiKey, authDomain, projectId, ...).

Notes
- The project uses AsyncStorage for simple offline persistence (`src/services/storage.ts`).
- Toast messages use `react-native-toast-message`.
- Navigation uses React Navigation bottom tabs.

Expo SDK version
- This project targets Expo SDK 54. If your local Expo CLI is older/newer, you can synchronize by running:

```powershell
npx expo upgrade 54.0.0
```

After upgrading, run `npx expo doctor` to check native module compatibility and then run `npm install` / `yarn` to install pinned versions.

Next steps (suggested):
- `npm install` then run the app and test Login screen.
- Add real Firebase config and create a test teacher account.

If you'd like, I can:
- Wire up React Navigation auth flow (login -> tabs)
- Add a sample Report screen with camera/upload helper
- Add TypeScript types across the services

Tell me which of the above you want next.
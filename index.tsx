// gesture handler should be imported at the top-level before any navigation
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent ensures the app is set up appropriately whether
// you load the app in Expo Go or in a native build.
registerRootComponent(App);

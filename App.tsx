import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {NativeBaseProvider} from "native-base";
import {initializeApp} from "firebase/app";
import firebase from "firebase/compat";
import {LoginProvider} from "./context/LoginContext";

const firebaseConfig = {
    apiKey: "AIzaSyA-JwMh2RX0lHB2I9bOHgzjhXfeG08q1oU",
    authDomain: "laundry-d7fbe.firebaseapp.com",
    projectId: "laundry-d7fbe",
    storageBucket: "laundry-d7fbe.appspot.com",
    messagingSenderId: "996984874241",
    appId: "1:996984874241:web:38b942e6df40b07afa2700",
    measurementId: "G-4NTCN4ZN94"
};
if (!firebase.apps.length) {
    //@ts-ignore
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <LoginProvider>
            <NativeBaseProvider>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </SafeAreaProvider>
            </NativeBaseProvider>
        </LoginProvider>


    );
  }
}

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {theme, themeValue} from "./src/themes";
import {Focus} from "./src/features/Focus";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    backgroundColor: theme[themeValue].backgroundColor,
  },
    text: {
      color: theme[themeValue].text
    }
});

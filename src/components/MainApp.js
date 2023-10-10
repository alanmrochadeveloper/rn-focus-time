import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { ThemeButton } from './ThemeButton'
import { ThemeContext } from '../context/theme'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { Focus } from '../features/Focus'
import { useContext, useState } from 'react'
import { theme } from '../themes'
import { spacing } from '../utils/size'
import { Timer } from './Timer'

export const MainApp = () => {

    const [currentSubject, setCurrentSubject] = useState(null)
    const { themeValue } = useContext(ThemeContext)

    return <SafeAreaView style={styles(themeValue).container}>
        <ThemeButton />
        {currentSubject ?
            (
                <Timer
                    focusSubject={currentSubject}
                    onTimerEnd={() => {
                    }}
                    clearSubject={() => {
                    }}
                />
            )
            :
            (<Focus addSubject={setCurrentSubject} />)}
        <ExpoStatusBar style={theme[themeValue].expoStatusBar} />
    </SafeAreaView>
}
const styles = StyleSheet.create((themeValue = 'light') => ({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + spacing.lg : 0,
        backgroundColor: theme[themeValue].backgroundColor,
    },
}))

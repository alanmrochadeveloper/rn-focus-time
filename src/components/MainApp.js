import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { ThemeButton } from './ThemeButton'
import { ThemeContext } from '../context/theme'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { Focus } from '../features/Focus'
import { useContext, useState } from 'react'
import { theme } from '../themes'
import { spacing } from '../utils/size'
import { Timer } from './Timer'
import { HistoryList } from './HistoryList'
import { getUniqueKey } from '../utils/getUniqueKey'

export const MainApp = () => {

    const [currentSubject, setCurrentSubject] = useState(null)
    const [history, setHistory] = useState([])
    const { themeValue } = useContext(ThemeContext)

    const onHandleTimerEnd = (title) => {
        setHistory((prev) => [...prev, { title, key: getUniqueKey(prev.length) }])
    }

    return <SafeAreaView style={styles(themeValue).container}>
        <ThemeButton />
        {currentSubject ?
            (
                <Timer
                    focusSubject={currentSubject}
                    onTimerEnd={onHandleTimerEnd}
                    clearSubject={() => {
                        setCurrentSubject('')
                    }}
                />
            )
            :
            (
                <View style={styles(themeValue).focusContainer}>
                    <Focus style={styles(themeValue).focus} addSubject={setCurrentSubject} />
                    <HistoryList style={styles(themeValue).history} history={history} />
                </View>
            )}
        <ExpoStatusBar style={theme[themeValue].expoStatusBar} />
    </SafeAreaView>
}
const styles = StyleSheet.create((themeValue = 'light') => ({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + spacing.lg : 0,
        backgroundColor: theme[themeValue].backgroundColor,
    },
    focusContainer: {
        flex: 0.3,
    },
}))

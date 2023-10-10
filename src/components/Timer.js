import { StyleSheet, View } from 'react-native'
import { Countdown } from './CountDown'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/theme'
import { RoundedButton } from './RoundedButton'

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    const [isPaused, setIsPaused] = useState(true)
    const { themeValue } = useContext(ThemeContext)
    return <View style={styles(themeValue).container}>
        <View style={styles(themeValue).countdown}>
            <Countdown isPaused={isPaused} onProgress={() => {
            }} />
        </View>
        <View style={styles(themeValue).buttonWrapper}>
            <RoundedButton title={isPaused ? 'start' : 'pause'} onPress={() => setIsPaused((prev) => !prev)} />
        </View>
    </View>
}

const styles = StyleSheet.create((themeValue = 'dark') => ({
    container: {
        flex: 1,
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
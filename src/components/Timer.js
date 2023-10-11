import { StyleSheet, Text, Vibration, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { Countdown } from './CountDown'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/theme'
import { RoundedButton } from './RoundedButton'
import { theme } from '../themes'
import { spacing } from '../utils/size'

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    const [isPaused, setIsPaused] = useState(true)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(1)

    const { themeValue } = useContext(ThemeContext)
    const ONE_SECOND_IN_MS =
        1000

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
    ]

    return <View style={styles(themeValue).container}>
        <View style={styles(themeValue).countdown}>
            <Countdown isPaused={isPaused} onProgress={setProgress} minutes={minutes} onEnd={() => {
                Vibration.vibrate(PATTERN)
            }} />
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles(themeValue).title}>
                    Focusing on:
                </Text>
                <Text style={styles(themeValue).task}>
                    {focusSubject}
                </Text>
            </View>
        </View>
        <View style={{ paddingTop: spacing.sm }}>
            <ProgressBar progress={progress} color={'indigo'} />
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
    title: {
        color: theme[themeValue].text,
        fontWeight: theme.bold,
        textAlign: 'center',
    },
    task: {
        color: theme[themeValue].text,
        textAlign: 'center',
    },
}))
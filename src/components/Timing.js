import { RoundedButton } from './RoundedButton'
import { StyleSheet, View } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { spacing } from '../utils/size'

export const Timing = ({ onHandleMinute }) => {
    const { themeValue } = useContext(ThemeContext)
    return <View style={styles(themeValue).container}>
        <RoundedButton title={'10'} size={60} onPress={() => onHandleMinute(10)} />
        <RoundedButton title={'15'} size={60} onPress={() => onHandleMinute(15)} />
        <RoundedButton title={'20'} size={60} onPress={() => onHandleMinute(20)} />
    </View>
}

const styles = StyleSheet.create(() => ({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: spacing.lg,
        marginBottom: spacing.md,
        padding: spacing.xxl,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}))

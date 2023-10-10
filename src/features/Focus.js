import { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../components/RoundedButton'
import { ThemeContext } from '../context/theme'
import { theme } from '../themes'

export const Focus = ({ addSubject }) => {

    const [subject, setSubject] = useState('')
    const { themeValue } = useContext(ThemeContext)

    return <View style={styles(themeValue).container}>
        <View style={styles(themeValue).inputContainer}>
            <TextInput
                label={'What would you like to focus on?'}
                style={styles(themeValue).textInput}
                value={subject}
                textColor={'black'}
                theme={{ colors: { text: 'purple', error: 'blue' } }}
                onChangeText={setSubject}
            />
            <View style={styles(themeValue).button}>
                <RoundedButton title={'+'} size={50} onPress={() => addSubject(subject)} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create((themeValue = 'dark') => ({
    container: {
        flex: 1,
        backgroundColor: theme[themeValue].backgroundColor,
    },
    button: {
        justifyContent: 'center',
    },
    textInput: {
        marginRight: 10,
        backgroundColor: theme.inputBg,
    },
    inputContainer: {
        padding: 25,
        justifyContent: 'center',
        flexDirection: 'row',
    },
}))
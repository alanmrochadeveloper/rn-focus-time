import {StyleSheet, View} from "react-native";
import { TextInput } from "react-native-paper"
import {theme, themeValue} from "../themes";

export const Focus = () => {
    return <View style={styles.container}>
        <TextInput label={"What would you like to focus on?"} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme[themeValue].backgroundColor,
    },
    text: {
        color: theme[themeValue].text
    }
})
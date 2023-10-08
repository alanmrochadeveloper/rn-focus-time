import {StyleSheet, View} from "react-native";
import { TextInput } from "react-native-paper"
import {theme, themeValue} from "../themes";
import {RoundedButton} from "../components/RoundedButton";

export const Focus = () => {
    return <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput label={"What would you like to focus on?"} />
            <RoundedButton title={"+"}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme[themeValue].backgroundColor,
    },
    inputContainer: {
      flex: 0.5,
      padding: 25,
      justifyContent: "top"
    },
})
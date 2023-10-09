import {StyleSheet, View} from "react-native";
import React, {useContext} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {ThemeContext} from "../context/theme";
import {theme} from "../themes";

export const ThemeButton = () => {
    const {themeValue, setTheme} = useContext(ThemeContext);

    return (<View style={styles(themeValue).container}>
        <Icon style={styles(themeValue).iconButton}
              name={themeValue === "dark" ? "brightness-6" : "brightness-4"}
              size={30}
              theme={"light"}
              color={theme[themeValue].text}
              allowFontScaling
            // icon={themeValue === "light" ? "moon-waning-crescent" : "white-balance-sunny"}
              onPress={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
        />
    </View>)
}

const styles = StyleSheet.create((themeValue = "dark") => ({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: theme[themeValue].backgroundColor,
    },
}))
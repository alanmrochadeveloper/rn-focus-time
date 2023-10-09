import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {theme} from "../themes";
import {ThemeContext} from "../context/theme";

export const RoundedButton = ({
                                  style = {},
                                  textStyle = {},
                                  size = 125,
                                  ...props
                              }) => {
    const {themeValue} = useContext(ThemeContext)
    return (
        <TouchableOpacity style={[styles(size, themeValue).radius, style]} onPress={props.onPress}>
            <Text style={[styles(size, themeValue).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = (size, themeValue) => ({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: theme[themeValue].border,
        borderWidth: 2
    },
    text: {color: theme[themeValue].text, fontSize: size / 3},
});
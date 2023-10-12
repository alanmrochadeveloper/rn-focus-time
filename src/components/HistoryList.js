import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { theme } from '../themes'
import { spacing } from '../utils/size'

export const HistoryList = ({ history }) => {
    if (!history || !history.length) return null
    const { themeValue } = useContext(ThemeContext)
    const renderItem = ({ item }) =>
        <Text key={item.key} style={styles(themeValue).item}> - {item.title}</Text>

    // const renderItem = ({ item }) => <View style={styles(themeValue).item}>
    //     <Text key={item.key} style={styles(themeValue).text}> - {item.title}</Text>
    // </View>

    return (
        <View style={styles(themeValue).container}>
            <Text style={styles(themeValue).title}>Things that you had focus on:</Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create((themeValue = 'dark') => ({
    item: {
        color: theme[themeValue].text,
        fontSize: spacing.md,
        paddingTop: spacing.sm,
    },
    container: {
        flex: 1,
        padding: spacing.sm,
    },
    list: {
        backgroundColor: 'yellow',
    },
    title: {
        color: theme[themeValue].text,
    },
    text: {
        color: theme[themeValue].text,
    },
}))
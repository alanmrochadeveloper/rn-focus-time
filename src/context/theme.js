import { createContext, useState } from 'react'

export const ThemeContext = createContext({
    themeValue: 'dark', setTheme: (value) => value,
})
export const Theme = ({ children }) => {
    const [themeValue, setTheme] = useState('dark')
    return <ThemeContext.Provider value={{ themeValue, setTheme }}>{children}</ThemeContext.Provider>
}
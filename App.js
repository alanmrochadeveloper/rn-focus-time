import { MainApp } from './src/components/MainApp'
import { Theme } from './src/context/theme'


export default function App() {
    return (<Theme>
        <MainApp />
    </Theme>)
}


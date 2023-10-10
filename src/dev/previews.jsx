import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import React from 'react'
import { Theme } from 'src/context/theme'
import { PaletteTree } from './palette'

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path='/Theme'>
                <Theme />
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
import React from 'react'

const ChangeThemContext = React.createContext({
    colorButton: 'btn-primary',
    onChangeColorButton: () =>{}
})

export default ChangeThemContext
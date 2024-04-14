import React from 'react'

const Context = React.createContext({
  isDarkMode: false,
  changeTheme: () => {},
})

export default Context

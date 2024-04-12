import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Context from './context/Context'
import './App.css'

// Replace your code here

class App extends Component {
  state = {isDarkMode: false}

  render() {
    const {isDarkMode} = this.state
    return (
      //   <Context.Provider value={{isDarkMode}}>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
      //   </Context.Provider>
    )
  }
}

export default App

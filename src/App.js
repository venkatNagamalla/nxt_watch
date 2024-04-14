import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Context from './context/Context'
import Home from './components/Home'
import Headers from './components/Headers'
import './App.css'

// Replace your code here

class App extends Component {
  state = {isDarkMode: true}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <>
        <Context.Provider value={{isDarkMode, toggleTheme: this.toggleTheme}}>
          <div className="main-container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <div>
                <Headers />
                <div className="routes-container">
                  <Route exact path="/" component={Home} />
                </div>
              </div>
            </Switch>
          </div>
        </Context.Provider>
      </>
    )
  }
}

export default App

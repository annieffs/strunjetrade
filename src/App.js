import './App.css'; 
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'
import { Route, Switch } from "react-router-dom"

import About from './views/About'
import Schedule from './views/Schedule'
import Prices from './views/Prices'
import Contact from './views/Contact'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">

          <Landing/>
          


        </Route>

        <Route exact path='/o_nama' component={About} />
        <Route exact path='/raspored_odvoza' component={Schedule} />
        <Route exact path='/cjenik_usluga' component={Prices} />
        <Route exact path='/kontakt' component={Contact} />
      </Switch>

      
      
      
      
    </div>
  )
}

export default App;
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Post from './components/Post'
import Footer from './components/Footer'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/project' component={Project} />
            <Route path='/:slug' component={Post} />
          </Switch>
          <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;

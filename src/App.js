import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Post from './components/Post'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/project' component={Project} />
            <Route path='/:slug' component={Post} />
          </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

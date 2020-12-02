import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/navbar/navbar'
import Homescreen from './pages/Homescreen'
import Films from './pages/Films'
import People from './pages/People'
import Background from './components/background/background'

function App() {
  return (
    <div >
    <Router >
       
      <Header/>
      <Route path='/people' component={People} />
     <Route path='/films' component={Films} />
     <Route path='/' component={Homescreen} exact />
    
    </Router>
     <Background/>
     </div>
  );
}

export default App;

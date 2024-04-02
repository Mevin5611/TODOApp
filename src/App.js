
import React from 'react';
import { Component } from 'react';
import TodoApp from './component/TodoApp';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import About from './component/About';
import Header from './component/header/Header';

 class App extends Component{
  render(){
    return(
      
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<TodoApp/>} />
        <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
      
    )
  }
 }


export default App;

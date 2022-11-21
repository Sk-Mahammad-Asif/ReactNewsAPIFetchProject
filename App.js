//import logo from './logo.svg';
//import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  // for topload bar define
  pageSize=6;
  apikey = process.env.REACT_APP_NEWS_API;
  state ={
     progress:0
  }

  setProgress = (progress)=> {
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
      <div>
        
      <Router>
      <Navbar/>
      {/*link for toploadbar  https://www.npmjs.com/package/react-top-loading-bar */ }
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />

        <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="general" pageSize={6} country="us" category="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={6} country="us" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={6} country="us" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={6} country="us" category="general"/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={6} country="us" category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={6} country="us" category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={6} country="us" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={6} country="us" category="technology"/>}></Route>
        </Routes>
      </Router>
      </div>
      </>
    )
  }
}




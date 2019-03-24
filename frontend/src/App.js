import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      posts : [],
    }
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/posts/?format=json')
    .then((success) => {
      this.setState(() => {
        return {
          ...this.state,
          posts : success.data.results
        }
      })
    })
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <li>{post.title}</li>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {posts}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component, } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Main from './components/Main/Main'
import SinglePost from './components/SinglePost/SinglePost'


class App extends Component {
  constructor(){
    super()
    this.state = {
      posts : [],
      singlePost: {},
    }
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/posts/?format=json')
    .then((success) => {
    
      this.setState(() => {
        return {
          posts : success.data.results
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  getSinglePostHandler = (id) => {
    axios.get('http://127.0.0.1:8000/api/posts/' + id + '/?format=json')
    .then((success) => {
      console.log(success)
      this.setState(() => {
        return {
          ...this.state,
          singlePost : success.data
        }
      })
    })
  }

  backToMainHandler = () => {
    this.setState(() => {
      return {
        ...this.state,
        singlePost : {},
      }
    })
  }

  render() {
    const inView = Object.keys(this.state.singlePost).length < 1
    ? <Main posts={this.state.posts} getSinglePostHandler={this.getSinglePostHandler} />
    : <SinglePost details={this.state.singlePost} backToMain={() => this.backToMainHandler} /> 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {inView}
          <Link to='/signin'>signin</Link>
        </header>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return ({

  });
};

const mapDispatchToProps = () => {
  return ({

  });
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

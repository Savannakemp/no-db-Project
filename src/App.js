import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import BodyContainer from './components/Body-Container';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "Home",

    }
    this.switchPage = this.switchPage.bind(this)
  }
  switchPage(page) {
    console.log("im in the app " + page)
    this.setState({currentPage: page});
  }


  render() {
    return (
      <div className="App">
        <Header switchPage={this.switchPage}></Header>
        <BodyContainer currentPage={this.state.currentPage}></BodyContainer>
        <Footer>
        </Footer>
      </div>
    );
  }
}

export default App;

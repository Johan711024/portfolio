import React, { Component } from 'react';
import './App.css';
import Intro from './Intro/Intro';
import Navigation from './Navigation/Navigation';
import About from './Pages/About';


class App extends Component {
  
  state = {
    currentContent: 1
  }

  componentDidMount() {
    
  }

  handleLoading = (event) => {   
    // setTimeout(()=> {
    //   this.setState({loading: true});   // FRÅGA KRISTIAN!
    // }, 50);
    this.setState({loading: true});  
    setTimeout(()=> {
      this.setState({loading: false});
    }, 3000);
  }

  changeCurrentContent = () => {    
    

    this.setState({currentContent: 2})
  }

  render() {

   let content;
    

    switch(this.state.currentContent) {
      case 1:
        content = <Intro finished={this.changeCurrentContent} />
        break;
      case 2:
        content = <Navigation loading={this.handleLoading} />
        break;
      case 3:
        content = <About />
        break;
      case 4:
        content = "4"
        break;
      case 5:
        content = "5"
        break;
      default:
        content = "default"
    }


    return (
      <div className="App">
          {content}
      </div>
    );
  }
}

export default App;

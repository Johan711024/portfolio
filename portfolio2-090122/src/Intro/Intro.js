import React, { Component } from 'react'
import '../App.css';
import ProfilePic from '../Images/profilepic.svg';
import Spinner from '../UI/Spinner/Spinner';
import Typing from 'react-typing-animation';

function startAnimation(callback) {
    requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        callback();
    });
    });
  }

class Intro extends Component {
     state = {
        loading:true,
        animate: false,
        startWidth: 20,
        stopWidth: 100,
        startHeight: 20,
        stopHeight: 100,
        backgroundColor: '',
        typingFinished: this.typingFinished
      }

    componentDidMount() {
        // You'll need to import startAnimation at the top of the file
        startAnimation(() => {
          this.setState({ animate: true });
        });
        setTimeout(()=> {
          this.setState({stopWidth: window.innerWidth+200, stopHeight: window.innerHeight, animate: true});
        }, 4000);
        setTimeout(()=> {
          this.stopAnimation();
        }, 6000);
    }
    stopAnimation = () => {
    
        this.setState({loading: false, backgroundColor: 'blue'});
    
        document.body.classList.add("background-blue");
        
        setTimeout(()=> {
          //this.refs.header.classList.add("moreStyles");
        }, 1000);
        setTimeout(()=> {
          //this.refs.header.classList.add("moreStyles2");
        }, 2000);
        
        
      }

    typingFinished = () => {
        console.log('hello');
        this.refs.header.innerHTML = "";
    }


    render () {
        let content = <div ref="header" className="introTyping"><img src={ProfilePic} alt='pic' /><br /><Typing speed={30} onFinishedTyping={this.props.finished}>      
        <span>Front-End developer Johan Svenssson <Typing.Delay ms={1000} /><br /><br />I have 15+ years of industry experience <Typing.Delay ms={1000} /><br />and heavy skills when it comes to all kinds of <br />projects concerning digitalizing complex workflows <br />at white collar workplaces etc... <Typing.Delay ms={2000} /><Typing.Backspace speed={1} count={175} /><br /><br />This portfolio is only focusing on Frond-End...<Typing.Delay ms={1000} /><br /><br />in other words...<br /><br />the edge...<Typing.Delay ms={2000} /></span>
        </Typing></div>

        if (this.state.loading){
        content =<header className="Scene-loading"><Spinner anim={this.state} /></header>
        }

        return (
            <div>
                {content}
            </div>
        );
    }



    
}

export default Intro;


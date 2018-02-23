import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Plants from './components/Plants.jsx';
import VideoBackground from './components/VideoBackground.jsx';
import Slider from './components/Slider.jsx';
import Greenhouse from './components/Greenhouse.jsx';
import Footer from './components/Footer.jsx';

const config = {
    apiKey: "AIzaSyBluQq6HleAThLqImvZDLuotQHcAkG0PmA",
    authDomain: "plants-1de24.firebaseapp.com",
    databaseURL: "https://plants-1de24.firebaseio.com",
    projectId: "plants-1de24",
    storageBucket: "plants-1de24.appspot.com",
    messagingSenderId: "1076399177651"
};
firebase.initializeApp(config);

const images = [
    {img: './img/slider/1.jpg'},
    {img: './img/slider/2.jpg'},
    {img: './img/slider/3.jpg'},
    {img: './img/slider/4.jpg'},
    {img: './img/slider/5.jpg'},
    {img: './img/slider/6.jpg'}
];

class App extends React.Component {
    render() {
        return <div className='container'>
                <Nav/>
                <Main/>
                <Plants/>
                <VideoBackground/>
                <Slider image={images}/>
                <Greenhouse/>
                <Footer/>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);


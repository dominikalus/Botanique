import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Plants from './components/Plants.jsx';
import VideoBackground from './components/VideoBackground.jsx';
import Greenhouse from './components/Greenhouse.jsx';
import Footer from './components/Footer.jsx';


class App extends React.Component {
    render() {
        return <div className='container'>
                <Nav/>
                <Main/>
                <Plants/>
                <VideoBackground/>
                <Greenhouse/>
                <Footer/>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
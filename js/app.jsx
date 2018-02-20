import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import Plants from './components/Plants.jsx';
import VideoBackground from './components/VideoBackground.jsx';
import Flowers from './components/Flowers.jsx';
import Greenhouse from './components/Greenhouse.jsx';
import Footer from './components/Footer.jsx';


class App extends React.Component {
    render() {
        return <div className='container'>
            <div className='main-div'>
             <Nav/>
                {/*<Plants/>*/}
                {/*<VideoBackground/>*/}
                {/*<Flowers/>*/}
                {/*<Greenhouse/>*/}
                {/*<Footer/>*/}
            </div>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
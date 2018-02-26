import React from "react";
import TextTyper from './TextTyper.jsx';
import LazyLoad from 'react-lazyload';

export default class VideoBackground extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'video/699569608.mp4'
        }
    }

    render() {
        return (<div id='video'>
                <div className='videodiv'>
                    <video id="background-video" loop autoPlay>
                        <source src={this.state.videoURL} type="video/mp4"/>
                    </video>
                </div>
                <div className='videotxt'>
                    <LazyLoad>
                        <TextTyper text='Flowers and plants always look like the people they live  with, somehow..'/>
                    </LazyLoad>
                </div>
            </div>
        )
    }
}
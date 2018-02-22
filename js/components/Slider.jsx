import React from "react";
import Slide from './Slide.jsx';


export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 0
        }
    }

    nextSlide = () => {
        this.setState({ slideCount: this.state.slideCount + 1 });
        //jezeli bedzie ostatni indeks to ustaw na zero
        if (this.state.slideCount >= this.props.image.length - 1){
            this.setState({
                slideCount: 0
        })
        }
    };

    previousSlide = () => {
        this.setState({ slideCount: this.state.slideCount - 1 });
        //jezeli indeks 0 to ustaw ten indeks na ostatni element tablicy
        if (this.state.slideCount <= 0) {
            this.setState({
                slideCount: this.props.image.length -1
            })
        }
    };

    render() {
        return (
            <div id="slider">
                {/* Slides go here */}
                <button className='button' onClick={this.previousSlide}>{'<'}</button>
                <Slide slide={this.props.image[this.state.slideCount]}/>
                <button className='button' onClick={this.nextSlide}>{'>'}</button>
            </div>
        );
    }


}
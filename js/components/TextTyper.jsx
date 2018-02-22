import React from 'react';

export default class TextTyper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text[0]
        }
    }

    componentDidMount(){

        let counter = 0; //musimy wyrzucic poza interwal zeby zmienna zostaal stworzona wewnatrz CDM tylko raz i
        // potem sie zwiekszala
        this.interval = setInterval(()=>{
            //console.log(counter);
            //chcemy zaktualizowac state
            this.setState({
                text: this.state.text + this.props.text[counter+1] //dokleic kolejna literke
            });
            //musi sie zatrzymac jak dojdzie do konca wyrazu
            // if (this.state.text.length === this.props.text.length){

            if (counter === this.props.text.length - 2){
                clearInterval(this.interval);
            }
            counter++;

        }, 100);
    }
    render(){
        return <h1>{this.state.text}</h1>
    }
}



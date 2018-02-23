import React from "react";


class PlantsBox extends React.Component{
    handleClick = () => {
        this.props.onClick(this.props.plants.name, this.props.plants.description)
    }

    render(){
        return <div className='plantimgs'>
            <img onClick={this.handleClick} src={this.props.plants.img} style ={{width:'300px', height:'300px'}}/>
        </div>
    }
}

class PlantInfo extends React.Component{
    render() {
        return <div className='plantinfo'>
            <h2>{this.props.name}</h2>
            <p>{this.props.info}</p>
        </div>
    }
}

export default class Plants extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            plants: [],
            currName: '',
            currDescription: ''
        }

        const myDb = "https://plants-1de24.firebaseio.com/plants.json";

        fetch(myDb,{
            method: 'get'
        })
            .then(response => {
                console.log(response);
                if (response.ok)
                    return response.json();
                else
                    throw new Error('err responce not ok');
            })
            .then(data => {
                this.setState ({
                    plants: data
                })
            })
            .catch(err => console.log("err"))
    }

    handleClick = (name, descripiton) => {
        console.log('dzialam');
        this.setState({
            currName: name,
            currDescription: descripiton
        })
    }

    render() {
        const plantArray = this.state.plants.map((plants, index) => {

            return <PlantsBox onClick={this.handleClick} plants={plants}/>
        });

        return <div id='main-div-plants'>
            <div className='div-plants-left'>
                <PlantInfo name={this.state.currName} info={this.state.currDescription}/>
            </div>
            <div className='div-plants-right'>
                {plantArray}
            </div>
        </div>

    }
}
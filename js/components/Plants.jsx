import React from "react";


class PlantsBox extends React.Component{
    render(){
        return <div>
            <img src={this.props.plants.img}/>
        </div>
    }
}

class PlantInfo extends React.Component{
    render() {
        return <div>
            <h2>{this.props.currName}</h2>
            <p>{this.props.currDescripiton}</p>
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

    handleClick = () => {
        this.setState({
            // currName: this.plants.name,
            // currDescription: this.plants.descripiton
        })
    }

    render() {
        const plantArray = this.state.plants.map((plants, index) => {
            console.log(plants,index);
            return <PlantsBox onClick={this.handleClick} plants={plants}/>
        });

        return <div id='main-div-plants'>
            <div className='div-plants-left'>
                <PlantInfo/>
            </div>
            <div className='div-plants-right'>
                {plantArray}
            </div>
        </div>

    }
}
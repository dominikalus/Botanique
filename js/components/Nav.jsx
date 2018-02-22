import React from "react";

export default class Nav extends React.Component {
constructor(props){
    super(props);
        this.state = {
            active: false
        }
}
    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }


// dodaje klase active tylko w momencie gdzie jest true !
    render() {
        return(
                <nav>
                    <h1>Botanique</h1>
                    <button onClick={this.handleClick} className='hamburger'></button>
                    <ul className={`menu ${this.state.active ? 'active' : ''}`}>
                        <li><a href="#main-div">Main ~</a></li>
                        <li><a href="#main-div-plants">Plants ~</a></li>
                        <li><a href="">Flowers ~</a></li>
                        <li><a href="#green-div">Our Green House ~</a></li>
                        <li><a href="#footer">Contact</a></li>
                     </ul>
                </nav>

        )
    }
}
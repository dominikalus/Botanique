import React from "react";

export default class Nav extends React.Component {
    render() {
        return <div className='nav'>
            <h1>Botanique</h1>
            <ul className='menu'>
                <li>Main ~</li>
                <li>Plants ~</li>
                <li>Flowers ~</li>
                <li>Our Green House ~</li>
                <li>Contact</li>
            </ul>
        </div>
    }
}
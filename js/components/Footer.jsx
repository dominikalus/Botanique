import React from "react";

export default class Footer extends React.Component {
    render() {
        return <div id='footer'>
                <div className='contact-div'>
                    <span className='contact'>Contact</span>
                    <p>Email</p>
                    <p>Text</p>
                    <p>Call</p>
                </div>
                <div className='socialmedia'>
                    <span className='contact'>Social Media</span>
                    <a href='#'><img style={{width:'50px', height:'50px'}} src={'./img/fb.png'}/></a>
                   <a href='#'> <img style={{width:'50px', height:'50px'}} src={'./img/instagram.png'}/></a>
                   <a href='#'> <img style={{width:'50px', height:'50px'}} src={'./img/pinterest.png'}/></a>
                </div>
                <div className='contact-img'>
                    <img style={{width:'400px', height:'300px'}} src={'./img/contact.jpg'}/>
                </div>
            </div>
    }
}
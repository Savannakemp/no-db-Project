import React, { Component } from 'react'

class About extends Component {
    constructor() {
        super();
        this.state = {

        }
    }



    render() {
        return (
            <div class="AboutContainer">
                <div class="CreatorImage">
                    <img src="me.png"></img>
                </div>
                <div class="CreatorDescription">
                    My name is Savanna Kemp,
                     I am a student at DevMountain.
                     I love this school, animals, dancing,
             piano and skiing!</div>
            </div>)


    }
}

export default About;
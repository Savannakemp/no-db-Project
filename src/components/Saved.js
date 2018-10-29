import React, { Component } from 'react'
const axios = require ('axios')

class Saved extends Component {
    constructor() {
        super();
        this.state = {
            allAnimals: []
        }
    }

    render() {
        return (
            <div class="PetContainer">
                <div class="PetImages"><img src={this.props.photo} alt="animal"></img></div>
                <div class="PetInfo">
                    <div class="PetName">{this.props.name}</div>
                    <div class="PetDescription">{this.props.description}</div>
                </div>
                <div class="X" onClick={() => this.props.handleClick(this.props.id)}><img src="https://image.flaticon.com/icons/svg/9/9571.svg"></img></div>

            </div>
        )
    }
}

export default Saved;
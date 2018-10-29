import React, { Component } from 'react'
import Navigation from "./Navigation"


class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(page) {
        // console.log("im inside handle click page " + page)
        this.props.switchPage(page) 
    }

    render() {
        return (
            <div class="header">
                <h1 onClick={() => this.props.switchPage('Home')}>Pet Finder but Better!</h1>
                <Navigation handleClick={this.handleClick}></Navigation>
            </div>
        )
    }
}

export default Header;
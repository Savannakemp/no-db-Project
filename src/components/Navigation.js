import React, { Component } from 'react'


class Navigation extends Component {
    constructor() {
        super();
        this.state= {

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {

    }
    render() {
        return(
        <div class="navigation">
            <div class="nav-header">
                <ul>
                    <li onClick={() =>this.props.handleClick('About')} >About</li>
                    <li onClick={() => this.props.handleClick('Saved')} >Saved</li>
                </ul>
            </div>
        </div>
        )
    }
}
export default Navigation;


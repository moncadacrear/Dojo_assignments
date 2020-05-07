import React, { Component, useState } from 'react';


class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            addonclick:0
        };
    }
    handleClick = () => {
        this.setState({addonclick:this.state.addonclick + 1});
    }

    render(){
        let { firstName, lastName , age , hairColor } = this.props;
        return(
            <div>
                <h1>{ lastName }, { firstName}  </h1>
                <h3>Age:{this.state.addonclick +age } </h3>
                <h3>hair Color:{hairColor}</h3>
                <button className="btn" onClick={ this.handleClick}> Birthday {firstName} {lastName}</button>
            </div>
        )
        
    }
}

export default PersonCard;
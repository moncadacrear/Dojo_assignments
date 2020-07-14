import React, {Component} from "react";




class PersonCard extends Component{
    constructor(props){
        super(props);


        this.state ={
            clickadd:0
        }
    }

    clickhandler = event =>{
        this.setState({clickadd: this.state.clickadd +1 })
    }





    render(){
        const {firstName, lastName , Age, HairColor} = this.props;
        return(
            <div>
                <h1>{lastName} , {firstName}</h1>
                <h3> Age : {this.state.clickadd + Age}</h3>
                <h3> HairColor: {HairColor}</h3>
                <button onClick ={this.clickhandler}>add more years to your age click me !</button>

            </div>
        )
    }
};

export default PersonCard;
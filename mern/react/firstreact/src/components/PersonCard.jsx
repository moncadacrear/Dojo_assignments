import React, {Component} from "react";




class PersonCard extends Component{





    render(){
        const {firstName, lastName , Age, HairColor} = this.props;
        return(
            <div>
                <h1>{lastName} , {firstName}</h1>
                <h3> Age : {Age}</h3>
                <h3> HairColor: {HairColor}</h3>

            </div>
        )
    }
};

export default PersonCard;
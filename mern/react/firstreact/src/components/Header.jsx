import React , {Component} from "react";



class Header extends Component{



    render(){
        const {firstname , lastname} = this.props;
        return (
            <div>
                <h1>this is my name {firstname} {lastname}</h1>

            </div>
        )
    }
} 


export default Header;
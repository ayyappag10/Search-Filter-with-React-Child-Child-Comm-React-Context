import React from "react"
import Theme from "./Theme";

class Search extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            name:""
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this)
    }

    nameChangeHandler(evnt){
        this.setState(
            {
                name: evnt.target.value
            }
        );

        this.props.clback(evnt.target.value);
    }

    render(){
        return(
            <div>
                <Theme.Consumer>
                    {(thm)=>(
                    <input
                         placeholder="search from list.."
                        value={this.state.name}
                        style = {{color:thm}}
                        onChange={this.nameChangeHandler}
                    >
                    </input>)}
                    </Theme.Consumer>                
            </div>
        )
    }
}

export default Search;
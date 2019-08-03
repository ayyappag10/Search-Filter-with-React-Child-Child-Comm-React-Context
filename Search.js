import React from "react"

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
                <input
                placeholder="search from list.."
                value={this.state.name}
                onChange={this.nameChangeHandler}
                >
                </input>
            </div>
        )
    }
}

export default Search;
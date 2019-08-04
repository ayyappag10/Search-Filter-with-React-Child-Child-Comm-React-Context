import React from "react"
import {render} from "react-dom"
import Search from "./Search"
import CountryList from "./CountryList"
import Theme from "./Theme";

class App extends React.Component{

    // communication between child and parent components.
    // talking from one child to another child component via parent component
    constructor(){
        super();
        this.state ={
            cntrName:""
        }
        this.parentCallBack = this.parentCallBack.bind(this)

    }

    parentCallBack(prop){
        this.setState(
            {
                cntrName: prop
            }
        )
    }

    render(){
        return(
            <Theme.Provider value={"blue"}>
            <div id>
            <h1>Country List</h1>
            <Search clback ={this.parentCallBack}></Search>
            <CountryList filter={this.state.cntrName} ></CountryList>
            </div>
            </Theme.Provider>
        )
    }
}


render(<App/>, document.getElementById("root"))
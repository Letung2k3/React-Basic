import React from "react";
class MyComponent extends React.Component{
    state = {
        name:"",
        key:"K01"
    }
    handleEventState = (event)=>{
         this.setState({
            name:event.target.value
         })
    }
    handleClickButton =(e)=>{
        console.log(e);
        alert("Thankfully!")
    }
    render(){
        return(
            <>
                <div>
                    <input onChange={(e)=>this.handleEventState(e)} type="text" value={this.state.name}/>
                    {this.state['name']}
                </div>
                <div>
                    {this.state['key']}
                    <button onClick={(e)=>this.handleClickButton(e)}>Click me</button>
                </div>
            </>
        )  
    }
}
export default MyComponent;
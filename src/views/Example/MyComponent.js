import React from "react";
class MyComponent extends React.Component{
    state = {
        name:"Dotatq",
        key:"K01"
    }
    handleEventState = (event)=>{
         this.setState({
            name:event.target.value
         })
    }
    render(){
        return(
            <>
                <div>
                    <input onClick={(e)=>this.handleEventState(e)} type="text" value={this.state.name}/>
                    {this.state['name']}
                </div>
                <div>
                    {this.state['key']}
                </div>
            </>
        )  
    }
}
export default MyComponent;
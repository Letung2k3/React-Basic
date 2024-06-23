import React from "react";
class MyComponent extends React.Component{
    /*
    jsx:html in block function
    fragment: <> </> react
    state: is a object which help update đata intermidiate, you dont need refresh a website
            (cập nhật trạng thái)
    state = {}
    note : don't use keyword""Function when you call function"
    */
   state = {
        name:"Dotaq",
        origin:"Double"
   }
    handleOnchange(event) {
        return this.setState({
            name:event.target.value
        })
   }
    render(){
    
        return(
          <>
            <div>
               <input value={this.state.name} type="text"
                onChange={(event)=>this.handleOnchange(event)}
               />
                Hello world! Ben {this.state.name}
            </div>
             
             <div>
                {this.state.origin}
            </div>
          </>
        )  
    }
}
export default MyComponent;
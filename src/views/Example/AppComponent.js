import React from "react";
class AppComponent extends React.Component{
    state = {
        courseName:"",
        description:""
    }
    handleCoursename = (Event)=>{
        this.setState({
            courseName:Event.target.value
        })
    }
    handleDescription = (Event)=>{
        this.setState({
            description:Event.target.value
        })
    }
    handleSubmitButton =(Event)=>{
        if(!this.state.courseName &&!this.state.description){
            alert("Missing impact it!")
            return;
        }
        this.props.add({
            id:Math.floor(Math.random() * 1001),
            CourseName:this.state.courseName,
            Description:this.state.description
        })
        Event.preventDefault();
        this.setState({
            courseName:'',
            description:''
        })
    }
    render(){
        let {courseName,description} = this.state
        return(
            <form className="form_input">
                <label>CourName</label>
                <input type="text" 
                       value={courseName}
                       onChange={(Event)=>this.handleCoursename(Event)}
                 />
                 <br/>
                 <label>Description</label>
                <input type="text" 
                       value={description}
                       onChange={(Event)=>this.handleDescription(Event)}
                 />
                 <br/>
                 <button type="submit" onClick={(Event)=>this.handleSubmitButton(Event)}>Submit</button>
            </form>
        )
    }
}
export default AppComponent;
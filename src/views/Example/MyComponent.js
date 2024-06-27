import React from "react";
import ChildComponent from "./ChildComponent";
import AppComponent from "./AppComponent";
class MyComponent extends React.Component{
<<<<<<< HEAD
   //Father
   state ={
      objCourse:[
        {id:'asbd1',CourseName:"Javascript",Description:"Font-End"},
        {id:'asbd2',CourseName:"Spring",Description:"Back-End"},
        {id:'asbd3',CourseName:"Mysql",Description:"Full-Stack"},
      ]
   }
   addObjectCourse =(data)=>{
    this.setState({
      objCourse:[...this.state.objCourse,data]
    })
   }
   delete =(obj)=>{
    let currentCourse = this.state.objCourse
    currentCourse = currentCourse.filter(item=>item.id !== obj.id)
    this.setState({
      objCourse:currentCourse
    })
   }
   componentDidUpdate=(prevProps,prevState)=>{
      console.log('>>run đi update: ',"prev state: ",prevState," current state: ",this.state)
   }
   componentDidMount=()=>{
    console.log('>>> run component đi mount : ')
   }
   render(){
    console.log(">>state bash here: ",this.state)
    let {objCourse} = this.state;
    return(
      <>
        <AppComponent 
          add = {this.addObjectCourse}
        />
        <ChildComponent 
          dataCourse  = {objCourse}
          delete= {this.delete}
        />
      </>
    )
   }
=======
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
>>>>>>> dotatq
}
export default MyComponent;
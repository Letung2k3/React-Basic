import React from "react";
import ChildComponent from "./ChildComponent";
import AppComponent from "./AppComponent";
class MyComponent extends React.Component{
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
}
export default MyComponent;
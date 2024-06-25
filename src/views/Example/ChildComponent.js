import React from "react";
class ChildComponent extends React.Component{
    state = {
        showJobs:false
    }
    handleShowHide = () =>{
        this.setState({
            showJobs:!this.state.showJobs
        })
    }
    handleOnclickDelete=(course)=>{
        this.props.delete(course)
    }
    ///Quan lý trang thai neu true thi hien, flase thi an
    render(){
        let {showJobs} = this.state;
        let {dataCourse} = this.props;
           return(
             <>
                {showJobs ? (<button onClick={()=>this.handleShowHide()}>Show</button>)
                         :
                        (
                        <>
                            <div>
                                {dataCourse.map(item=>(
                                    <div key={item.id}>
                                        {item.CourseName}- {item.Description} <></> <span onClick={(()=>this.handleOnclickDelete(item))}>x</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={()=>this.handleShowHide()}>Hide</button>
                         </>
                        )
                }
             </>
           )
    }
}
export default ChildComponent;
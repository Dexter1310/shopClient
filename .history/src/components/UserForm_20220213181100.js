import React,{Component} from "react";

class UserForm extends Component {
constructor(){
    super();
    this.state={
        title:'',
        responsible:'',
        description:'',
    
    }
    
}

render(){
    return (

        <div className="card">
            <form className="card-body">
                <div className="form-group">
<input 
type='text'

/>

                </div>

            </form>


        </div>
    )

}

}

export {UserForm};
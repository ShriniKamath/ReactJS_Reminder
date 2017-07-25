import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders }  from '../action/index.js';
import moment from 'moment';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            dueDate:''
        }
    }
    addReminder(){
        if (this.state.text===''){
            alert("Text Cant be empty");
        }else if(this.state.dueDate===''){
            alert("Due Date Cant be empty");
        }else{
            this.props.addReminder(this.state.text,this.state.dueDate)
            document.getElementById("text").value="";
            document.getElementById("dueDate").value="";
        }
    }
    deleteReminder(id){
        this.props.deleteReminder(id);
    }
    clearReminders(){
        this.props.clearReminders(); 
    }
    renderReminders(){
        const { reminders } =this.props;
        return(
            <ul className="list-group col-sm-4">
            {
                reminders.map( reminder =>{
                    return(
                    <li key={reminder.id} className="list-group-item list_item">
                        <div className="list-item ">
                            <span>{reminder.text}</span>
                            <span><em>  {moment(new Date(reminder.dueDate)).fromNow()}</em></span>
                            </div>
                        <div className="list-item delete-button" onClick={()=>this.deleteReminder(reminder.id)}>&#x2715;</div>
                    </li>    
                    )
                })
            }        
            </ul>
        )

    }
    render() {
        return (
            <div className="App">
                <div className="title"> Reminder Pro</div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                    <input className="form-control" id="text" onChange={event => this.setState({ text : event.target.value})} placeholder="I have to...."/>
                    
                    <input className="form-control" id="dueDate" type="datetime-local" onChange={event => this.setState({ dueDate : event.target.value})} placeholder="Enter Date and time..."/>
                    </div>
                    
                    <button type="button" onClick={() =>this.addReminder()} className="btn btn-success">Add Reminder</button>
                </div>
                {this.renderReminders()}
                <button type="button" onClick={() => this.props.clearReminders()} className="btn btn-danger">Clear Reminders</button>
            </div>
        )
    }
}
function mapStateToProps(state){
return{
    reminders:state
}
}
export default connect(mapStateToProps,{addReminder,deleteReminder,clearReminders})(App);
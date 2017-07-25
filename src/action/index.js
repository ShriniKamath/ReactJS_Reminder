import { ADD_REMINDER ,DELETE_REMINDER, CLEAR_REMINDER} from '../constants.js';

export const addReminder= (text, dueDate) => {
 const action={
     type : ADD_REMINDER,
     text,
     dueDate
 }
 console.log("action in addremainder", action);
 return action;
}
export const deleteReminder = (id) =>{
    const action={
        type:DELETE_REMINDER,
        id
    }
    console.log('delete in actions',action);
    return action;
}
export const clearReminders = () =>{    
    return {
        type:CLEAR_REMINDER
    };
}
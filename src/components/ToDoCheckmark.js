import React from 'react'
import {connect} from 'react-redux'
import {deleteToDo} from '../actions'
import {Field, reduxForm} from 'redux-form'

class ToDoCheckmark extends React.Component{
    onCheck = ({itemId, input}) => {
        if(input.value){
            this.props.deleteToDo(itemId);
        }
    }
    renderCheckMark = (formProps) => {
        this.onCheck(formProps);
        return (
            <input {...formProps.input} type ="checkbox" value="false"></input> 
        )
    }
    render(){
        return (
            
            <Field 
                name = {this.props.name} 
                component = {this.renderCheckMark} 
                item = {this.props.item} 
                itemId = {this.props.itemId}/>
        )
    }
}

ToDoCheckmark = connect(null, {deleteToDo})(ToDoCheckmark);

export default reduxForm({
    form: 'items', 
    enableReinitialize : true,
})(ToDoCheckmark)
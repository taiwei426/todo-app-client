import React from 'react'
import {connect} from 'react-redux'

import {deleteToDo, getToDo} from '../actions'
import ToDoCheckmark from './ToDoCheckmark'

class ToDoItem extends React.Component{
    onEditClick = (formProps) => {
        this.props.getToDo(formProps);      
    }
    render(){
        const {id, input} = this.props.itemProps
        return(
            <form id = {id}>
                <div onClick={(e) => e.stopPropagation()} style={{display: `inline-block`}}>

                    <ToDoCheckmark name = {input}  item = {input} 
                    itemId = {id}/>

                    <span  onClick = {() => this.onEditClick(this.props.itemProps)} >{input}</span> 
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeToDo : state.activeToDo
    }
}

export default connect(mapStateToProps, {deleteToDo, getToDo})(ToDoItem);



// is it bad that there's state being saved here when we have redux already?
// i think before, state was on the full form, not each of the items, so inputFieldShown was for all of the items, instead of having one per item
// deleting numbers was a problem - prob bc they all shared the same form. now each checkmark is its own form
// why does the click to show edit input work when console.logging doesn't log true/false like how it'd expect?
// when state changes, not all of the related functions are rerendered
// deleting >1 of the same thing will delete all of them, even though they have different ids
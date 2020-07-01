import React from 'react'
import {connect} from 'react-redux'

import ToDoList from './ToDoList'
import ToDoCreate from './ToDoCreate'

import {deselectActiveToDo} from '../actions'

class App extends React.Component{
    render(){
        return(
            <div onClick ={() => this.props.deselectActiveToDo()} style={{minHeight: '100vh'}} className="wrapper">
                <h1>To Do</h1>
                <div className ="items-container">
                    <ToDoList />
                    <ToDoCreate />
                </div>
                <div class="links">
                    <a class="github" href="https://vivianzhang.com" target="_blank">Portfolio</a>
                    <a class="github" href="https://github.com/taiwei426/todo-app-client" target="_blank">GitHub</a>
                </div>
            </div>
        )
    }
}



export default connect(null, {deselectActiveToDo})(App);
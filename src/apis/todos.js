import axios from 'axios'

export default axios.create({
    // baseURL : 'http://localhost:3001'
    baseURL: 'https://vivianzhang-todo-app-api.herokuapp.com/todos'
})
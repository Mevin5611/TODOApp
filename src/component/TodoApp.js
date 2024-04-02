import React, { Component } from 'react'
import "./TodoApp.css";

export default class TodoApp extends Component {
    state = {
        input: "",
        items: [],
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { input } = this.state

        this.setState({
            items: [...this.state.items, input],
            input:""
        })

    }
    deleteItem=key=>{
        this.setState({
            items:this.state.items.filter((data,index)=>index !== key)
        })
    }
   
    editItem=key=>{
        const valueinput=prompt(Text);
        const {items}=this.state
        items[key]=valueinput
        this.setState({
            items
        })
       
    }

    render() {
        const { input, items } = this.state
        console.log(items);
        return (
            <div className="containerdiv">
                <form className="main" onSubmit={this.handleSubmit}>
                    <div className="inputdiv">
                        <h1>Todo App</h1>
                        <input type="text" value={input} onChange={this.handleChange} placeholder='Enter items...' />
                    </div>
                    <div className="itemdiv">
                        <ul>
                            {items.map((data, index) => (
                                <li key={index}>
                                {data}
                                <i onClick={()=>this.editItem(index)}class="edit material-symbols-outlined">edit</i>
                                <i onClick={()=>this.deleteItem(index)} class="delete material-symbols-outlined">delete</i>
                            </li>
                            ))}

                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

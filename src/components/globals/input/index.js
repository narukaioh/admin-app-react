import React, { Component } from 'react'
import './input.scss'

class InputText extends Component {
    render(){
        return (
            <label for={this.props.id}>
                {this.props.label} <input type={this.props.type} id={this.props.id}  placeholder={this.props.placeholder} />
            </label>
        )
    }
}

export default InputText
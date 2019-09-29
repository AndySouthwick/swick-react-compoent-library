import React, {Component}  from 'react'
import './index.scss';

export default class Button extends Component {
  render(){
    return(
      <button onClick={this.props.emitEvent} className={this.props.buttonClass} >
        {this.props.children}
      </button>
    )
  }
}
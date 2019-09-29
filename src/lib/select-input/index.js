import React, {Component, ReactDOM} from "react";
import "./index.scss";



class SelectInput extends Component {

constructor(){
  super()
  this.state = {
    toggleOptions: false,
    dropDownOpen: false
  }
}

  componentWillMount() {
    document.addEventListener('mousedown', this.clickOutside, false)
  }


  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOutside, false)
  }

  setRef = (node) => {
  this.myRef = node;
  }

  renderOptions = () => {
    if(this.state.toggleOptions) {
      return (
        <div className="select-option-box" onClick={this.clickOutside}>
          <ul>
            {this.props.options.map((option, i) => {
              return <li key={i}>
                {option}
              </li>
            })}
          </ul>
        </div>
      )
    }
  }
  toggleOptions = (e) =>  {
    if(this.state.toggleOptions){
      return this.setState({
        toggleOptions: false
      })
    }
    if (this.myRef.contains(e.target)) {
      console.log('set togle option to true')
      return this.setState({toggleOptions: true})
    }
  }
  clickOutside = (e) => {
    if (e && this.myRef && !this.myRef.contains(e.target) && this.state.toggleOptions) {
      console.log('set togle option to false')
      return this.setState({toggleOptions: false})
    }
  }





  render(){
  return(
    <div className="select" ref={this.setRef}>
      <label>{this.props.label}</label>
      <div className="select-top" onClick={this.toggleOptions}>
        <span>
        <img src={require('../assets/icons/arrow-down.svg')}/>
       </span>
      </div>
      {this.renderOptions()}
    </div>
  )
}

}

export default SelectInput;
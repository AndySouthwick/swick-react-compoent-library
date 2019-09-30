import React, {Component}  from 'react'
import './index.scss'
import Button from '../button'
export default class CoverHero extends Component {
  state = {
  img: this.props.heroArray[0].img,
  title: this.props.heroArray[0].title,
  subTitle: this.props.heroArray[0].subTitle,
  buttonClass: this.props.heroArray[0].buttonClass,
  buttonText:  this.props.heroArray[0].buttonText,
  heroArray: [],
  slideInterval: 1,
  pauseStart: 'Pause'
  }

  componentDidMount(){
  }
  componentWillUnmount(){
  }


  intervalInfo = () => {
    if(this.state.slideInterval > this.props.heroArray.length - 1){
      this.setState({
        slideInterval: 0
      })
    }
    this.setState({
      img: this.props.heroArray[ this.state.slideInterval].img,
      title: this.props.heroArray[ this.state.slideInterval].title,
      subTitle:  this.props.heroArray[ this.state.slideInterval].subTitle,
      buttonClass: this.props.heroArray[ this.state.slideInterval].buttonClass,
      buttonText: this.props.heroArray[ this.state.slideInterval].buttonText,
      slideInterval: this.state.slideInterval + 1
    })
  }

  timeIntervalForSlide =  setInterval(this.intervalInfo, 5000)


  pauseStartSlide = () => {
    if(this.state.pauseStart === 'Start'){
      this.timeIntervalForSlide =  setInterval(this.intervalInfo, 5000)
      console.log('start')
      this.setState({
        pauseStart: 'Pause'
      })
    }
    if(this.state.pauseStart === 'Pause'){
      console.log('pause')
      clearInterval(this.timeIntervalForSlide)

      this.setState({
        pauseStart: 'Start'
      })
    }
  }




  renderSlideSelectors = () => {
    return (
      <div className="slider-selector justify-start">
      <ul>
        {this.props.heroArray.map((e, i) => {
          if(this.state.slideInterval === i + 1){
            return  <li key={i}><div className="active"></div></li>
          }else{
            return <li key={i}> <div></div> </li>
          }

        })}
        <li><button onClick={this.pauseStartSlide}>{this.state.pauseStart}</button></li>

      </ul>
    </div>
    )
  }
  render(){

    console.log('slide interval', this.state.slideInterval)
    console.log('array length', this.props.heroArray.length - 1)
    return(
      <div className="cover-hero" style={{backgroundImage: 'url(' + this.state.img + ')',
                                          backgroundRepeat: 'no-repeat'}}>
        <div className="content-box">
          <h2>{this.state.title}</h2>
          <h4>{this.state.subTitle}</h4>
          <Button buttonClass={this.state.buttonClass}>{this.state.buttonText}</Button>
        </div>

        {this.renderSlideSelectors()}
      </div>
    )
  }
}
import React, {Component}  from 'react'
import './index.scss'
import Button from '../button'
export default class CoverHero extends Component {
  state = {
  heroArray: [],
  slideInterval: 0,
  pauseStart: 'Pause'
  }

  componentDidMount(){
    this.intervalInfo(this.state.slideInterval)
  }
  componentWillUnmount(){
  }

  intervalInfo = (i) => {
    this.setState({
      img: this.props.heroArray[i].img,
      title: this.props.heroArray[i].title,
      subTitle:  this.props.heroArray[i].subTitle,
      buttonClass: this.props.heroArray[i].buttonClass,
      buttonText: this.props.heroArray[i].buttonText,
    })
  }

  timeIntervalForSlide =  setInterval(() => {
    this.setState({
      slideInterval: this.state.slideInterval + 1
    })
    this.intervalInfo(this.state.slideInterval)
  }, 5000)


  pauseStartSlide = () => {
    if(this.state.pauseStart === 'Start'){
      this.timeIntervalForSlide = setInterval(() => {
        this.setState({
          slideInterval: this.state.slideInterval + 1
        })
        this.intervalInfo(this.state.slideInterval)
      }, 5000)
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

  setIndexOnClick = (i) => {
    this.intervalInfo(i)
    this.setState({
      slideInterval: i
    })
  }



  renderSlideSelectors = () => {
    return (
      <div className="slider-selector justify-start">
      <ul>
        {this.props.heroArray.map((e, i) => {
          if(i === this.state.slideInterval){
            console.log('conditional',  i)
            return  <li key={i}><div className="active" onClick={() => this.setIndexOnClick(i)}></div></li>
          }else{
            return <li key={i}> <div onClick={() => this.setIndexOnClick(i)}></div> </li>
          }

        })}
        <li><button onClick={this.pauseStartSlide}>{this.state.pauseStart}</button></li>

      </ul>
    </div>
    )
  }
  render(){

    if(this.state.slideInterval >= this.props.heroArray.length){
      this.setState({
        slideInterval: 0
      })
    }

    console.log('slide interval', this.state.slideInterval)
    // console.log('array length', this.props.heroArray.length)
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
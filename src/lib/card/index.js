import React from 'react'
import './index.scss'
import Button from '../button'

const Card = ({img, buttonClass, buttonText, title, text, alt, linkUrl}) => (
  <div className="card">
    <div className="img-mask">
      <img src={img} alt={alt}/>
    </div>
    <div className="content">
      <h3>{title}</h3>
    <p>{text}</p>
  </div>
  <a href={linkUrl}>
    <Button buttonClass={buttonClass}>{buttonText}</Button>
  </a>
</div>

)
export default Card
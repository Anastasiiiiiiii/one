import React from 'react'
import style from './Text.module.css'

const Text = (props) => {
  return (
    <div className={style.inf}>
      <span>{props.text}</span>
    </div>
  )
}

export default Text

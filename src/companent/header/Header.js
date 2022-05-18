

import React, { Component } from 'react'
import './header.css'
import Modalbtn from './modal/Modalbtn'
export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='header'>
        <div className='container'>
         <div className='header__info'>
            <h1 className='header__title'>ReactMeals</h1>
            <Modalbtn count={this.props.count} 
              count2={this.props.count2}
              modalclk={this.props.modalclk}

            
            /> 
         </div>
        </div>
      </div>
    )
  }
}











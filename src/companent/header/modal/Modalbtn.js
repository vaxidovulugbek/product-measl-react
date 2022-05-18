
import './modal.css'
import React, { Component } from 'react'
import Modal from '../../modal/Modal'

export default class Modalbtn extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button className='modal-cart' onClick={this.props.modalclk}>
        <i class='bx bxs-cart'></i>
        <p className='modal-cart__text'>Your Cart</p>
        <span className='modal-cart__sum'>{this.props.count2}</span>
      </button>
     
              
      </div>
    )
  }
}












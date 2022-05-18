

import React, { Component } from 'react'
import './card.css'
let obj = [
  {
    id:1,
    name:"Sushi",
    product:"Finest fish and veggies",
    price:22.99
  },
  {
    id:2,
    name:"Schnitzel",
    product:"A german specialty!",
    price: 16.50
  },
  {
    id:3,
    name:"Barbecue Burger",
    product:"American, raw, meaty",
    price: 12.99
  },
  {
    id:4,
    name:"Green Bowl",
    product:"Healthy...and green...",
    price: 18.99
  },
]
export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className='card-section'>
        <div className='card'>
        <ul className='card__list'>
        {
          obj.map(item => {
            return (
              <li className='card__item'>
                <div>
                  <h3 className='card__title'>{item.name}</h3>
                  <p className='card__product'>{item.product}</p>
                  <p className='card__price'>${item.price}</p>
                </div>
                <form id={item.id} className='card__info' onSubmit={this.props.countHendler}>
                  <div className='card__infos'>
                    <label className='card__amound'>Amount</label>
                    <input className='amound-input' type="number" min={"0"} max={"5"} defaultValue={"0"} />
                  </div>
                  <button  className='card__btn'>+ Add</button>
                </form>
              </li>
            )
          })
        }
      </ul>
        </div>
      </section>
     
    )
  }
}











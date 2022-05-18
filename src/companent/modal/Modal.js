

// import React, { Component } from 'react'
import './modal.css'


// let modalobj = [
//   {
//     name:"Sushi",
//     product:"Finest fish and veggies",
//     price:22.99
//   },
//   {
//     name:"Schnitzel",
//     product:"A german specialty!",
//     price: 16.50
//   },
// ]


 
// export default class Modal extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className='modal' style={{
//         transform: this.props.modalclk ? 'translateY(0)' : 'translateY(-100vh)',
//         opacity: this.props.modalclk ? '1' : '0'
//       }}>
//         <div className='modal__backdrop'></div>
//         <div className='modal__content'>
//           <div>
//             <ul className='modal__list'>
//               {this.props.arr.map((item,i) => (
//                 <li>
//                   <div>
//                     <p>{item.name}</p>
//                     <p>{item.count}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }



import React from 'react'
// transform: props.modal ? 'translateY(0)' : 'translateY(-100vh)',
//       opacity: props.modal ? '1' : '0'

let summa = 0
export default function Modal(props) {
  return (
   <div>
      <div className='modal' style={{
          display: props.modal ? 'none' : 'block',
      }}>
      
      <div className='modal__backdrop'></div>
      <div className='modal__content'>
        <div>
          <ul className='modal__list'>
            {props.arr.map((item,i) => (

              <li className='modal__items'>
                <div className='modal__context'>
                  <h2 className='modal__title'>{item.name}</h2>
                  <div className='modal__subcontext'>
                     <p className='modal__price'>${item.price}</p>
                     <p className='modal__count'>x{item.count}</p>
                  </div>
                </div>
                <div className='modal__btns'>
                  <button className='modal__btnenc'>-</button>
                  <button className='modal__btndec'>+</button>
                </div>
                {/* {console.log()} */}
                {summa += item.price}
              </li>
              
            ))}
          </ul>
          <div className='modal__totalcontent'>
            <span className='modal__total'>Total Amount</span>
            <span className='modal__total-price'>${summa.toFixed(2)}</span>
          </div>
          <div className='modal__btn-group'>
            <button className='modal__closebtn'>Close</button>
            <button className='modal__orderbtn'>Order</button>
          </div>
        </div>
      </div>
    </div>

    
   </div>
  )
}









// {
//   modalobj.map(item => {
//     return (
//             <li className='modal__item'>
//             <div>
//               <h3>{item.name}</h3>
//               <p >{item.product}</p>
//               <p>${item.price}</p>
//             </div>
//             <form onSubmit={this.props.submitHandler}>
//               <div>
//                 <label>Amount</label>
//                 <input  type="number" min={"1"} max={"5"} />
//               </div>
//               <button>+ Add</button>
//               <input type="text" placeholder='nameeee' onChange={this.props.objectHendler}/>
//             </form>
//             {/* <button onClick={this.props.submitHandler}>click element</button> */}
//               {/* {console.log(this.props.arr)} */}
//             {this.props.arr.map((item,i) => (
//               <div><p>{item.name}</p></div>
//             ))}
//           </li>
//       )
//   })
// }
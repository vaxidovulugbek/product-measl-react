import './App.css';
import Header from './companent/header/Header';
import React, { Component } from 'react'
import Info from './companent/info/Info';
import Summary from './companent/summary/Summary';
import Card from './companent/cards/Card';
import Modal from './companent/modal/Modal';
import Test from './companent/texs/Test';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count:11,
      modal:true,
      arr: [
       
      ],
      newarr:[],

       modalobj: [
        {
          id:1,
          name:"Sushi",
          product:"Finest fish and veggies",
          price:22.99,
          count:0,
        },
        {
          id:2,
          name:"Schnitzel",
          product:"A german specialty!",
          price: 16.50,
          count:0,
        },
        {
          id:3,
          name:"Barbecue Burger",
          product:"American, raw, meaty",
          price: 12.99,
          count:0,
        },
        {
          id:4,
          name:"Green Bowl",
          product:"Healthy...and green...",
          price: 18.99,
          count:0,
        },
        {
          id:5,
          count:0,
        },
      ]
    }    
    // this.state = {
    //   count:11,
    //   arr: [
       
    //   ],

    //   obj: {
    //     name: undefined,
    //     product: undefined,
    //     price: undefined,
    //   },
    //   newarr:[]
    // }   
  }
  
   modalclk = (e) => {
     e.preventDefault()
      this.setState({modal: this.state.modal = !this.state.modal})
      console.log(this.state.modal);
    }

    countHendler = (e) => {
    e.preventDefault()
    // this.setState({count: this.state.count + 1})
    // console.log(e.target.parentElement.firstElementChild.firstElementChild.textContent);
    // let obj1 = {
    //   name: e.target.parentElement.firstElementChild.firstElementChild.textContent
    // }
    // this.setState({ obj: { ...this.state.obj, ...obj1 } })
    // this.setState({arr:[...this.state.arr,{ ...this.state.obj}]})
    // this.setState({newarr:[...this.state.newarr,{ ...this.state.obj}]})
    // console.log(e.target[0].value);
    

    let value = e.target[0].value
    let newarr = []
    let arr2 = []
    let idd = e.target.id
    this.state.modalobj.map(item => {
      newarr.push(item)
    })
     
    newarr.map(item => {
      if (item.id === +idd) {
        item.count = value
        arr2.push(item)
      }
    })

    // console.log(newarr[4].count);
    
    this.setState({arr: [...this.state.arr, ...arr2]})
    this.setState({modalobj: [...newarr]})
    console.log(this.state.modalobj[4].count);
    this.state.modalobj[4].count += 0
    this.state.modalobj[4].count += 1
  }
    
  // summanikorsat = (e) => {
  //   this.setState({arr:[...this.state.arr,{ ...this.state.obj}]})
  //   this.setState({newarr:[...this.state.newarr,{ ...this.state.obj}]})
  // }

//   onSaveMybus = (e) => {
//     countHendler()
//     summanikorsat()
//  }

  // objectHendler = (e) => {
  //   e.preventDefault()
  //   // console.log(e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent);
  //   // this.setState({modalobj: })
  //   // let obj1 = {
  //   //   name: e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent
  //   // }
  //   console.log(e.target.value);
  //   let obj1 = {
  //     name: e.target.value
  //   }
  //   this.setState({ modalobj: [ ...this.state.modalobj, {...obj1} ] })
  // }


  nameChangeHandler = (e) => {
    // let obj1 = {
    //   name: e.target.value
    // }
    // this.setState({ obj: { ...this.state.obj, ...obj1 } })
    // }
    // submitHandler = (e) => {
    //   e.preventDefault()
    //   this.setState({arr:[...this.state.arr,{ ...this.state.obj}]})
    //   this.setState({newarr:[...this.state.newarr,{ ...this.state.obj}]})
    //   e.target.reset()
    console.log("okk");
  }

  // summanikorsat = (e) => {
  //   e.preventDefault()
  //   console.log("ok");
  // }

  // submitHandler = (e) => {
  //   e.preventDefault()
  //   this.setState({arr:[...this.state.arr,{ ...this.state.obj}]})
  //   this.setState({newarr:[...this.state.newarr,{ ...this.state.obj}]})
  //   // e.target.reset()
  // }
  

  render() {
    let count2 = 0

    this.state.modalobj.map(item => {
      count2 += +item.count
    })



    return (
      <div>
        <Header count={this.state.count}
            count2={count2}
            modalclk={this.modalclk}

        />
        <Info/>
        <Summary/>
        <Card countHendler={this.countHendler}
          summanikorsat={this.summanikorsat}
        />
        <Modal 
        objectHendler={this.nameChangeHandler}
        submitHandler={this.submitHandler}
        arr = {this.state.arr}
        modal = {this.state.modal}
        countHendler={this.countHendler}
        />
        <Test/>
      </div>
    )
  }
}


















// function App() {
//   return (
//     <div>
//       <Header/>
//     </div>
//   );
// }

// export default App;











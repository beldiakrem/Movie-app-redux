import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from './component/Card'
import Add from './component/Add'
import Search from './component/Search'
import Rating from './component/Rating'
import {connect}  from 'react-redux'
import {rating} from './actions/index'
import {Route} from 'react-router-dom'
import Description from './component/Description'
 
 class App extends Component {

 
  render() {
    return (
      
        <div >
          <Route exact path="/desc/:id" component={Description} />
<Route exact path="/" render ={() =>( <div>
  <div className="rat-sear">
          <div>
          <Search  />
          </div>
          <div className="rating">
          <Rating number={this.props.rate} handleChangeRating={this.props.onchange}/>
          </div>
          </div>
          <Card />
          {/* <Route exact path="/card" component={Card} /> */}
          <Add />
          </div>)}/>
          
          
         
         
      </div>
    )
  }
}
const mstp=(state)=>({
rate:state.rating
})
const mdtp=(dispatch)=>({
  onchange:payload=>dispatch(rating(payload))
})
export default connect(mstp,mdtp)(App)

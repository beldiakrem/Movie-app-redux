import React, { Component } from 'react'
import {connect} from 'react-redux'
import Rating from '../component/Rating'
import {edit,rating,remove} from '../actions/index'
import {Link} from 'react-router-dom'
import Edit from '../component/Edit'
import { EDIT } from '../const/actionType'

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            edittext: ""
        }
      }
      handleedit=e=>{
        this.setState({
          edit:e.target.value
        })
         }
         
         render() {
            console.log(this.props.rating)
            return (
            <div className="container">
                {this.props.cards.filter(el=>el.Rating>= this.props.stars && el.Title.toLowerCase().includes(this.props.search.toLowerCase())).map(el=>
            <div className="movie-card">
                <img className="movie-header" src={el.Image}></img>

                <div className="movie-content">
                    <div className="movie-content-header">
                        <h3 className="movie-title">{el.Title}</h3>
                    </div>
                    <div className="movie-info">
                        <div>
                        <div className="info-section">
                            <label>Released</label>
                            <span>{el.Released}</span>
                        </div>
                        <div className="info-section">
                            <label>Runtime</label>
                            <span>{el.Runtime}</span>
                        </div>
                         <div className="info-section">
                            <label>Rating</label>
                            <Rating number={el.Rating}/>
                        </div>
                        </div>
                        <div>
                            <Link to="/hello!">
                        <button> Movie Description </button>
                        </Link>
                        </div>
                        <div>
                        <Edit />
                        <button onClick={() => this.props.remove(el.id)}> Remove </button>
                        </div>
                      
                    </div>
                </div>
            </div>
                  )}
        </div>

        )
    }
}
    const s = state => {
        return{ ...state,stars:state.rating}
      }
      const d = dispatch => {
        return {
        edit:payload => dispatch(edit(payload)),
        remove: payload => dispatch(remove(payload)),
        rating:payload => dispatch(rating(payload))
        }
     }
      
export default connect (s,d) (Card);
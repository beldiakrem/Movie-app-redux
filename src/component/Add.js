import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addCard} from '../actions/index'
class Add extends Component {

    constructor() {
        super();
        this.state = {
            Image: "",
            Title: "",
            Released: "",
            Runtime: "",
            Rating:""
        }
    }

    handleAdd = e => {
        e.preventDefault();
        this.props.addCard({
        Image: this.state.Image,
            Title: this.state.Title,
            Released: this.state.Released,
            Runtime: this.state.Runtime,
            Rating: this.state.Rating
        });
        
    };


    render() {
        return (
            <div>
                <div class="container">

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Add your Movie  
                    </button>
                    <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <h4> Add your Movie </h4>
                                <div>
                                    <div class="modal-body">
                                         <input placeholder="Enter new img"
                                            value={this.state.Image}
                                            onChange={event => {
                                                this.setState({
                                                    Image: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                       <input placeholder="Enter new title"
                                            value={this.state.Title}
                                            onChange={event => {
                                                this.setState({
                                                    Title: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Enter new Date"
                                            value={this.state.Released}
                                            onChange={event => {
                                                this.setState({
                                                    Released: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Enter new Runtime"
                                            value={this.state.Runtime}
                                            onChange={event => {
                                                this.setState({
                                                    Runtime: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Enter new Rating"
                                            value={this.state.Rating}
                                            onChange={event => {
                                                this.setState({
                                                    Rating: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                </div>
                                <div class="modal-footer">
                                <div className="button">
                                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={e => this.handleAdd(e)}>Add your movie</button>
                                        </div>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
const d = dispatch => ({
    addCard : (payload) => dispatch (addCard(payload))
 })
export default connect(null,d) (Add)
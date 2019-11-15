import React from "react";
import { connect } from "react-redux";
import { remove } from "../actions/index";
import { Link } from "react-router-dom";
import Edit from './Edit'



const Description = props => {
  const { id } = props.match.params;
  const { card } = props;
  
  return (
    <div class="jumbotron p-4 p-md-5">
      <i className="row">
        <Link to="/">
          <i class="fas fa-arrow-left"></i>
        </Link>
      </i>
      {!card.filter(e => e.id == id).length ? (
        <div class="col-md-6 px-0 ">
          <h1 class="display-4 text-danger font-italic">Sorry</h1>
          <p class="lead my-3">we can't find this movie...</p>
        </div>
      ) : (
        card
          .filter(e => e.id === props.match.params.id)
          .map(e => (
            <div className="row">
              <div class="col-md-6 px-0 ">
                <h1 class="display-4 font-italic">{e.title}</h1>
                <p class="lead my-3">{e.desc}</p>
                <p class="lead mb-0">
                  <a href={e.imdb} class=" font-weight-bold">
                    view on IMDB
                  </a>
                </p>
                <div>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.remove(e.id)}
                  >
                    Remove
                  </button>
                  <Edit cards={e}/>
                </div>
              </div>
              <div class="col-md-6 px-0 ">
                <img className="img-fluid" src={e.img} alt={e.title} />
              </div>
            </div>
          ))
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  card: state.card,
});
const mapDispatchToProps = dispatch => ({
  remove: cards => dispatch(remove(cards)),
  // update: (movie, id) => dispatch(updateMovie(movie, id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
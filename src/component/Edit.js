import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { edit } from "../actions";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Image: "",
      Title: "",
      Released: "",
      Runtime: "",
      Rating:""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleUpdate = () => {
    this.props.update(this.props.cards.id, {
        Image: this.state.Image,
        Title: this.state.Title,
        Released: this.state.Released,
        Runtime: this.state.Runtime,
        Rating: this.state.Rating
    });
    this.toggle();
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-warning"
          onClick={() => {
            this.setState({
                Image: this.state.cards.Image,
                Title: this.state.cards.Title,
                Released: this.state.cards.Released,
                Runtime: this.state.cards.Runtime,
                Rating: this.state.cards.Rating
            });
            this.toggle();
          }}
        >
          Update
        </button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Update Movie</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  value={this.state.Image}
                  name="title"
                  id="image"
                  placeholder="movie image"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  value={this.state.Title}
                  name="img"
                  id="title"
                  placeholder="movie title"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="released">Released</Label>
                <Input
                  type="textarea"
                  value={this.state.Released}
                  name="desc"
                  id="released"
                  placeholder="Relesed"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="runtime">Runtime</Label>
                <Input
                  type="textarea"
                  value={this.state.Runtime}
                  name="desc"
                  id="runtime"
                  placeholder="Runtime"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rating">Rating</Label>
                <Input
                  type="textarea"
                  value={this.state.Rating}
                  name="desc"
                  id="rating"
                  placeholder="Rating"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleUpdate}>
              SAVE
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const d = dispatch => ({
  update: (id, cards) => dispatch(edit(id, cards)),
});

export default connect( null,d)(Edit);

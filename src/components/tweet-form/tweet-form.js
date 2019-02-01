import React from "react";
import Modal from "@material-ui/core/Modal";

import styles from "./tweet-form.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { addTweet } from "../../actions";

class TweetForm extends React.Component {
  handleSave = () => {
    const { title, description, imageUrl } = this.state;
    console.log(title, description, imageUrl);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  saveTweet = (title, description, imageUrl) => {
    const tweet = {
      title,
      description,
      imageUrl
    };
    addTweet(tweet).then(() => this.setState(this.props.onClose));
  };

  handleSave = () => {
    const { title, description, imageUrl } = this.state;
    if (!title || !description || !imageUrl) {
      return;
    }
    this.saveTweet(title, description, imageUrl);
  };

  state = {
    title: "",
    description: "",
    imageUrl: ""
  };

  render() {
    const { isOpen, onClose } = this.props;

    return (
      <Modal open={isOpen} onClose={onClose}>
        <div className={styles.modal}>
          <div>
            <TextField
              onChange={this.handleChange("title")}
              value={this.state.title}
              label="Title"
              variant="outlined"
              required
            />
            <TextField
              onChange={this.handleChange("description")}
              value={this.state.description}
              label="Description"
              multiline
              variant="outlined"
              className={styles.input}
              value={this.state.title}
              required
            />
            <TextField
              onChange={this.handleChange("imageUrl")}
              value={this.state.imageUrl}
              label="Image url"
              variant="outlined"
              required
            />
          </div>

          <div className={styles.actions}>
            <Button
              className={styles.button}
              variant="outlined"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className={styles.button}
              variant="outlined"
              color="primary"
              onClick={this.handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TweetForm;

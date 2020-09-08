import React from "react";
import UIModal from "./Modal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    const { open } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>React Portal Example</h2>
        <button id="open-button" onClick={this.toggleModal}>
          Toggle Modal
        </button>
        <UIModal show={open} onHide={this.toggleModal}>
          A portal example
        </UIModal>
      </div>
    );
  }
}

export default App;

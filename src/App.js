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
        <h6>Portals provide a quick and seamless way to “render children into a DOM node that exists outside the DOM hierarchy of the parent component,” (React documentation).</h6>
        <button id="open-button" onClick={this.toggleModal}>
          Toggle
        </button>
        <UIModal show={open} onHide={this.toggleModal}>
          A portal example
        </UIModal>
      </div>
    );
  }
}

export default App;

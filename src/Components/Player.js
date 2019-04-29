import React, { Component } from "react";

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

class Player extends Component {
  myInp = {};
  state = { editable: false };

  handleEdit = () => {
    const { editable } = this.state;
    !editable ? this.myInp.focus() : this.myInp.blur();
    this.setState({ editable: !editable });
    
  };

  render() {
    const { idx, handleRemove } = this.props;
    const { editable } = this.state;
    return (
      <article>
        <p>
          <span
            contentEditable={editable}
            suppressContentEditableWarning
            ref={ip => (this.myInp = ip)}
            className={editable ? "edit-mode" : ""}
          >
            {`Player ${idx + 1} `}
          </span>
          <Button icon="✏️" onClick={this.handleEdit}>
            {editable ? "Save" : "Edit"}
          </Button>
          <Button icon="🔥" onClick={() => handleRemove(idx)}>
            Remove
          </Button>
        </p>
        <PlayerHand>
          <Card suit="D" value="A" selected={true}>
            A
          </Card>
          <Card suit="D" value="K">
            K
          </Card>
          <Card suit="D" value="Q">
            Q
          </Card>
          <Card suit="D" value="J">
            J
          </Card>
          <Card suit="D" value="T">
            T
          </Card>
        </PlayerHand>
      </article>
    );
  }
}

export default Player;

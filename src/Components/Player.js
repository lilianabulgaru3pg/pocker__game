import React, { Component } from "react";

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

class Player extends Component {
  myInp = {};
  state = { editable: false };

  handleEdit = () => {
    const { editable } = this.state;
    editable ? this.myInp.focus() : this.myInp.blur();
    this.setState({ editable: !editable });

    if (editable)
      this.props.savePlayersName(this.myInp.textContent, this.props.idx);
  };

  render() {
    const { idx, handleRemove, name, cards } = this.props;
    const { editable } = this.state;
    return (
      <article>
        <p>
          <span
            contentEditable={editable}
            suppressContentEditableWarning
            ref={ip => (this.myInp = ip)}
            className={editable ? "edit-mode" : "normal-mode"}
          >
            {name}
          </span>
          <Button icon="✏️" onClick={this.handleEdit}>
            {editable ? "Save" : "Edit"}
          </Button>
          <Button icon="🔥" onClick={() => handleRemove(idx)}>
            Remove
          </Button>
        </p>
        <PlayerHand>
          {cards.map(card => {
            const c = card.split("");
            return (
              <Card value={c[0]} suit={c[1]} key={card}>
                {c[0]}
              </Card>
            );
          })}
        </PlayerHand>
      </article>
    );
  }
}

export default Player;

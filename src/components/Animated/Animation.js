import posed, { PoseGroup } from "react-pose";
import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import shuffle from "./shuffle.js";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const StyledItem = styled(Item)`
  padding: 15px;
  list-style-type: none;
  margin: 5px 0px 5px 0px;
  border: 1px solid #e3e3e3;
`;

const ItemList = ({ items }) => (
  <ul>
    <PoseGroup>
      {items.map(item => (
        <StyledItem key={item.id}>{item.text}</StyledItem>
      ))}
    </PoseGroup>
  </ul>
);

class Animation extends React.Component {
  state = {
    items: [
      { id: 1, text: "React" },
      { id: 2, text: "Javascript" },
      { id: 3, text: "Programming" },
      { id: 4, text: "Animations" }
    ]
  };

  _shuffle = () => {
    this.setState({ items: shuffle(this.state.items) });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this._shuffle, 2000);

    setTimeout(() => {
      this.setState({
        items: this.state.items.concat([{ id: 5, text: "See how I fade in?" }])
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        items: [{ id: 6, text: "Can also fade in on top" }].concat(
          this.state.items
        )
      });
    }, 6000);
  }

  render() {
    return (
      <Container>
        <ItemList items={this.state.items} />
      </Container>
    );
  }
}
export default Animation;

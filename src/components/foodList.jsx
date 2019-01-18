import React, { Component } from "react";

class Foodlist extends Component {
  state = {
    tags: [
      {
        title: "Something yum",
        img: 2,
        numTimesMade: 5,
        meal: "dinner",
        dateCreated: "",
        description: "",
        originalUrl: ""
      },
      {
        title: "This is a title",
        img: 2,
        numTimesMade: 9,
        meal: "breakfast",
        dateCreated: "",
        description: "lorum ipsum",
        originalUrl: ""
      },
      {
        title: "This is a title",
        img: 2,
        numTimesMade: 6,
        meal: "breakfast",
        dateCreated: "",
        description: "lorum ipsum",
        originalUrl: ""
      },
      {
        title: "This is a title",
        img: 2,
        numTimesMade: 3,
        meal: "breakfast",
        dateCreated: "",
        description: "lorum ipsum",
        originalUrl: ""
      },
      {
        title: "This is a title",
        img: 2,
        numTimesMade: 44,
        meal: "breakfast",
        dateCreated: "",
        description: "lorum ipsum",
        originalUrl: ""
      },
      {
        title: "This is a title",
        img: 2,
        numTimesMade: 6,
        meal: "breakfast",
        dateCreated: "",
        description: "lorum ipsum",
        originalUrl: ""
      }
    ]
  };
  render() {
    return <React.Fragment>{this.renderTags()}></React.Fragment>;
  }
  renderTags() {
    if (this.state.tags.length === 0)
      return <p>No food makes for an unhappy Grem!</p>;
    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index}>
            <div>
              <a href="">{tag.title}</a>
            </div>
            <div>Number of times made: {tag.numTimesMade}</div>
            <div>{tag.meal}</div>
            <div>{tag.dateCreated}</div>
            <div>{tag.originalUrl}</div>
            <div>{tag.description}</div>
          </li>
        ))}
      </ul>
    );
  }
}
export default Foodlist;

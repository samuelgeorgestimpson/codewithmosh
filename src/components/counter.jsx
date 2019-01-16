import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3", "tags4", "tags5"]
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    // if there are no tags render a message stating this
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    // else render the list
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;

import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let scriptEl = document.createElement("script");

    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute("repo", "LoisaKitakaya/My-Portfolio");
    scriptEl.setAttribute("issue-term", "url");
    scriptEl.setAttribute("theme", "github-dark");

    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div id="comments" style={{ width: "100%" }}>
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}

export default Comments;

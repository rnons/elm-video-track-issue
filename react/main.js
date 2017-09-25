class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "en.vtt"
    };
  }

  handleClick(selected) {
    this.setState({
      selected
    });
  }

  render() {
    const { selected } = this.state;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "video",
        { controls: true },
        React.createElement("source", { src: "https://download.ted.com/talks/RandallMunroe_2014-320k.mp4" }),
        React.createElement("track", { kind: "captions", src: selected, "default": true })
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleClick.bind(this, "en.vtt") },
          "en"
        ),
        React.createElement(
          "button",
          { onClick: this.handleClick.bind(this, "zh-cn.vtt") },
          "zh-cn"
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(Player, null), document.getElementById("root"));

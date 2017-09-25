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
    return (
      <div>
        <video controls>
          <source src="https://download.ted.com/talks/RandallMunroe_2014-320k.mp4" />
          <track kind="captions" src={selected} default />
        </video>
        <div>
          <button onClick={this.handleClick.bind(this, "en.vtt")}>en</button>
          <button onClick={this.handleClick.bind(this, "zh-cn.vtt")}>
            zh-cn
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Player />, document.getElementById("root"));

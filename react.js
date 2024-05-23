const { Children } = require("react");

class myComponent extends Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }
  render() {
    return (
      <div ref={this.node}>
        Example of scroll view implement using callback ref
      </div>
    );
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  getDerivedErrorFrom(errr) {
    return (this.state.hasError = true);
  }
  componentDidCatch(err) {
    console.log("log error");
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}

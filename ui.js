'use strict';

const { h, Component, Text } = require('ink')
const PropTypes = require('prop-types');

class UI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.seconds
    };
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      if (!this.state.count) process.exit(0);
      this.setState({
        count: this.state.count - 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Text green>
        { this.state.count } seconds remaining!
      </Text>
    );
  }
}

UI.propTypes = {
  seconds: PropTypes.number
};

UI.defaultProps = {
  seconds: 10
};

module.exports = UI;

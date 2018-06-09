import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class COMPONENT_NAME extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    <div className="COMPONENT_NAME">COMPONENT_NAME</div>;
  }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(COMPONENT_NAME);

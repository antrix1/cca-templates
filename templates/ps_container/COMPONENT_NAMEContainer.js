import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import COMPONENT_NAME from '../components/COMPONENT_NAME/';

class COMPONENT_NAMEContainer extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <COMPONENT_NAME />;
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(COMPONENT_NAMEContainer);

/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
"use strict";

import React, { Component, PropTypes } from "react";
import Paper from "material-ui/Paper";

class Logo extends Component {
  render() {
    return (
      <Paper className="app-logo-wrapper" zDepth={0}>
        <img src="./images/ananda-long.png" height="100" width="650" />
      </Paper>
    );
  }
}

export default Logo;

import { Link } from "react-router-dom";
import { Component } from 'react';

class NavItem extends Component {
  render() {
    return(
      <li>
        <Link to={this.props.tolink} ></Link>
        {this.props.item}
      </li>
    )
  }
}
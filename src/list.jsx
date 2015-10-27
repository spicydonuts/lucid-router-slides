import React from 'react'
import Base from './base'
import Radium from 'radium'

@Radium
class List extends Base {
  render() {
    if (this.props.numbered) {
      return (
        <ol style={[this.context.styles.components.list, this.getStyles(), this.props.style]}>
          {this.props.children}
        </ol>
      )
    } else {
      return (
        <ul style={[this.context.styles.components.list, this.getStyles(), this.props.style]}>
          {this.props.children}
        </ul>
      )
    }
  }
}

List.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  numbered: React.PropTypes.bool
}

List.contextTypes = {
  styles: React.PropTypes.object
}

export default List

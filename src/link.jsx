import React from 'react'
import {navigatorFor} from 'lucid-router'
import Base from './base'
import Radium from 'radium'

@Radium
class Link extends Base {
  static contextTypes = {
    styles: React.PropTypes.object
  }

  static propTypes = {
    children: React.PropTypes.node,
    href: React.PropTypes.string,
    style: React.PropTypes.object
  }

  render() {
    const {href, target, style, children, ...props} = this.props
    return (
      <a target={target} href={href} onClick={target !== '_blank' && navigatorFor(href)}
        style={[this.context.styles.components.link, this.getStyles(), style]} {...props}>
        {children}
      </a>
    )
  }
}

export default Link

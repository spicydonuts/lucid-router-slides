import React from 'react'

const context = function context(Component, params) {
  const wrapper = React.createClass({
    displayName: 'ContextWrapper',
    propTypes: {
      location: React.PropTypes.object
    },
    childContextTypes: {
      styles: React.PropTypes.object,
      flux: React.PropTypes.object,
      presenter: React.PropTypes.bool,
      overview: React.PropTypes.bool,
      export: React.PropTypes.bool,
      print: React.PropTypes.bool,
      slide: React.PropTypes.number,
      router: React.PropTypes.object
    },
    getChildContext() {
      let styles = {}
      const location = this.props.location
      if ('print' in location.state) {
        styles = params.print
      } else {
        styles = params.styles
      }
      let slide = 0
      if ('slide' in location.state) {
        slide = Number(location.state.slide)
      }
      return {
        styles,
        flux: params.flux,
        presenter: 'presenter' in location.state,
        overview: 'overview' in location.state,
        export: 'export' in location.state,
        print: 'print' in location.state,
        slide
      }
    },

    render() {
      return <Component {...this.props} />
    }
  })
  return wrapper
}

export default context

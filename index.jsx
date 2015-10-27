/*global document*/

import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import context from './src/utils/context'

import * as router from 'lucid-router'

import Alt from 'alt'
import Flux from './src/flux/alt'

import Deck from './presentation/deck'
import config from './presentation/config'

require('normalize.css')
require('./themes/default/index.css')
require('highlight.js/styles/solarized_dark.css')

const flux = new Flux()
Alt.debug('flux', flux)

class Presentation extends Component {
  static childContextTypes = {router: PropTypes.object}

  getChildContext() {
    return {router}
  }

  render() {
    return <Deck/>
  }
}

router.addRoutes([
  {name: 'slide', path: '/(:slide)'}
])

const PresentationContext = context(Presentation, {
  styles: config.theme,
  print: config.print,
  flux
})

const anchor = document.querySelector('#root')

const render = location => {
  ReactDOM.render(
    <PresentationContext location={location} />,
    anchor)
}

render(router.getLocation())
router.register(render)

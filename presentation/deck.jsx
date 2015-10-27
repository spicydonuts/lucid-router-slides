import React from 'react'
import {Appear, BlockQuote, Cite, CodePane, Deck, Fill,
        Heading, Image, Layout, Link, ListItem,
        List, Quote, Slide, Text} from '../src/spectacle'
import preloader from '../src/utils/preloader'
import Interactive from './interactive'

preloader([])

const SlideDeck = () => (
  <Deck transition={['slide', 'slide']} transitionDuration={400} progress='none'>
    <Slide transition={['slide', 'slide']} bgColor='primary'>
      <Heading size={1} fit caps lineHeight={1} textColor='black'>
        Url -> State
      </Heading>
    </Slide>

    <Slide transition={['slide', 'slide']} bgColor='primary'
      notes='<ul><li>but first: routers</li><li>why so many?</li><li>not minor implementation details; problem is theyre platform specific</li></ul>'>
      <List>
        <ListItem><Appear>react-router</Appear></ListItem>
        <ListItem><Appear>react-router-component</Appear></ListItem>
        <ListItem><Appear>angular vanilla router</Appear></ListItem>
        <ListItem><Appear>angular ui-router</Appear></ListItem>
        <ListItem><Appear>angular2 router</Appear></ListItem>
        <ListItem><Appear>ember router</Appear></ListItem>
        <ListItem><Appear>express router</Appear></ListItem>
        <ListItem><Appear>koa router</Appear></ListItem>
        <ListItem><Appear>+ 3171 more</Appear></ListItem>
      </List>
    </Slide>

    <Slide transition={['slide', 'slide']} bgColor='primary'
      notes='unix pipe / why do we keep rewriting the same thing? <ul><li>should be more composable</li><li>do one thing well</li><li>unix pipe</li></ul>'>
      <Layout>
        <Fill>
          <Appear><CodePane lang='bash' source={require('raw!./unix-pipe-1.example')} textSize={30} margin='20px auto' /></Appear>
        </Fill>
        <Text>&nbsp;</Text>
        <Fill>
          <Appear>
            <CodePane lang='bash' source={require('raw!./unix-pipe-1-2.example')} textSize={30} margin='20px auto' />
          </Appear>
        </Fill>
      </Layout>
      <Appear><CodePane lang='bash' source={require('raw!./unix-pipe-2.example')} textSize={30} margin='20px auto' /></Appear>
      <Appear><CodePane lang='bash' source={require('raw!./unix-pipe-3.example')} textSize={30} margin='20px auto' /></Appear>
      <Appear>
        <Text>Hmm.. Angular/Ember</Text>
        <Text>vs</Text>
        <Text>react &middot; flux &middot; router &middot; es6/7 &middot; immutablejs &middot; babel &middot; flow</Text>
      </Appear>
    </Slide>

    <Slide transition={['slide', 'slide']} bgColor='primary' notes=''>
      <Text>How can we apply this idea to routing?</Text>
    </Slide>

    <Slide transition={['slide', 'slide']} bgColor='primary' notes='url-pattern'>
      <CodePane lang='javascript' source={require('raw!./url-pattern.example')} textSize={21} margin='20px auto' />
    </Slide>

    <Slide transition={['slide', 'slide']} bgColor='primary'
      notes='From: Christian Alfoni -- "What if the addressbar worked like an input"'>
      <List numbered>
        <ListItem><Appear>Browser creates a request with a url and a query/body, either using a link or a form, and sends it to the server</Appear></ListItem>
        <ListItem><Appear>The router parses the url and triggers one or multiple functions which has access to the query/body and changes/gets state</Appear></ListItem>
        <ListItem><Appear>When the functions are done the router creates a response where the payload is HTML</Appear></ListItem>
      </List>
      <Link href='http://www.christianalfoni.com/articles/2015_08_20_What-if-the-adddressbar-worked-like-an-input'>Christian Alfoni {'\u2010'} What if the addressbar worked like an input</Link>
    </Slide>

    <Slide transition={['fade']} bgColor='primary'
      notes='From: Christian Alfoni -- "What if the addressbar worked like an input"'>
      <List numbered>
        <ListItem><Appear>User interaction</Appear></ListItem>
        <ListItem><Appear>State change</Appear></ListItem>
        <ListItem><Appear>UI update</Appear></ListItem>
      </List>
      <Link href='http://www.christianalfoni.com/articles/2015_08_20_What-if-the-adddressbar-worked-like-an-input'>Christian Alfoni {'\u2010'} What if the addressbar worked like an input</Link>
    </Slide>

    <Slide transition={['fade']} bgColor='primary'
      notes='From: Christian Alfoni -- "What if the addressbar worked like an input"'>
      <Heading>Flux?</Heading>
    </Slide>

    <Slide transition={['fade']} bgColor='primary' notes=''>
      <Heading fit>Location Store?</Heading>
    </Slide>

    <Slide transition={['fade']} bgColor='primary' notes=''>
      <Heading fit>Location Reducer?</Heading>
    </Slide>

    <Slide transition={['slide']} bgColor='primary' notes=''>
      <CodePane lang='javascript'
                source={require('raw!./url-pattern.example')}
                textSize={21}
                margin='20px auto' />
    </Slide>

    <Slide transition={['slide']} bgColor='primary' notes=''>
      <CodePane lang='javascript'
                source={require('raw!./lucid-router-state.example')}
                textSize={21}
                margin='20px auto' />
    </Slide>

    <Slide transition={['slide', 'slide']} bgColor='primary' notes=''>
      <List>
        <ListItem><Appear>ReactDOM.render</Appear></ListItem>
        <ListItem><Appear>ReactDOM.renderToString</Appear></ListItem>
        <ListItem><Appear>Flux store</Appear></ListItem>
        <ListItem><Appear>Rx.js</Appear></ListItem>
        <ListItem><Appear>Anything else...</Appear></ListItem>
        <ListItem><Appear>...Angular via ng-include :)</Appear></ListItem>
      </List>
    </Slide>

    <Slide transition={['slide', 'slide']} bgColor='primary' notes=''>
    </Slide>

    <Slide transition={['slide']} bgColor='secondary'>
      <Link href='https://twitter.com/t_spicydonuts' target='_blank'>
        <Text lineHeight={0.5} textColor='primary'>@t_spicydonuts</Text>
      </Link>
      <Link href='https://github.com/spicydonuts/lucid-router' target='_blank'>
        <Text textSize={30} textColor='primary'>github.com/spicydonuts/lucid-router</Text>
      </Link>
    </Slide>
  </Deck>
)

export default SlideDeck

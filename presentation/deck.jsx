import React from 'react'
import {Appear, BlockQuote, Cite, CodePane, Deck, Fill,
        Heading, Image, Layout, Link, ListItem,
        List, Quote, Slide, Text} from '../src/spectacle'
import preloader from '../src/utils/preloader'
import Interactive from './interactive'

preloader([])

const SlideDeck = () => (
  <Deck transition={['slide', 'fade']} transitionDuration={800}>
    <Slide transition={['zoom', 'slide']} bgColor='primary'>
      <Heading size={1} fit caps lineHeight={1} textColor='black'>
        Spectacle
      </Heading>
      <Heading size={1} fit caps>
        A ReactJS Presentation Library
      </Heading>
      <Heading size={1} fit caps textColor='black'>
        Where You Can Write Your Decks In JSX
      </Heading>
      <Text textSize='1.5em' margin='20px 0px 0px' bold>Hit Your Right Arrow To Begin!</Text>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
      <CodePane
        lang='javascript'
        source={require('raw!./deck.example')}
        margin='20px auto'/>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='secondary'>
      <Appear fid='1'>
        <Heading size={1} caps fit textColor='primary'>
          Full Width
        </Heading>
      </Appear>
      <Appear fid='2'>
        <Heading size={1} caps fit textColor='tertiary'>
          Adjustable Darkness
        </Heading>
      </Appear>
      <Appear fid='3'>
        <Heading size={1} caps fit textColor='primary'>
          Background Imagery
        </Heading>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='primary'>
      <Heading caps fit>Flexible Layouts</Heading>
      <Layout>
        <Fill>
          <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
            Left
          </Heading>
        </Fill>
        <Fill>
          <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
            Right
          </Heading>
        </Fill>
      </Layout>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='black'>
      <BlockQuote>
        <Quote>Wonderfully formatted quotes</Quote>
        <Cite>Ken Wheeler</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='primary'>
      <Heading caps fit size={1} textColor='tertiary'>
        Smooth
      </Heading>
      <Heading caps fit size={1} textColor='secondary'>
        Combinable Transitions
      </Heading>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='secondary' textColor='primary'>
      <List>
        <ListItem><Appear fid='1'>Inline style based theme system</Appear></ListItem>
        <ListItem><Appear fid='2'>Autofit text</Appear></ListItem>
        <ListItem><Appear fid='3'>Flexbox layout system</Appear></ListItem>
        <ListItem><Appear fid='4'>Lucid-Router navigation!</Appear></ListItem>
        <ListItem><Appear fid='5'>PDF export</Appear></ListItem>
        <ListItem><Appear fid='6'>And...</Appear></ListItem>
      </List>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='primary'>
      <Heading size={1} caps fit textColor='tertiary'>
        Your presentations are interactive
      </Heading>
      <Interactive/>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='secondary'>
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

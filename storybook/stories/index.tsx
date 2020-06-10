import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import { storiesOf,getStorybookUI } from '@storybook/react-native'
import { action,withActions } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs ,object,text ,} from '@storybook/addon-knobs'

interface Props {
  onPress: () => void
}

const Button: React.FC<Props> = ({ onPress, children }) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
}

storiesOf('Button', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>{getStory()}</View>
  ))
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text("title","initial title")}</Text>
    </Button>
  ))
  .add('with image', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text("title","initial title")}</Text>
    </Button>
  ))

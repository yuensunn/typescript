import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

interface Props {
  onPress: () => void
}

const Button: React.FC<Props> = ({ onPress ,children}) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
}
storiesOf('Button', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, backgroundColor: 'green' }}>{getStory()}</View>
  ))
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with hello', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello </Text>
    </Button>
  ))

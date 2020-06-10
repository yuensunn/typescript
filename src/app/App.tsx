import React from 'react'
import { Provider } from 'react-redux'
import Counter from 'features/counter/Counter'
import Storybook from 'storybook'
import store from 'app/store'

const App: React.FC = () => (
  <Provider store={store}>
    <Counter name="" />
  </Provider>
)

const STORYBOOK_START = false
export default (STORYBOOK_START ? Storybook : App)

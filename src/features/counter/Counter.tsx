import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useAppDispatch, useSelector } from 'app/store'
import { unwrapResult } from '@reduxjs/toolkit'
import {
  increment,
  decrement,
  valueSelector,
  loadAmount,
  fetchUserById,
} from './counterSlice'

interface Props {
  name: string
  enthusiasmLevel?: number
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
})

const Counter: React.FC<Props> = ({ name }) => {
  const dispatch = useAppDispatch()

  const value = useSelector(valueSelector)

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        {value}
        {name}
      </Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            accessibilityLabel="decrement"
            color="red"
            onPress={(): void => {
              console.log(dispatch(increment()))
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="+"
            accessibilityLabel="increment"
            color="blue"
            onPress={(): void => {
              console.log(dispatch(decrement()))
            }}
          />
          <Button
            title="happy"
            accessibilityLabel="increment"
            color="blue"
            onPress={(): void => {
              dispatch(fetchUserById(2))
                .then(unwrapResult)
                .then((res) => {
                  console.log('result', res)
                })
            }}
          />
        </View>
      </View>

      <Button
        title="-"
        accessibilityLabel="load"
        color="red"
        onPress={(): void => {
          dispatch(loadAmount())
        }}
      />
    </View>
  )
}

export default Counter

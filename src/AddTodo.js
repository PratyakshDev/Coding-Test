import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './features/todo/todoSlice'

const AddTodo = () => {
    const [ input , setInput] = useState("")
    const dispatch = useDispatch()

    const addtodoHandler = () => {
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
        <TextInput
        placeholder='Add your tasks'
        value={input}
        onChangeText={(text) => setInput(text)}/>
      <TouchableOpacity onPress={addtodoHandler}>
        <Text>AddTodo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({})
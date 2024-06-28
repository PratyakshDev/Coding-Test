import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from './features/todo/todoSlice'

const Home = () => {
  const todos = useSelector(state => state.todos)
  const [input, setInput] = useState("")
  const [editId, setEditId] = useState(null);
  const [showUpdateBtn, setShowUpdateBtn] = useState(false)
  const dispatch = useDispatch()

  const addtodoHandler = () => {
    dispatch(addTodo(input))
    setInput('')
  }

  const editTodo = (item) => {
    setEditId(item.id)
    setInput(item.text)
    setShowUpdateBtn(true)
  }
  const updatetodo = () => {
    dispatch(updateTodo({id: editId, text: input}))
    setEditId(null)
    setShowUpdateBtn(false)
    setInput("")
  }

  const isPlaindrome = (str) => {
   if(str === str.split("").reverse().join("")){
    console.log("true")
   }
   else{
    console.log("false")
   }
  }

  function factorial(number) { 

    if (number === 0 || number === 1) { 

      return 1; 

    } else { 

      const result = number * factorial(number - 1); 
      console.log(result)
      return result;
    } 

  } 

  function isPrime(number) {
      if (number <= 1) {
        return false;
      }
      for (i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          console.log("false");
          return false
        }
      }
      console.log("true");
      return true
  }

function largest(array){
 if (array.length === 0){
  return undefined;
 }
 let large = array[0]
 for(i= 1; i< array.length; i++){
  if (array[i]> large){
    large = array[i]
  }
 }
 return large
}

function removeDuplicates(arr) { 

  return arr.filter((item, index) => arr.indexOf(item) === index); 

}

function starPattern (row){
  for (let i = row; i>= 1; i--){
    let str = ""
    for(let j = 1; j<=i; j++){
      str = str+"*";
    }
    console.log(str)
  }
}

const number = [3, 4, 5, 6, 7, 7, 7 , 8, 8 , 9]

console.log(starPattern(5))

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder='Add your tasks'
        value={input}
        onChangeText={(text) => setInput(text)} />
       {showUpdateBtn ?
        <TouchableOpacity onPress={updatetodo}>
          <Text>UpdateTodo</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => isPrime(4)}>
          <Text>AddTodo</Text>
        </TouchableOpacity>}

      <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
        {todos.map((item) => {
          return (
            <View style={{ flexDirection: 'row', }}>
              <Text>{item.text}</Text>
              <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))} style={{ justifyContent: "flex-end", marginLeft: 100, backgroundColor: "red" }}>
                <Text style={{ color: "white" }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => editTodo(item)} style={{ justifyContent: "flex-end", marginLeft: 100, backgroundColor: "blue" }}>
                <Text style={{ color: "white" }}>Edit</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
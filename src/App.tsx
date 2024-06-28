import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodo from './AddTodo';
import Home from './Home';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default MyStack;
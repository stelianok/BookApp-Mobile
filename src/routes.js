import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Octicons';

import Feed from './screens/Feed';
import AddBook from './screens/AddBook';

const Tab = createMaterialBottomTabNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
        style={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="Home"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="book" size={24} color={'#FFF'} />,
          }}
        />
        <Tab.Screen
          name="New Book"
          component={AddBook}
          options={{
            tabBarLabel: 'Add Book',
            tabBarIcon: () => <Icon name="plus" size={24} color={'#FFF'} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

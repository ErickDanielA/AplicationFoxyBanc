import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';

import Home from '../Pages/home';
import Shop from '../Pages/shopping';
import Info from '../Pages/informacoes';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Incio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        }}
      />
       <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Informações"
        component={Info}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="info" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

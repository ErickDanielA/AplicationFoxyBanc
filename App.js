import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Pages/home';
import Rotasnavbar from './components/navbar/Rotasnavbar';

export default function App(){
  return(
    <NavigationContainer>
        <Rotasnavbar/>
    </NavigationContainer>
  );
}

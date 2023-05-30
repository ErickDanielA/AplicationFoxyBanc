import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

/*const element = <img src={user.avatarUrl}></img>;
const trocar = () => <document.getElementById('olho').style.source === {require('../../assets/olho.png')} >;
const ver = () => setCount(prevCount => prevCount + 1);*/

export default function Info() {
  return (
    <ScrollView>
      <View style={estilo}>
        <View style={estilo.caixa}>
          <Image
            style={estilo.logo}
            source={require('../../assets/logo.png')}></Image>
          <Text style={estilo.saudacoes}>Foxy</Text>        
        </View>
        <View style={estilo.roxo}>
        <Text style={estilo.textFatura}>Conta: 0001</Text>        
        <Text style={estilo.textFatura}>Agencia: 5270222-2</Text>
        <Text style={estilo.textFatura}>Banco: 162 ° Foxy Emporio de Agiotas</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  logo: {
    height: 75,
    width: 75,
  },
  caixa: {
    paddingTop: 20,
    backgroundColor: '#ED820F',
    height: 100,
    flexDirection: 'row',
    borderRadius: 10,
  },
  saudacoes: {
    color: 'white',
    fontSize: 40,    
  },
  textFatura:{
    fontSize: 20,
    zIndex: 1,
    textAlign: 'left',
    marginLeft: 40,
  },
  roxo:{
    marginTop: 3,
  },
  white:{
    backgroundColor: 'white',
  },
});
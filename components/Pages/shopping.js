import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

/*const [count, setCount] = useState(0);
const ver = () => setCount(prevCount => prevCount + 1);
*/
export default function Shop() {
  return (
    <ScrollView>
      <View>
        <View style={estilo.caixa}>
          <Image
            style={estilo.logo}
            source={require('../../assets/logo.png')}></Image>
          <Text style={estilo.saudacoes}>Foxy</Text>
        </View>
        <View style={estilo}>        
        <Text style={estilo.titulo}>Shoppíng</Text>
        <Text style={estilo.subTitulo}>Vantagens exclusivas das nossas marcas preferidas</Text>
        </View>                
        <View style={estilo.items}>
          <TouchableOpacity style={estilo.box}>
            <Image
              style={estilo.img}
              source={require('../../assets/xbox.png')}></Image>
              <Text style={estilo.texto}>Xbox</Text>
              <Text style={estilo}>8% OFF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.box}>
            <Image
              style={estilo.img}
              source={require('../../assets/hype.png')}></Image>
              <Text style={estilo.texto}>Hype</Text>
              <Text style={estilo}>15% OFF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.box}>
            <Image
              style={estilo.img}
              source={require('../../assets/nike.png')}></Image>
              <Text style={estilo.texto}>Nike</Text>
              <Text style={estilo}>5% OFF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.box}>
            <Image
              style={estilo.img}
              source={require('../../assets/zattini.png')}></Image>
              <Text style={estilo.texto}>Zattini</Text>
              <Text style={estilo}>5% OFF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.box}>
            <Image
              style={estilo.img}
              source={require('../../assets/netshoes.png')}></Image>
              <Text style={estilo.texto}>Netshoes</Text>
              <Text style={estilo}>11% OFF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.box}>
            <Image
              style={estilo.img}
              source={require('../../assets/centauro.png')}></Image>
              <Text style={estilo.texto}>Centauro</Text>
              <Text style={estilo}>12% OFF</Text>
          </TouchableOpacity>
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
    width: 500,
    flexDirection: 'row',    
    borderRadius: 10,
  },
  saudacoes: {
    color: 'white',
    fontSize: 40,
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,    
    borderRadius: 15,    
  },
  items: {    
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,    
    alignItems: 'center',    
    justifyContent: 'center',
  },
  box:{    
    backgroundColor: 'gray',    
    borderRadius: 25,
    width: 120,
    height: 180,    
    alignItems: 'center',
    margin: 10,
    marginLeft:15,
  },  
  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 6,
    paddingTop: 25,
    color: 'purple',
    textAlign: 'center',
  },  
  subTitulo: {
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 6,
    paddingTop: 25,    
    textAlign: 'center',
  },
  texto:{
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 6,
  },
});

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
      
    

export default function Home() {
  return (    
    <ScrollView>
      <View>
 
        <View style={estilo.caixa}>
          <Image
            style={estilo.logo}
            source={require('../../assets/logo.png')}></Image>
          <Text style={estilo.saudacoes}>Foxy</Text>
          <TouchableOpacity style={estilo.butao} /*onPress={ver}*/>
            <Image
              style={estilo.imgolho}
              source={require('../../assets/olho.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={estilo.conta}>
          <Text style={estilo.negrito}>Conta: </Text>
          <Text style={estilo.value}>200,24</Text>
        </View>
        <View style={estilo.items}>    
          <TouchableOpacity>
            <Image
              style={estilo.img}
              source={require('../../assets/pix.png')}></Image>              
          </TouchableOpacity>          
          <TouchableOpacity>
                      <Image
              style={estilo.img}
              source={require('../../assets/recarga.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={estilo.img}
              source={require('../../assets/pagamentos.png')}></Image>
          </TouchableOpacity>    
          <TouchableOpacity>
            <Image
              style={estilo.img}
              source={require('../../assets/giftcard.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={estilo.img}
              source={require('../../assets/emprestimo.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={estilo}>
          <Text style={estilo.negrito}>Fatura</Text>
          <View style={estilo.itemsFat}>
          <Image style={estilo.icone} source={require('../../assets/carrinho.png')}></Image>
          <Text style={estilo.textFaturaS}>Saúde</Text>
          <Text style={estilo.textFatura}>Drogaria São Paulo</Text> 
          <Text style={estilo.value}>55,99</Text>         
          </View>
          <View style={estilo.itemsFat}>
          <Image style={estilo.icone} source={require('../../assets/carrinho.png')}></Image>
          <Text style={estilo.textFaturaS}>Alimentação</Text>
          <Text style={estilo.textFatura}>Super Mercado Chama</Text> 
          <Text style={estilo.value}>83,12</Text>         
          </View>
          <View style={estilo.itemsFat}>
          <Image style={estilo.icone} source={require('../../assets/carrinho.png')}></Image>
          <Text style={estilo.textFaturaS}>Alimentação</Text>
          <Text style={estilo.textFatura}>Açougue Esperança do Boi</Text> 
          <Text style={estilo.value}>80,00</Text>         
          </View>
          <View style={estilo.itemsFat}>
          <Image style={estilo.icone} source={require('../../assets/carrinho.png')}></Image>
          <Text style={estilo.textFaturaS}>Alimentação</Text>
          <Text style={estilo.textFatura}>Lanchonete União</Text> 
          <Text style={estilo.value}>26,50</Text>         
          </View>
          <View style={estilo.itemsFat}>
          <Image style={estilo.icone} source={require('../../assets/carrinho.png')}></Image>
          <Text style={estilo.textFaturaS}>Conta</Text>
          <Text style={estilo.textFatura}>EletroPaulo</Text> 
          <Text style={estilo.value}>120,86</Text>         
          </View>
          <View style={estilo.itemsFat}>
          <Image style={estilo.icone} source={require('../../assets/carrinho.png')}></Image>
          <Text style={estilo.textFaturaS}>Lazer</Text>
          <Text style={estilo.textFatura}>Zoológico de São Paulo Conveniência</Text> 
          <Text style={estilo.value}>80,00</Text>         
          </View>
          <View style={estilo.itemsFat}>
          <Image style={estilo.icone} source={require('../../assets/carrinho.png')}></Image>
          <Text style={estilo.textFaturaS}>Conta</Text>
          <Text style={estilo.textFatura}>SABESP</Text> 
          <Text style={estilo.value}>96,12</Text>         
          </View>
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
  butao: {
    paddingTop: 23,
    paddingLeft: 180,  
  },
  imgolho: {
    width: 40,
    height: 40,
  },
  img: {
    width: 40,
    height: 40,
    margin: 10,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    backgroundColor: 'white',
  },
  negrito: {
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 6,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 15,
  },
  conta:{
    backgroundColor: 'white',
  },
  textFatura:{
    fontSize: 18,
    zIndex: 1,
    textAlign: 'left',
    marginLeft: 40,
  },
  textFaturaS:{
    fontSize: 14,
    zIndex: 1,
    textAlign: 'left',
    marginLeft: 40,
  },
  icone:{
    width: 25,
    height: 15,
    marginTop: 20,    
    marginLeft: 10,
    paddingBottom: 20,
  },
  itemsFat: {  
    height: 120,
    marginBottom: 5,    
    marginTop: 5,
    backgroundColor: 'white',
  },
});
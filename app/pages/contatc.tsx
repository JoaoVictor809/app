import { Text, View, Image } from "react-native";
import Estilo from "../../assets/style/contatc";


export default function contatc() {
 
  return (
   <View style={{flex:1,width:"100%", backgroundColor:"#fff"}}>
    <View style={Estilo.container}>
        <Text><h1 style={{color:"#fff"}}>Contatos</h1></Text>
    </View>
      <View style={Estilo.imagem}>
        <Image source={require('../../assets/images/contatos.png')}/>
      </View>
      <View style={Estilo.containerMain}>
        <View style={Estilo.container01}>
            <Text><h2 style={{color:"#293B91"}}>(11) 4163-4655</h2></Text>
            <Image source={require('../../assets/images/tell.png')}/>
        </View>

        <View style={Estilo.container02}>
        <Image source={require('../../assets/images/email.png')}/>
            <Text><h2 style={{color:"#293B91"}}>e245.secretaria@etec.sp.gov.br</h2></Text>
        </View>

        <View style={Estilo.container01}>
            <Text><h2 style={{color:"#293B91"}}>@etecantoniofurlan</h2></Text>
            <Image source={require('../../assets/images/insta.png')}/>
        </View>

        <View style={Estilo.container02}>
        <Image source={require('../../assets/images/local.png')}/>
            <Text><h2 style={{color:"#293B91"}}>R. João Batista Soares, 440<br />Centro, Barueri - SP, 06401-135</h2></Text>
        </View>
      </View>
   </View>
  )}
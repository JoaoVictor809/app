import { Text, View, Image } from "react-native";
import Estilo from "../../assets/style/contatc";


export default function contatc() {
 
  return (
    <View style={Estilo.containerMain}>
        <Text style={Estilo.title}><h2>CONTATOS</h2></Text>
        {/* icones do contato */}
        <View>
            {/* telefone */}
        <View style={Estilo.containerImg}>
            <Image source={require('../../assets/images/tell.png')} />
            <Text style={Estilo.text}>-Telefone:(11) 4163-4655</Text>
        </View>
        {/* Local */}
        <View style={Estilo.containerImg}>
            <Image source={require('../../assets/images/local.png')} />
            <Text style={Estilo.text}>-Endereço: R. João Batista Soares, 440 - Centro, Barueri - SP, 06401-135</Text>
        </View>
        {/* celular */}
        <View style={Estilo.containerImg}>
            <Image source={require('../../assets/images/cell.png')} />
            <Text style={Estilo.text}>-Celular: +55 114163-4659</Text>
        </View>
        {/* email */}
        <View style={Estilo.containerImg}>
            <Image source={require('../../assets/images/email.png')} />
            <Text style={Estilo.text}>-Email: e245.secretaria@etec.sp.gov.br</Text>
        </View>
        {/* insta */}
        <View style={Estilo.containerImg}>
            <Image source={require('../../assets/images/insta.png')} />
            <Text style={Estilo.text}>-Insta: @etecantoniofurlan</Text>
        </View>
        {/* site */}
        <View style={Estilo.containerImg}>
            <Image source={require('../../assets/images/web.png')} />
            <Text style={Estilo.text}>-Site: https://www.etecantoniofurlan.com.br/</Text>
        </View>
        </View>

        
    </View>
  )}
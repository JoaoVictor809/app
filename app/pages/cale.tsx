import { Text, View, Image } from "react-native";
import Estilo from "../../assets/style/cale";

export default function cale() {
    return (
        <View style={Estilo.container}>
            <View style={Estilo.perfil}>
                <Text>
                    <h1 style={{ color: "#fff" }}>Calendário Escolar</h1>
                </Text>
                <Image source={require('../../assets/images/perfil2.png')} />
            </View>
            <View style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between", paddingLeft:30}}>
                <View>
                    <Text><h3 style={{color:"#fff"}}>01/12- Reunião banca<br />escolar</h3></Text>
                    <Text><h3 style={{color:"#fff"}}>01/12- Reunião banca<br />escolar</h3></Text>
                    
                </View>
                <View style={Estilo.container01}>
                </View>
            </View>
            <View style={Estilo.cale}>
                <Image source={require('../../assets/images/cale.png')}/>
            </View>
            <View style={{display:"flex", position:"relative", bottom:270, flexDirection:"row",width:"100%", justifyContent:"space-between", paddingRight:10}}>
            <View style={Estilo.container02}>
                </View>
                <View>
                    <Text><h3 style={{color:"#fff"}}>01/12- Reunião banca<br />escolar</h3></Text>
                    <Text><h3 style={{color:"#fff"}}>01/12- Reunião banca<br />escolar</h3></Text>
                    <Text><h3 style={{color:"#fff"}}>01/12- Reunião banca<br />escolar</h3></Text>
                    
                </View>
            </View>
        </View>
    );
}
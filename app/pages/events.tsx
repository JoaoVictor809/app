import { Text, View, Image } from "react-native";
import Estilo from "../../assets/style/evento";

export default function events() {
    return (
        <View style={{ flex: 1, backgroundColor: "#1B98E0" }}>
            <View style={Estilo.perfil}>
                <Image source={require('../../assets/images/evento.png')} />
                <Image source={require('../../assets/images/perfil2.png')} />
            </View>

            <View style={{gap:20}}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight:15 }}>
                <View style={Estilo.title}>
                    <Text><h2 style={{ color: "#fff" }}>Eventos</h2></Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft:15 }}>
                <View style={Estilo.title02}>
                    <Text><h2 style={{ color: "#fff" }}>12/12- Apresentação<br />Pré-TCC</h2></Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight:15 }}>
                <View style={Estilo.title03}>
                    <Text><h2 style={{ color: "#fff" }}>05/12- Festa fim<br />de ano</h2></Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft:15 }}>
                <View style={Estilo.title04}>
                    <Text><h2 style={{ color: "#fff" }}>01/12- Palestra Design<br />Ux-Ui</h2></Text>
                </View>
            </View>
            </View>

        </View>
    );
}
import { Text, View, Pressable, Image } from "react-native";
import { Link, Stack } from "expo-router";
import Estilo from "../../assets/style/boletim";

export default function boletim() {
    return(
        <View style={{
            flex:1,
            backgroundColor:"#fff"
        }}>
            <View style={Estilo.container01}>
                <Text><h1 style={{color:"#fff"}}>Boletim escolar</h1></Text>

                <View style={Estilo.containerPerfil}>
                    <View>
                    <Image source={require('../../assets/images/perfil.png')}/>
                    <Text><h3 style={{color:"#fff"}}>Desempenho: Bom</h3></Text>
                    </View>
                    <View >
                        <Text style={Estilo.texto}><h3>Pedro Almeida<br />17 anos<br />3° A</h3></Text>
                    </View>
                </View>
                
            </View>
            <View style={Estilo.image}>
                <Image source={require('../../assets/images/studant.png')}/>
            </View>
            {/* area do boletim */}
            <View style={Estilo.container02}>
                {/* titulo */}
                <View style={{width:"90%", height:"auto", backgroundColor:"#1B98E0", alignItems:"center", borderRadius:100}}>
                    <Text><h2 style={{color:"#fff"}}>Boletim ecolar Pedro Almeida</h2></Text>
                </View>
                {/* info */}
                <View style={Estilo.info}>
                    <View>
                        <Text><h3 style={{color:"#1B98E0"}}>Materias</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Português</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Inglês</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Artes</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Ed física</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Sociologia</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Filosofia</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Matemática</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Biologia</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Química</h3></Text>
                        <Text><h3 style={{color:"#000"}}>Física</h3></Text>
                        </View>
                    <View>
                        <Text><h3 style={{color:"#1B98E0"}}>Nota</h3></Text>
                        <Text><h3 style={{color:"#000"}}>10</h3></Text>
                        <Text><h3 style={{color:"#000"}}>8</h3></Text>
                        <Text><h3 style={{color:"#000"}}>5</h3></Text>
                        <Text><h3 style={{color:"#000"}}>9</h3></Text>
                        <Text><h3 style={{color:"#000"}}>10</h3></Text>
                        <Text><h3 style={{color:"#000"}}>7</h3></Text>
                        <Text><h3 style={{color:"#000"}}>8</h3></Text>
                        <Text><h3 style={{color:"#000"}}>8</h3></Text>
                        <Text><h3 style={{color:"#000"}}>4</h3></Text>
                        <Text><h3 style={{color:"#000"}}>10</h3></Text>
                        </View>
                </View>
                
                {/* notas */}
                <View>

                </View>
            </View>
        </View>
    );
}
import { Text, View, SafeAreaView, Pressable, Image, ImageBackground } from "react-native";
import { Link, Stack } from "expo-router";
import Estilo from "../assets/style/index";



export default function Index() {

  return (

    <SafeAreaView style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#247BA0",
      width: "100%"
    }}>
      <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 100 }}>
        <View style={{ display: "flex", flexDirection: "column", gap: 20, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/images/logo001.png")} />
          <Text style={Estilo.texto}><h2>Seja bem vindo!!</h2></Text>
        </View>
        <Text style={Estilo.texto2}>
          <h4>Bem-vindo ao nosso app de estudos! Aqui, você tem acesso a conteúdos exclusivos e uma experiência personalizada para aprender no seu ritmo.
            Vamos juntos alcançar seus objetivos e tornar o aprendizado mais divertido e eficaz!</h4>
        </Text>
      </View>


    </SafeAreaView>
  );
}
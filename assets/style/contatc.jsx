import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerImg:{
        display:"flex",
        flexDirection:"row",
        fontFamily:"Oswald_200ExtraLight",
        alignItems:"center",
        gap:10,
        paddingLeft: 10,
        paddingRight:10
    },
    title:{
        fontFamily:"Oswald_400Regular",
        fontSize:30,
    },
    text:{
        textAlign:"justify"
    },
    containerMain:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        gap:20,
        paddingTop:50,
    }
})
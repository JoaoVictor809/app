import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width:"100%",
        height:139,
        backgroundColor:"#1B98E0",
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        alignItems:"center",
        justifyContent:"center",
    },
    imagem:{
        position:"relative",
        alignItems:"center",
        top:-100,
        zIndex:-1,  
    },
    container01:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'flex-end',
        paddingRight:60,
        gap:10,
    },
    container02:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:15,
        gap:10,
    },
    containerMain:{
        position:"relative",
        top:-100,
        gap:50
    }
})
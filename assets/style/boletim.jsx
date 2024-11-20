import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container01:{
        width: "100%",
        height: "auto",
        backgroundColor:"#1B98E0",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingBottom:40,
        justifyContent:"center",
        alignItems:"center",
        gap:20,
    },
    containerPerfil:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        paddingLeft:25,
        paddingRight:20,
        alignItems:"center",
        
    },
    texto:{
        display:"flex",
        flexDirection:"column",
        textAlign:"right",
        color:"#fff"
    },
    image:{
        position:"relative",
        alignItems:"center",
        top:-50
    },
    container02:{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        alignItems:"center"
    },
    info:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%"
    },
    
})
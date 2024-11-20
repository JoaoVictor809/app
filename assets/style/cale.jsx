import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        backgroundColor:"#1B98E0"
    },
    perfil:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20
    },
    container01:{
        width:150,
        height:470,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
    },
    container02:{
        width:150,
        height:470,
        backgroundColor:"#fff",
        borderTopRightRadius:30,
        borderBottomRigthRadius:30,
        
    },
    cale:{
        position:"relative",
        top:-270,
    }
})
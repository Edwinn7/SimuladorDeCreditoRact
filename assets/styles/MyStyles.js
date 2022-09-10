import { StyleSheet } from "react-native";
const myStyle = StyleSheet.create({
    ViewHeader:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray',
        width:'80%',
    }
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      textAlign:'center'
    },
    viewChild:{
     flex:5,
     backgroundColor:'gray',
     width:'100%',
    },
    alingView:{
      justifyContent:'left',
      alignItems:'left',
      textAlign:'left',
    },
    alingView2:{
      justifyContent:'right',
      alignItems:'right',
      textAlign:'right',

    }
  });
  
export{styles, myStyle}
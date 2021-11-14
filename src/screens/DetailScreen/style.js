import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export default StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width ,
        backgroundColor:'#FFFFFF'
      },
      title: {
        color: '#173756',
        fontWeight: '700',
        fontSize: 15,
      },
      subText: {
        color: '#173756',
        fontWeight: '400',
        fontSize: 12,
      },
      icon: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        tintColor:'#173756'
      },
      image:{
        width: Dimensions.get('window').width,
        height:"100%",
        resizeMode:'stretch'
      },
      back:{
        width:20,
        height:20,
        tintColor:'#FFFFFF',
        resizeMode:'contain'
      },
      backContainer:{
        position:'absolute',
        zIndex:1,
        top:20,
        left:10
      }
})
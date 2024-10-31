import { View ,Text,Image} from "react-native";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import avatar from "../../../assets/images/avatar.png";

const Usuario =() =>{
    const user = useSelector((state) => state.auth.user);


    return(
        <View style={style.userMenu}>
            <View>
                <Text style={style.textUser}>Bienvenido!</Text>
                <Text style={style.textUser}>{user ? user.nombre : ""}</Text>
            </View>
            <Avatar source={avatar} size={50}/>
        </View>
    );
};

export default Usuario;

const style = StyleSheet.create({
    userMenu:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:30,
        paddingTop:20,
        height:50,
        width:300,
        alignSelf:'center',
      
    },
    textUser:{
        fontSize:20,
        fontWeight:'semi-bold',
    },
});
import React , { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class CustomDrawerMenu extends Component {
  render() {
    return (
        <View>
            <View style={styles.profileContainer}>
                <View style={styles.profile}>
                    <AntDesign name='rocket1' size={40} color='#05fbcb'/>
                    <View style={{marginLeft:12}}>
                        <Text style={{opacity:0.6}}>Logged in as</Text>
                        <Text style={{fontSize:22, color:'white', opacity:0.9}}>Dean</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={_ => this.props.navigation.closeDrawer()}>
                    <Feather 
                        name="x" 
                        size={24} 
                        color="white" 
                        style={{opacity:0.7, padding:3}}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <DrawerNavigatorItems {...this.props}/>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  profileContainer : {
      display:"flex", 
      flexDirection:"row",
      justifyContent: "space-between",
      backgroundColor: "#bc45b4",
  },
  profile: {
      display:"flex", 
      flexDirection:"row",
      paddingTop: 25,
      paddingLeft: 20,
      paddingBottom: 15,
  },

});
import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign name="search1" size={24} style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={style.container}>
                <Badge value="P" status="error" />
                <Text>thirdFrameasdasdasdasdasdasdasdasd</Text>
            </View>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
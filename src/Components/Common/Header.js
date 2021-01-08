import * as React from "react";
import { Component } from "react";
import { Header, Icon } from "react-native-elements";
import {DrawerActions} from 'react-navigation-drawer';

export default class CommonHeader extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Header
                backgroundImageStyle={{}}
                barStyle=""
                centerComponent={{
                    text: "MY TITLE",
                    style: { color: "#fff" }
                }}
                leftComponent={{ icon: "menu", color: "#fff" , onPress:() => (this.props.navigation.openDrawer())}}
                placement="left"
                rightComponent={{ icon: "home", color: "#fff" , onPress: () => console.log(DrawerActions.openDrawer)}}
                rightContainerStyle={{}}
            />
        );

    }
}
/**
 * Created by zhaoliulei on 2018/9/21.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';
import MainList from './MainList'
export default class RootNavgation extends  Component{
    render(){
        return(
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component:MainList,
                    title:'主视图',
                    passProps:{index:1}
                }}

            />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop:0,
    },

});

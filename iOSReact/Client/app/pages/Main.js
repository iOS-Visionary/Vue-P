/**
 * Created by zhaoliulei on 2018/9/21.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';
import RootNavgation from './RootNavgation'
export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTabBarItem:'project'
        }
    }
    render(){
        return (
            <TabBarIOS tintColor={'#2EBE76'}>
                <TabBarIOS.Item
                    renderAsOriginal={true}
                    selected = {this.state.selectedTabBarItem == 'project'}
                    icon = {require('../img/task_normal.png')}
                    selectedIcon = {require('../img/task_selected.png')}
                    title = '原生组件'
                >
                    <RootNavgation/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}
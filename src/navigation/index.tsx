import React from "react";
import {Navigation} from "react-native-navigation";
import { LogBox } from 'react-native';
import {Provider} from 'react-redux';
import store from "../redux/store";

import Home from '../screens/Home';
import More from '../screens/More';
import AddFoam from '../components/Modal/AddFoam';
import Flatlist from '../components/Modal/Flatlist';
import ModalHeaderButton from "../components/ModalHeaderButton";

LogBox.ignoreAllLogs(); // ignore warning as getting splash screen warning due to expo

// Register all the components we need to use in navigation with default options
export const registerComponents = () => {
    const activeTabColor = 'rgb(58,104,239)';
    const inActiveTabColor = 'rgb(198,198,198)';

    Navigation.registerComponentWithRedux('Home', () => Home, Provider, store);
    Navigation.registerComponentWithRedux('ModalHeaderButton', () => ModalHeaderButton, Provider, store);
    Navigation.registerComponentWithRedux('More', () => More, Provider, store);
    Navigation.registerComponentWithRedux('AddFoam', () => AddFoam, Provider, store);
    Navigation.registerComponentWithRedux('Flatlist', () => Flatlist, Provider, store);

    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
            animate: false,
        },
        bottomTab: {
            fontSize: 12,
            selectedFontSize: 12,
            textColor: inActiveTabColor,
            selectedTextColor: activeTabColor,
            iconColor: inActiveTabColor,
            selectedIconColor: activeTabColor,
        }
    });

}

// Register App Launch Listener with initial component Home
export const launchApp = () => {
    Navigation.events().registerAppLaunchedListener(async () => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            name: 'Home'
                                        }
                                    },
                                ]
                            }
                        },
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            name: 'More'
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        });
    });
}

// open modal
export const openModal = () => {
    Navigation.showModal({
        stack: {
            id: 'modalStack',
            options: {
                statusBar:{
                    animated: true,
                    style: 'light',
                    visible: true
                },
                topBar: {
                    noBorder: true,
                    animateLeftButtons: true,
                    animateRightButtons: true,
                    animate: true
                }
            },
            children: [
                {
                    component: {
                        name: 'Flatlist',
                    },
                },
            ],
        },
    });
}

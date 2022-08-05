import React from "react";
import {Navigation} from "react-native-navigation";
import { LogBox } from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from "../redux/store";
import {PersistGate} from 'redux-persist/integration/react'

import Home from '../screens/Home';
import More from '../screens/More';
import AddFoam from '../components/Modal/AddFoam';
import Flatlist from '../components/Modal/Flatlist';
import ModalHeaderButton from "../components/ModalHeaderButton";

LogBox.ignoreAllLogs(); // ignore warning as getting splash screen warning due to expo

// Wrapper function for redux
function ReduxWrapper(Component) {
    return function inject(props) {
        const EnhancedComponent = () => (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...props}/>
                </PersistGate>
            </Provider>
        );
        return <EnhancedComponent />;
    };
}

// Register all the components we need to use in navigation with default options
export const registerComponents = () => {
    const activeTabColor = 'rgb(58,104,239)';
    const inActiveTabColor = 'rgb(198,198,198)';

    Navigation.registerComponent('Home', () => ReduxWrapper(Home));
    Navigation.registerComponent('ModalHeaderButton', () => ReduxWrapper(ModalHeaderButton));
    Navigation.registerComponent('More', () => ReduxWrapper(More));
    Navigation.registerComponent('AddFoam', () => ReduxWrapper(AddFoam));
    Navigation.registerComponent('Flatlist', () => ReduxWrapper(Flatlist));

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
        },
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

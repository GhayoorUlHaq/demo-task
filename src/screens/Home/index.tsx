import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Navigation} from "react-native-navigation";

interface HomeProps {
    componentId?: any;
}

const Home: React.FC<HomeProps> = (props) => {
    const {componentId} = props;

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            bottomTab: {
                text: 'Home',
                icon: require('../../../assets/icons/home.png'),
                fontSize: 10
            }
        })
    },[]);

    return (
        <View />
    );
};

export default Home;

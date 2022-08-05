import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import styles from "./styles";
import Button from "../../components/Button";
import {openModal} from '../../navigation';
import {Navigation} from "react-native-navigation";

const More = () => {

    useEffect(()=>{
        const listener = Navigation.events().registerModalDismissedListener(() => {
            StatusBar.setBarStyle('dark-content')
        })

        return ()=>{
            if(listener){
                listener.remove();
            }
        }
    },[])
    return (
        <View style={styles.container}>
            <Button
                disabled={false}
                onPress={openModal}
                title={'Open Modal'}
                containerStyles={styles.buttonContainerStyle}/>
        </View>
    );
};

More.options = {
    bottomTab: {
        text: 'More',
        icon: require('../../../assets/icons/more.png'),
        fontSize: 10
    }
}

export default More;

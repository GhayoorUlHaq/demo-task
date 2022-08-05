import React from 'react';
import {View} from 'react-native';
import styles from "./styles";
import Button from "../../components/Button";
import {openModal} from '../../navigation';

const More = () => {
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

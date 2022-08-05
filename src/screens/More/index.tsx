import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from "./styles";
import Button from "../../components/Button";
import {openModal} from '../../navigation';
import {Navigation} from "react-native-navigation";

interface MoreProps {
    componentId?: any;
}


const More: React.FC<MoreProps> = (props) => {
    const {componentId} = props;

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            bottomTab: {
                text: 'More',
                icon: require('../../../assets/icons/more.png'),
                fontSize: 10
            }
        })
    },[]);

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

export default More;

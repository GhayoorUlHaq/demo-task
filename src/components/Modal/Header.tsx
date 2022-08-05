import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

interface HeaderProps {
    add: boolean;
    navigate: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    const {add, navigate} = props;

    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                {
                    add ?
                        <TouchableOpacity onPress={()=> navigate()}>
                            <Image style={styles.backImage} source={require('../../../assets/icons/back.png')} />
                        </TouchableOpacity> : <></>
                }
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.title}>{add ? 'Adding data' : 'My Modal'}</Text>
            </View>

            <View style={styles.rightContainer}>
                {
                    !add ?
                        <TouchableOpacity onPress={()=> navigate()}>
                            <Text style={styles.rightText}>Add</Text>
                        </TouchableOpacity> : <></>
                }


            </View>
        </View>
    );
};

export default Header;

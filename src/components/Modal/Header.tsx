import React, {Dispatch, SetStateAction} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

interface HeaderProps {
    add: boolean;
    setAdd: Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = (props) => {
    const {add, setAdd} = props;

    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                {
                    add ?
                        <TouchableOpacity onPress={()=> setAdd(false)}>
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
                        <TouchableOpacity onPress={()=> setAdd(true)}>
                            <Text style={styles.rightText}>Add</Text>
                        </TouchableOpacity> : <></>
                }


            </View>
        </View>
    );
};

export default Header;

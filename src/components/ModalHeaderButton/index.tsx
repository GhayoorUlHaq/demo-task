import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ModalHeaderButtonProps {
    onClick: () => void;
    title: string;
}

const ModalHeaderButton: React.FC<ModalHeaderButtonProps> = (props) => {
    const {onClick, title} = props;
    return (
        <TouchableOpacity onPress={onClick}>
            <Text style={styles.rightText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ModalHeaderButton;

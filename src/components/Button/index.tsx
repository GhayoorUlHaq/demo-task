import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import styles from "./styles";

interface ButtonProps {
	onPress: () => void;
	title: string;
	disabled?: boolean;
	containerStyles?: any;
	textStyle?: any;
}

const Button: React.FC<ButtonProps>  = (props) => {
	const {onPress, title, containerStyles, disabled} = props;
	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={onPress}
			style={[styles.buttonContainer, containerStyles && containerStyles]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;

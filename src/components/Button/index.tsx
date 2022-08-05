import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import styles from "./styles";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

interface ButtonProps {
	onPress: () => void;
	title: string;
	disabled?: boolean;
	containerStyles?: any;
	textStyle?: any;
	enableVibration?: boolean
}

const options = {
	enableVibrateFallback: true,
	ignoreAndroidSystemSettings: false
};

const Button: React.FC<ButtonProps>  = (props) => {
	const {onPress, title, containerStyles, disabled, enableVibration = false} = props;
	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={()=> {
				onPress();
				if(enableVibration){
					ReactNativeHapticFeedback.trigger("impactHeavy", options);
				}
			}}
			style={[styles.buttonContainer, containerStyles && containerStyles]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;

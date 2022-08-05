import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Button from '../Button';
import {storeRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import Header from "./Header";

interface AddFoamProps {
    navigate: () => void;
}

const AddFoam: React.FC<AddFoamProps> = (props) => {
    const { navigate } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    // call action to store value to redux, move to list view in modal
    const handleDoneButton = () => {
        dispatch(storeRecord(value));
        setValue('');
        navigate();
    }

    return (
        <View style={styles.foamContainer}>
            <Header navigate={navigate} add={true} />
            <TextInput
                autoFocus={false}
                value={value}
                onChangeText={setValue}
                placeholder={'Add your text here'}
                multiline={true}
                style={styles.textInput} />
            <Button enableVibration={true} disabled={!(value.length>0)} title={'Done'} onPress={handleDoneButton} />
        </View>
    );
};

export default AddFoam;

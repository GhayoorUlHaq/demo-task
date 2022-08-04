import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Button from '../Button';
import {storeRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";

interface AddFoamProps {
    setAdd: Dispatch<SetStateAction<boolean>>
}

const AddFoam: React.FC<AddFoamProps> = (props) => {
    const {setAdd} = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    // call action to store value to redux, move to list view in modal
    const handleDoneButton = () => {
        dispatch(storeRecord(value));
        setValue('');
        setAdd(false);
    }

    return (
        <View style={styles.foamContainer}>
            <TextInput
                autoFocus={true}
                value={value}
                onChangeText={setValue}
                placeholder={'Add your text here'}
                multiline={true}
                style={styles.textInput} />
            <Button disabled={!(value.length>0)} title={'Done'} onPress={handleDoneButton} />
        </View>
    );
};

export default AddFoam;

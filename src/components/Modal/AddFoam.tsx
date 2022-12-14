import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Button from '../Button';
import {storeRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {Navigation} from "react-native-navigation";

interface AddFoamProps {
    componentId?: any;
}

const AddFoam: React.FC<AddFoamProps>  = (props) => {
    const {componentId} = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    // call action to store value to redux, move to list view in modal
    const handleDoneButton = () => {
        dispatch(storeRecord(value));
        setValue('');
        Navigation.pop(componentId)
    }

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            topBar: {
                animate: true,
                visible: true,
                title: {
                    text: 'Adding data'
                },
                backButton: {
                    color: '#9b9b9b',
                    showTitle: false,
                }
            }
        })
    },[]);

    return (
        <View style={styles.foamContainer}>
            <TextInput
                autoFocus={false}
                value={value}
                onChangeText={setValue}
                placeholder={'Add your text here'}
                multiline={true}
                style={styles.textInput} />
            <Button
                enableVibration={true}
                disabled={!(value.length>0)}
                title={'Done'}
                onPress={handleDoneButton}
            />
        </View>
    );
};

export default AddFoam;

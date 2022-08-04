import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from "./styles";
import Header from './Header';
import Flatlist from "./Flatlist";
import AddFoam from "./AddFoam";
import axios from "axios";
import {getUsers} from "../../utils/endPoints";
import {useDispatch, useSelector} from "react-redux";
import {Store} from '../../redux/StoreType';
import {storeResponse} from "../../redux/actions";

const Modal: React.FC = () => {
    const dispatch = useDispatch();
    const {dataList} = useSelector((state: Store) => state.app);
    const [add, setAdd] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // fetch data if not found in redux
    const fetchUsersData = async () => {
        if(!dataList || dataList.length < 1){
            setLoading(true);
            const res = await axios.get(getUsers);
            if(res.data?.length  > 0){
                dispatch(storeResponse(res.data))
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsersData();
    },[])

    return (
            <View style={styles.container}>
                <Header add={add} setAdd={setAdd} />
                {
                    add ? <AddFoam setAdd={setAdd} /> : <Flatlist loading={loading} />
                }
            </View>
    );
};

export default Modal;

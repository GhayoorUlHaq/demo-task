import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import styles from "./styles";
import {Store} from '../../redux/StoreType';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getUsers} from "../../utils/endPoints";
import {storeResponse} from "../../redux/actions";
import Header from "./Header";

interface FlatlistProps {
    navigate: () => void;
}

const Flatlist: React.FC<FlatlistProps> = (props) => {
    const { navigate } = props;
    const dispatch = useDispatch();
    const {dataList} = useSelector((state: Store) => state.app);
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

    const renderItem = ({item}) => {
        return (
            <View key={item.id} style={styles.flatListItemContainer}>
                <Text numberOfLines={2} style={styles.itemText}>{item.name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.flatListContainer}>
            <Header navigate={navigate} add={false} />
            <FlatList
                data={dataList}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainerStyle}
            />
            {
                dataList.length < 1 &&
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                    {
                        loading ? <ActivityIndicator size={'small'} color={'blue'} /> : <Text>No Data Found</Text>
                    }

                </View>
            }
        </View>
    );
};

export default Flatlist;

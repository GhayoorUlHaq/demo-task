import React from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import styles from "./styles";
import {Store} from '../../redux/StoreType';
import {useSelector} from "react-redux";

interface FlatlistProps {
    loading: boolean;
}
const Flatlist: React.FC<FlatlistProps> = (props) => {
    const {loading} = props;
    const {dataList} = useSelector((state: Store) => state.app);

    const renderItem = ({item}) => {
        return (
            <View key={item.id} style={styles.flatListItemContainer}>
                <Text numberOfLines={2} style={styles.itemText}>{item.name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.flatListContainer}>
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

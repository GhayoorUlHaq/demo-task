import React from 'react';
import {View, Dimensions} from 'react-native';
import styles from "./styles";
import Flatlist from "./Flatlist";
import AddFoam from "./AddFoam";
import { TabView } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

const KEYS = {
    list: 'list',
    add: 'add'
}

// define scenes
const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
        case KEYS.list:
            return <Flatlist navigate={() => jumpTo(KEYS.add)} />
        case KEYS.add:
            return <AddFoam navigate={() => jumpTo(KEYS.list)} />;
    }
};

const Modal: React.FC = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: KEYS.list, title: 'List' },
        { key: KEYS.add, title: 'Add' },
    ]);

    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={styles.container}
                renderTabBar={()=> <></>}
                swipeEnabled={false}
            />
        </View>
    );
};

export default Modal;

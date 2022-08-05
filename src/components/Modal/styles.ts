import {StyleSheet} from "react-native";
import {shadow} from '../../utils';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgb(249,249,249)',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 18
    },
    leftContainer: {
        alignItems: 'flex-start',
        width: '33%',
        marginTop: 5
    },
    centerContainer: {
        width: '33%',
        alignItems: 'center'
    },
    rightContainer: {
        width: '33%',
        alignItems: 'flex-end'
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
    },
    rightText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgb(58,104,239)',
    },
    backImage: {
        tintColor: '#9b9b9b',
        height: 15,
        width: 15
    },
    flatListContainer: {
        flex:1,
        paddingHorizontal: 15
    },
    flatListItemContainer: {
        paddingHorizontal: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '98%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        alignSelf: 'center',
        ...shadow(),
    },
    flatListContainerStyle: {
      paddingBottom: 50
    },
    itemText: {
        fontWeight: '600',
        fontSize: 18,
    },
    foamContainer: {
        flex:1,
        alignItems: 'center'
    },
    textInput: {
        marginTop: 75,
        paddingTop: 25,
        paddingBottom: 20,
        paddingHorizontal: 20,
        margin: 0,
        backgroundColor: 'white',
        width: '90%',
        marginBottom: 50,
        height: 200,
        borderRadius: 15,
        ...shadow(),
    }
})

export default styles;

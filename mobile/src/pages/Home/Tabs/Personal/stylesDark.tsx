import  {StyleSheet} from 'react-native'

const stylesDark = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1C1C1C'
    },

    pickerSelectCityContainer: {
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        //  backgroundColor: '#f3f'
    },

    calendarInfoHeader: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },


    containerStatus: {
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    containerDataStatus: {
        flexDirection: 'row',
        padding: 10,
        paddingRight: 90,
        justifyContent: 'center',

    },

    status: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 5
    },

    title: {

        fontFamily: 'Inter_500Medium',
        fontSize: 21,
        color: '#fff' 
    },
})

export default stylesDark
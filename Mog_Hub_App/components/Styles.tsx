import { StyleSheet } from "react-native"; 


const styles = StyleSheet.create({

    mainTxt : {
        paddingTop: 10,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },

    slogan: {
        color: 'orange',
        fontSize: 15,
        textAlign: 'center'
    },

    mogHubLogo: {
        height: 250,
        width: "auto",
        alignSelf: "stretch",
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputFlex: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20,
    },

    enterTxt: {
        fontWeight: 'bold',
    },

    userInputTxt: {
        borderBottomWidth: 1,
        paddingVertical: 0,
        minWidth: 100,
    }, 

    radioContainer: {
        flex: 0,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        marginBottom: 20,
    },

    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

    radioBtn: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    radioLabel: {
        marginLeft: 5,
        fontSize: 15,
        color: 'black'
    },

    inputContainer: {
        // Fills up the empty space (white space)
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ab5f08'
    },

    petTxt: {
        fontSize: 15,
        marginVertical: 5,
        borderBlockColor: 'black',
        borderBottomWidth: 1,

    },

    petContainer: {
        flex: 5,
    },

    // Styling the booking page
    bookingsContainer: {
        flex: 1,
        backgroundColor: '#f9d77e',
    },

    stepContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    stepNumber: {
        height: 60,
        width: 60,
        alignSelf: 'center',
        marginBottom:10,
    },

    stepTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    stepDesc: {
        fontSize: 12,
    },

    // Gallery page images styling
    galleryItem: {
        marginBottom: 10,
        marginTop: 10,
    },

    galleryImage: {
        width: 20,
        height: 200,
        alignSelf: 'center',
        aspectRatio: 1,
    },

    galleryName: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 4,
    },
});

export default styles;
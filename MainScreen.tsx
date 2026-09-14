function MainScreen(){

    const [petName, setPetName] = useState('');

    return{
       <View>
        <SafeAreaView>
            <ScrollView>
                <Image style={styles.mogHubLogo} 
                source={('../_images/cat-logo.jpg')}/>
                <Text style={StyleSheet.mainTxt}>Mog Hub</Text>
                <Text style={StyleSheet.slogan}>P u r r f e c t  C o m p a n i o n s</Text>

                <View style={StyleSheet.inputFlex}>
                    <Text style={StyleSheet.enterTxt}>Name Your Pet:</Text>
                    <TextInput style={StyleSheet.userInputTxt}
                    placeholder="Mog"
                    value={petName}
                    onChangeText={newText => setPetName(newText)}/>
                </View>    
                
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView> 
       </View> 
    }
}

const styles = StyleSheet.create({
    mainTxt : {
        paddingTop: 50,
        color: 'green',
        fontWeight: 'bold',
        fontSize: '30',
        textAlign: 'center'
    },

    slogan: {
        color: 'orange',
        fontSize: 20,
        textAlign: 'center'
    },

    mogHubLogo: {
        height: 350,
        width: 350,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },


})
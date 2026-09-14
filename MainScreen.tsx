import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import styles from '../components/styles';

function MainScreen(){

    const [petName, setPetName] = useState('');

    return{
       <View>
        <SafeAreaView>
            <ScrollView>
                <Image style={styles.mogHubLogo} 
                source={require('../_images/cat-logo.jpg')}/>

                <Text style={styles.mainTxt}>Mog Hub</Text>
                <Text style={styles.slogan}>P u r r f e c t  C o m p a n i o n s</Text>

                <View style={styles.inputFlex}>
                    <Text style={styles.enterTxt}>Name Your Pet:</Text>
                    <TextInput style={styles.userInputTxt}
                    placeholder="Mog"
                    value={petName}
                    onChangeText={newText => setPetName(newText)}/>
                </View>    
                
                <StatusBar style="auto"/>

            </ScrollView>
        </SafeAreaView> 
       </View> 
    };
}

export default MainScreen;


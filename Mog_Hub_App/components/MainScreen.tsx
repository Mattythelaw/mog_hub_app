import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ScrollView, Image, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import styles from '../components/Styles';

function MainScreen(){

    const [petName, setPetName] = useState('');
    const [ selectedValue, setSelectedValue ] = useState('0');

    return(
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
                    onChangeText={newText => setPetName(newText)}
                    />
                </View>    
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                        Select your Pet:
                        </Text>

                        <View style={styles.radioContainer}>
                            <View style={styles.radioGroup}>
                                {/* radio button for cat */}
                                <View style={styles.radioBtn}>

                                </View>
                                {/* radio button for dog */}
                                 <View style={styles.radioBtn}>

                                </View>
                                {/* radio button for other */}
                                 <View style={styles.radioBtn}>

                                </View>

                       </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView> 
       </View> 
    );
}

export default MainScreen;


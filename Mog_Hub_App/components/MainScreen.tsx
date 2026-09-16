import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ScrollView, Image, Text, TextInput } from 'react-native';
// useState = how a components rememebers things
import { useState } from 'react';
// A ready made circular button that you tap on
import { RadioButton } from 'react-native-paper';
import styles from '../components/Styles';

function MainScreen(){

    // useState is for two things here:
    // petName = the value right now 
    // setPetName = the ONLY way you should change it
    // The started value is '' which is an empty string = empty text box
    const [petName, setPetName] = useState('');

    // This remembers which radio button is picked. '0' means "none picked yet"
    // since the buttons are are '1', '2', '3'
    const [ selectedValue, setSelectedValue ] = useState('0');
    const [pet, setPet] = useState<string[]> ([]);

    const renderPets = () => {
        const arrDisplay = [];

        for(let i=0; i < pet.length; i++){
            arrDisplay.push(
                <View key={i} style={styles.inputContainer}>
                    <Text style={styles.petTxt}>
                        {pet[i]}
                    </Text>
                </View>
            )

        }
    }

    return(
       <View>
        {/*  */}
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
                                    <RadioButton.Android
                                        value="1"
                                        status={selectedValue == "1" ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('1') }
                                        color="orange"
                                    />
                                    <Text style={styles.radioLabel}>Cat</Text>
                                </View>

                                {/* radio button for dog */}
                                 <View style={styles.radioBtn}>
                                    <RadioButton.Android
                                        value="2"
                                        status={selectedValue == "2" ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('2') }
                                        color="orange"
                                    />
                                    <Text  style={styles.radioLabel}>Dog</Text>

                                </View>

                                {/* radio button for other */}
                                 <View style={styles.radioBtn}>
                                    <RadioButton.Android
                                        value="3"
                                        status={selectedValue == "3" ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('3') }
                                        color="orange"
                                    />
                                    <Text  style={styles.radioLabel}>Other</Text>

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


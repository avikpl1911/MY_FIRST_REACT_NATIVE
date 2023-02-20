import {TextInput,View,StyleSheet,Button, Modal,Image} from 'react-native'
import { useState } from 'react';



function GoalInput ({onAddGoal,visible,onCancel}){
const [enteredGoalText,setEnteredGoalText] = useState('');

function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
}

function addGoalHandler(){
   onAddGoal(enteredGoalText);
   setEnteredGoalText('');
   onCancel();
}



    return(
        <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image style={styles.Image} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        placeholder='Your Course Goal'
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={onCancel} color="#DE3163" />
        </View>
        </View>
      </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        padding: 16,
        justifyContent:'center',
        alignItems:'center',
        
        
        backgroundColor: '#311b6b'
      },
      Image:{
       width: 100,
       height: 100,
       margin: 20
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff' ,
        borderRadius: 6,
        width:'100%',
        color: '#120438',
        padding: 12
        
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop: 16
      },
      button:{
        width: 100,
        marginHorizontal: 8 
      }
})

export default GoalInput;
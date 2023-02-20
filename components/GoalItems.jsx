import {Text,View,StyleSheet, Pressable, Modal} from 'react-native'


function GoalItem ({text,onDeleteItem,id}) {
   



return(

    <View key={id} style={styles.goalItem}>
<Pressable android_ripple={{color:'#dddddd'}} onPress={onDeleteItem.bind(this,id)}
style={({pressed})=>pressed && styles.pressedItem}
>
    
    <Text
    style={styles.goalText}
    >{text}
    </Text>
    
</Pressable>
</View>

    ); 

}

const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius: 6,
        backgroundColor: '#5e05cc',
      },
      pressedItem:{
        opacity: 0.5
      },
      goalText:{
        color:'white',
        padding: 8
      }
})

export default GoalItem;
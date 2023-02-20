import { useState } from 'react';
import { StyleSheet,View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const [listGoal,setListGoal] = useState([]);
  
  const endAddGoalHandler = ()=>{
    setModalIsVisibal(false)
  }
 
  const addGoalHandler = (enteredGoalText)=>{
   
   setListGoal(currentlistGoal=>[...currentlistGoal,
    {text: enteredGoalText , key: Math.random().key}])
  }

  function deleteGoalHandler (id){
    setListGoal(currentlistGoal=> {
      return currentlistGoal.filter((goal)=>goal.id !== id);
    })
  }

const [modalIsVisible,setModalIsVisibal]=useState(false)

function startAddGoalHandler(){
  setModalIsVisibal(true)
}
  

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer} >
      <Button title='Add New Goal' color="#5e05cc" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList data={listGoal} 
      style={{marginTop:20}}
      renderItem={
        
        (item)=>{
          
          return(<GoalItem text={item.item.text} id={item.item.key} onDeleteItem={deleteGoalHandler}/>);
        }
      }
      
      alwaysBounceVertical={false} >
        
      </FlatList>
      </View>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    
    paddingTop: 50,
    paddingHorizontal: 16,
    flex:1,
    
  },
 
  goalsContainer:{
    flex:5
  }
  
});

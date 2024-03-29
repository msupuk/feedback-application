import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ButtonContainer from '../ButtonContainer';
import Slider from '@react-native-community/slider';
import { CampaignContext } from '../contexts/CampaignContext'

const ScaleQuestionScreen = ({ question,navigation }) => {
  const [answer, setAnswer] = useState({});
  const [state, setState] = useState(0)

  return (
    <View>
      <View style={styles.question}>
        <Text>{question.QuestionText}</Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          onValueChange={(value) => setState(value)}
          value={state}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View style={styles1.question}>
          <Text>0</Text>
          <Text> {state.toFixed(2)}</Text>
          <Text>1</Text>
        </View>
      </View>
      <ButtonContainer answer={{ "QuestionId": question.QuestionId, "AnswerId": -1, "CustomAnswer": state }} navigation={navigation}/>
    </View>
  )
};

export default ScaleQuestionScreen;

const styles = StyleSheet.create({
  question: {
    height: '90%',
    justifyContent: 'center'
  },
});
const styles1 = StyleSheet.create({
  question: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
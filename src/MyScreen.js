import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const MyScreen = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setStatus('timeout is called');
    }, 1000);
  }, []);

  return (
    <View>
      <Text testID="myText">{status}</Text>
    </View>
  );
};

export default MyScreen;

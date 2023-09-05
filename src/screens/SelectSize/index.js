import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function SelectSize({ route, navigation }) {
  const { player1Symbol, player1Color, player2Color } = route.params;

  const [boardSize, setBoardSize] = useState(3);

  const handleProceed = () => {
    navigation.navigate('Game', {
        player1Symbol: player1Symbol,
        player1Color: player1Color,
        player2Color: player2Color,
        boardSize: boardSize,
      });
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 400 }}>
      <Text>Escolha o tamanho do tabuleiro</Text>

      <RadioButton.Group
        onValueChange={(value) => setBoardSize(value)}
        value={boardSize}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="3" />
          <Text>3 x 3</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="4" />
          <Text>4 x 4</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="5" />
          <Text>5 x 5</Text>
        </View>
      </RadioButton.Group>

      <Button title="Começar!" onPress={handleProceed} />
    </View>
  );
}

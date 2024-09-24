import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Button title="Teste" mb="s10" preset="primary" disabled />
        <Button title="Teste" preset="outline" loading />
        <Icon name="arrowRight" />
        <Icon name="eyeOn" color="buttonPrimary" size={50} />
        <TextInput
          label="Senha"
          errorMessage="teste"
          rightComponent={<Icon name="arrowLeft" />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

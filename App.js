import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './App/Utils/Navigation'
import { Provider } from 'react-redux';
import { store, persistor } from './App/Redux/reduxConfig';
import { PersistGate } from 'redux-persist/lib/integration/react';



const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
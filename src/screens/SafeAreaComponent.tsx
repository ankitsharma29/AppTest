import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './Navigation';

interface SafeAreaComponentProps {
  edges: Edge[];
}

const SafeAreaComponent = (props: SafeAreaComponentProps) => {
  SplashScreen.hide();
  const {edges} = props;


  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView edges={edges} style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeAreaComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

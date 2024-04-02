
// Import React and Component
import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import StyleLoader from '../Styles/StyleLoader';

const styles = StyleLoader;

const Loader = (props) => {
  // call
  const Yes = true;

  const {loading, ...attributes} = props;
  //even
  const onRequestClose_Modal = () => {console.log('close modal');}
  //list
  const ListActivityIndicator = {
    color:"#000000",
    size:"large"
  }

  return (
    <Modal
      transparent={Yes}
      animationType={'none'}
      visible={loading}
      onRequestClose={onRequestClose_Modal}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={Yes}
            color={ListActivityIndicator.color}
            size={ListActivityIndicator.size}
            style={styles.activityIndicator}/>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;



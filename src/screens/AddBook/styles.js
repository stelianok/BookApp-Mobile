import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 50,
  },
  formView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  textInput: {
    marginTop: 50,
    fontSize: 24,
  },
  button: {
    backgroundColor: '#3f51b5',
    borderRadius: 100,

    marginTop: 25,

    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    alignSelf: 'center',

    
  }
});
export default styles;

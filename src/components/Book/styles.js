import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEED',

    marginHorizontal: 20,
    marginVertical: 20,

    padding: 20,

    borderRadius: 5,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 36,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  author: {
    color: 'gray',
    fontSize: 24,

    alignSelf: 'center',
  },
  authorView: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});
export default styles;

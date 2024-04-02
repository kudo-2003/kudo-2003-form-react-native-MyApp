import { StyleSheet } from 'react-native';

const StyleLogin = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5DEB3',
        alignContent: 'center',
      },
      SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
      },
      buttonStyle: {
        backgroundColor: '#FFA500',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#FFA500',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#FFA500',
      },
      registerTextStyle: {
        color: '#FFA500',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
      },
      errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
      imageLogin:{width: 200,height: 200, },
      centerlogin:{alignItems: 'center'},
      ScrollViewLogin: {flex: 1, justifyContent: 'center', alignContent: 'center',},
});

export default StyleLogin;
import { StyleSheet } from "react-native";

const StyleRegister = StyleSheet.create({
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
        marginBottom: 20,
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
      errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
      successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
      },
      backgroundColorPage: {flex: 1, backgroundColor: '#F5DEB3'},
      centerImage: {alignItems: 'center'},
      imageSize:{width: 200,height: 200,},
      ScrollViewContentContainerStyle: {justifyContent: 'center',alignContent: 'center',},
});

export default StyleRegister;
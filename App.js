import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'red',
          padding: 30,
          borderRadius: 10,
        }}
      >
        <Text>Button Start Date</Text>
        <View
          style={{
            position: 'absolute',
            top: -124,
            right: 30,




          }}
        >
          <Shadow startColor='#b3b3b3'  >
            <View style={{
              borderColor: 'black',
              borderWidth: 3,
              borderRadius: 10,
              width: Dimensions.get('screen').width / 2,
              padding: 16,
              zIndex: 10,

            }}>
              <Text style={{ color: 'black', lineHeight: 24, letterSpacing: 0.5 }}>
                cmmmmm boxx shadowwwwwwwwwwww
              </Text>

              <View style={{
                position: 'absolute',
                bottom: -46,
                right: 20,
                zIndex: 10,
                borderTopWidth: 36,
                borderRightWidth: 10,
                borderBottomWidth: 14,
                borderLeftWidth: 10,
                borderStyle: 'solid',
                width:0,
                height:0,
                borderTopColor: 'white',
                borderRightColor: 'transparent',
                borderLeftColor: 'transparent',
                borderBottomColor: 'transparent',
                
              }}>
              </View>
              <View style={{
                position: 'absolute',
                bottom: -46,
                right: 20,
                zIndex: 5,
                borderTopWidth: 34,
                borderRightWidth: 10,
                borderBottomWidth: 10,
                borderLeftWidth: 12,
                borderStyle: 'solid',
                width:0,
                height:0,
                borderTopColor: 'black',
                borderRightColor: 'transparent',
                borderLeftColor: 'transparent',
                borderBottomColor: 'transparent',
                
              }}>
              </View>
               <View style={{
                position: 'absolute',
                bottom: -46,
                right: 17,
                zIndex: 5,
                borderTopWidth: 34,
                borderRightWidth:13,
                borderBottomWidth: 10,
                borderLeftWidth: 14,
                borderStyle: 'solid',
                width:0,
                height:0,
                borderTopColor: 'black',
                borderRightColor: 'transparent',
                borderLeftColor: 'transparent',
                borderBottomColor: 'transparent',
                
              }}>
              </View>

              




            </View>



          </Shadow>

        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

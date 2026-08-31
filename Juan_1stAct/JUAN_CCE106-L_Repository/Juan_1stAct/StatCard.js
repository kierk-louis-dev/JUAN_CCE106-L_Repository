import { StyleSheet, Text, View } from "react-native"


export default function StatCard(props){
    return(
    <View style={[styles.card,{ backgroundColor: props.bgcolor}]}>
       <Text style={styles.title}>{props.title} </Text>
       <Text style={styles.value}>{props.value} </Text>  
    </View>
    )
  }

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 12,
        marginVertical: 10,
        width: '100%',
        color: '#05eeff',

    },
    title:{
        fontSize: 15,
        color: '#cc00ff',
        fontWeight: 600,
    },
    value:{
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 5,
    } 
    

})
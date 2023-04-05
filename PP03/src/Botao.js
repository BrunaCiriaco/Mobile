import React from 'react'
import { Button, StyleSheet, View ,TouchableOpacity, Text} from 'react-native'


//você pode acessar o Pressable componente. 
//Pressable vamos personalizar totalmente a aparência de um elemento pressionável ( como um botão ),
//além de nos permitir personalizar seu comportamento. 
export default comp => {  
     return(
          <View style={styles.fundo}>

           <TouchableOpacity  onPress={function(){console.warn('Clicou em / ')}}>
              <Text style={styles.botao}> / </Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={function(){console.warn('Clicou em + ')}}>
              <Text style={styles.botao}> + </Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={function(){console.warn('Clicou em * ')}}>
              <Text style={styles.botao}> * </Text>
            </TouchableOpacity>

        
            <Button 
                style={styles.a}
                title='9'
                onPress={function(){console.warn('Clicou no 9')}}
            />
             <Button
                style={styles.a}
                title='8'
                onPress={function(){console.warn('Clicou no 8')}}
            />
             <Button
                style={styles.a}
                title='7'
                onPress={function(){console.warn('Clicou no 7 ')}}
            />
             <Button
                style={styles.a}
                title='6'
                onPress={function(){console.warn('Clicou no 6')}}
            />
             <Button
                style={styles.a}
                title='5'
                onPress={function(){console.warn('Clicou no 5')}}
            />
             <Button
                style={styles.a}
                title='4'
                onPress={function(){console.warn('Clicou no 4 ')}}
            />
             <Button
                style={styles.a}
                title='3'
                onPress={function(){console.warn('Clicou no 3')}}
            />
             <Button
                style={styles.a}
                title='2'
                onPress={function(){console.warn('Clicou no 2 ')}}
            />
             <Button
                style={styles.a}
                title='1'
                onPress={function(){console.warn('Clicou no 1 ')}}
            />
            
            </View>
    )
}
const styles = StyleSheet.create({
    fundo:{
        flexDirection:'row',
        flexWrap: 'wrap',
        height:200,
        width:200,
        backgroundColor:'black',
        margin:30,
       
    },
    botao:{
        margin:15,
        textAlign:'center',
        width:35,
        height:35,
        fontSize:20,
        backgroundColor:'#FFFF',
        borderRadius: 200
    },
    a:{
        margin:15,
        textAlign:'center',
        width:35,
        height:35,
        fontSize:20,
        backgroundColor:'#FFFF',
        borderRadius: 200
    }
})


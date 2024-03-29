import React, { useState } from 'react'
import {View , Text, FlatList, TouchableOpacity ,StyleSheet} from 'react-native'
import Color from '../../Shared/Color'
function Categorytextslider({selectCategory}) {
const [active, setActive] = useState(1)
  const categoryList =[
    {
      id:1,
      name :'Latest'

    },
    {
      id:2,
      name :'World'

    },
    {
      id:3,
      name :'Businees'

    },
    {
      id:4,
      name :'Sports'

    },
    {
      id:5,
      name :'Life'

    },
    {
      id:6,
      name :'Movie'

    }
  ]
  const  onCategoryClick=(id)=>{
    setActive(id)
  }

  return (

   


<View style ={{marginTop:10}}>
    <FlatList 
    data={categoryList}
    horizontal
    showsHorizontalScrollIndicator={false}
renderItem={({item}) =>(
  <TouchableOpacity onPress={()=>{onCategoryClick(item.id);
 selectCategory(item.name) }} >
<Text style ={ item.id==active?  styles.selectText 
  :styles.unselectText}> {item.name} </Text>
  </TouchableOpacity>
)}    
    />

</View> 

)
}

const styles =  StyleSheet.create({
  unselectText:{
marginRight:15,fontSize:20,fontWeight:'800',color:Color.gray
},
selectText:{
  marginRight:15,fontSize:20,fontWeight:'900',color:Color.primary,
  },
})



export default Categorytextslider
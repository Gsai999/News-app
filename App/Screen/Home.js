import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet ,ScrollView, ActivityIndicator, Dimensions} from 'react-native'
import Categorytextslider from '../Component/Home/Categorytextslider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import Topheadlineslider from '../Component/Home/Topheadlineslider';
import Headlinelist from '../Component/Headlinelist';
import GlobalApi from '../Services/GlobalApi';

function Home() {
    const [newsList, setNewslist] = useState([]);
const [loading, setLoading]=useState(true)


    useEffect(() => {
     // getTopHeadline();
      getNewsByCategory('latest');
    }, [])
  
    const getNewsByCategory = async (category) => {
        setLoading(true);
      const result = (await GlobalApi.getByCategory(category)).data;
      setNewslist(result.articles)
      setLoading(false)
    }
    return (
        <ScrollView style ={{backgroundColor:Color.white}}>
        

        <View style ={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-between',}}>  
            <Text style={styles.appName}>
                Google News
            </Text>
            <Ionicons name="notifications-outline" size={24} color= "black"/>
        
        </View>
        
                {/* category list  */}

        <Categorytextslider  selectCategory={(category)=>getNewsByCategory(category)} />
        {loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}}   size={'large'} color={Color.primary} />:
        <View>

        {/*top head line slider */}
         <Topheadlineslider newsList={newsList} />

                 {/* headline list */}
                 <Headlinelist  newsList={newsList} />
       </View>
}
       
       
       
        </ScrollView>
        
        
        
        )
}


const styles = StyleSheet.create({
    appName: {
        fontSize: 25, fontWeight: 'bold', color: Color.primary
    }

})

export default Home
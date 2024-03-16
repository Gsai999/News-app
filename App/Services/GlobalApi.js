import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
}) 

const apiKey='?country=us&apiKey=2128b448bc2844b2a922e49e7566fcc5'

const getTopHeadline=api.get('/top-headlines'+apiKey)
//     /top-headlines?country=us&apiKey=2128b448bc2844b2a922e49e7566fcc5  

const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=2128b448bc2844b2a922e49e7566fcc5")
export default {
    getTopHeadline,
    getByCategory
}
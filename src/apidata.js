import axios from 'axios';
const api = 'https://desolate-river-28338.herokuapp.com/api/backend/';

class DataService {
    
    // get all articles
    static getPosts(){
        return new Promise((resolve, reject) => {
           axios.get(api)
           .then(post => {
               const data = post.data;
               resolve(
                   data.map(post => ({
                     ...post,
                     createdAt:new Date(post.createdAt)
                    
                   }))
               )
           })
           .catch(err=> {
              reject(err);
           })
        })
    }


    // get single
    static getSingle(id){
        return axios.get(api+`${id}`);
    }
}


export default DataService;
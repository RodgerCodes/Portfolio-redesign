import axios from 'axios';
const api = 'https://rodgercodes2.herokuapp.com/api/backend/';
// const api = 'http://localhost:5000/api/backend'

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
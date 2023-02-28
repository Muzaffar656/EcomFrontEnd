import axios from 'axios'


class User {
    create(formData){
        const host = 'http://localhost:5000/api/createProduct'
        const config = {
            headers:{
                "Content-Type":"multipart/form-data",
            }
        }
        return axios.post(host,formData,config)
    }
    getUsers(){
        const url = 'http://localhost:5000/api/products';
        return axios.get(url)
    }
}

const Users = new User()
export default Users
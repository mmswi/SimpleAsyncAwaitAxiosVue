import axios from 'axios'

let allUsers = [{'body': 'something'}, {'body': 'something else'}]
async function getUsers () {
//    const myUsers = await axios.get('https://jsonplaceholder.typicode.com/posts')
const myUsers = await axios.get('/api/users')

console.log(myUsers.data)
this.users = myUsers.data
}
export default {
name: 'hello',
data () {
return {
msg: 'Welcome to Your Vue.js App',
users: allUsers
}
},
//    async created () {
created () {
//      allUsers = await axios.get('https://jsonplaceholder.typicode.com/posts')
//      console.log('async stuff')
//      this.users = allUsers.data
//      getUsers.bind(this)()
getUsers.call(this)
}
}
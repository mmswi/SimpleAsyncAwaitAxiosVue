// vue v2.x
import axios from 'axios'

let allUsers = [{'body': 'something'}, {'body': 'something else'}]
async function getUsers () {
    const myUsers = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.users = myUsers.data //calling this from outside the export, you need to bind it to the exported module's this
}
export default {
    name: 'hello',
    data () {
        return {
            msg: 'The hello component',
            users: allUsers
        }
    },
    // example A
    created () {
        // getUsers.bind(this)() - uglier
        getUsers.call(this)
    }


    // example B - with the async in front of the created keyword
    /* async created () {
        allUsers = await axios.get('https://jsonplaceholder.typicode.com/posts') - this is messyer
        this.users = allUsers.data
     } */


    // example C - calling the get from the methods - in this case, no need to declare the function outside of the module
    /*
    created () {
        this.getUsers() - from methods
    },
    methods: {
        getUsers: async function() {
            allUsers = await axios.get('https://jsonplaceholder.typicode.com/posts')
            this.users = allUsers.data
        }
    }
     */
}
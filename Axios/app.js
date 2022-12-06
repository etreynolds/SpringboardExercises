// async function getData() {
//     const data = await axios.get('https://www.swapi.tech/api/people');
//     console.log(data);
// }

// prints out first page of people names from Star Wars API
// async function getData() {
//     const data = await axios.get('https://www.swapi.tech/api/people');
//     for (let people of data.data.results) {
//         console.log(people.name);
//     }
// }

// sample axios post request
// async function createUser() {
//     const res = await axios.post('https://reqres.in/api/users', { username: 'ButtersTheChicken', email: 'butters@gmail.com', age: 2 });
//     console.log(res);
// }

// gets list of users from Hack or Snooze API
// async function getUsers() {
//     const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users');
//     console.log(res);
// }
// this will throw a 401 error because authorization is required

// signup logic from Hack or Snooze API
async function signUp(name, username, password) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } });
    console.log(res);
}



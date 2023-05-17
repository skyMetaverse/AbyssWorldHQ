require('dotenv').config();
const axios = require('axios');

let url = `https://ca.abyssworld.games/api/user/checkin`;
let checkin = async(token) => {
    let config = {
        headers: {
            "authorization": `Bearer ${token}`
        }
    };
    let payload = {};
    let res = await axios.post(url, payload, config);
    console.log(res.data);
    await getCheckinResults(token);
};

let getCheckinResults = async(token) => {
    let config = {
        headers: {
            "authorization": `Bearer ${token}`
        }
    };
    let res = await axios.get(url, config);
    console.log(res.data);
};

let main = async() => {
    let tokens = process.env.TOKEN.split(',');
    for(let token of tokens){
        await checkin(token);
    };
};
main();
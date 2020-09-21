import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// Set DEMO to 1 for development, 0 for production
let api_key = process.env.API_KEY;
let base = process.env.DEMO
    ? "https://api-football.com/demo/v2"
    : "https://v2.api-football.com/";

if (process.env.DEMO) {
    console.log("!!! --- USING DEMO API --- !!!");
} else {
    console.log("!!!!!! ------ USING PRODUCTION API ------ !!!!!!");
}

const instance = axios.create({
    baseURL: base,
    headers: { "X-RapidAPI-Key": api_key },
});

const queryAPI = async (endpoint) => {
    try {
        let result = await instance.get(`${endpoint}`);
        //console.log(`Fetching data from endpoint: ${endpoint}`);
        //console.log(result);
        return result.data;
    } catch (e) {
        console.error(`Could not retrieve data from endpoint ${endpoint}`);
        console.error(e.message);
        return false;
    }
    return false;
};

// GET : https://v2.api-football.com/leagues/type/league/England/{year}
const getPremierLeagueID = async (year) => {
    let result = await queryAPI(`leagues/type/league/England/${year}`);
    if (result != false) {
        let leagues = result["api"]["leagues"];
        leagues.forEach((league) => {
            if (league["name"] === "Premier League") {
                console.log(`Retrieved PL league_id: ${league["league_id"]}`);
                return league["league_id"];
            }
        });
    }
};

getPremierLeagueID(2019);

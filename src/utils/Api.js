const API_URL = "https://worldcup.sfg.io/matches/country";

export const getGames = (country) => fetch(`${API_URL}?fifa_code=${country}`)
    .then(res => res.json());



export const getGames = (country) => ({
    type: 'GET_GAMES',
    country
});

export const getSorted = (items) => ({
    type: 'SORT_TABLE',
    items
});
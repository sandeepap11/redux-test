const reducer = (state = {}, action) => {

  const { type, games, items } = action;

  switch (type) {


    case 'GET_GAMES_SUCCESS':
      console.log("Reducer", games);

      return { ...state, games };

      case 'SORT_TABLE_SUCCESS':
      console.log("Reducer", games);

      return { ...state, games };

    default:
      return state;
  }
};
export default reducer;
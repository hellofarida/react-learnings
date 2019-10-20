/* reducers */

const { BURPED } = require('./actions');

function burps(state = [], action) {
  switch (action.type) {
    case BURPED:
      return Object.assign({}, state, {
        voteScore: ( state.voteScore ) ? state.voteScore + 1 : 1,
        voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1
      });
    default:
      return state;
  }
}

module.exports = burps

export const actions = {
    addVote({commit}, voteDetails) {
        console.log('AAAAAAAAAAAAaa', voteDetails)
        commit('ADD_YOUR_VOTE', voteDetails)
    }
}
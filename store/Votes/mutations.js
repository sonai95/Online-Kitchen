export const mutations = {
    ADD_YOUR_VOTE(state, userDetails) {
        state.voteDetails.yourVote = userDetails.name
    }
}
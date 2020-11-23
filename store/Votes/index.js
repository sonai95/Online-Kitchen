import { mutations } from './mutations.js'
import { actions } from './actions'
import { getters } from './getters'

const users = {
    state: {
        voteDetails: {
            yourVote: ''
        }
    },
    mutations,
    actions,
    getters
}
export default users
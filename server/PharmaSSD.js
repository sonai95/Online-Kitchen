/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { mapState, mapGetters } from 'vuex'
import * as axios from 'axios'
export default {
  /**
   * For Common Login
   * @param {*} username
   * @param {*} password
   */
  getKitchenDetails (pincode) {
    var url = 'http://localhost:5000/getKitchenDetails'
    console.log('RRRRRRRRRRRr', pincode)
    return axios.post(url,
      { 'pincode': pincode },
    { headers: {
        'Content-Type': 'application/json'
    }
    })
  },
  getSearchedKitchenDetails (searchKey) {
    var url = 'http://localhost:5000/getSearchedKitchenDetails'
    return axios.post(url,
      { 'searchKey': searchKey },
    { headers: {
        'Content-Type': 'application/json'
    }
    })
  },
  getAllDishes (restaurant) {
    var url = 'http://localhost:5000/getAllDishes'
    return axios.post(url,
      { 'restaurant': restaurant },
    { headers: {
        'Content-Type': 'application/json'
    }
    })
  }
}

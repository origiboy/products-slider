const axios = require('axios')

const actions = {
    nuxtServerInit ({ commit }, { req }) {
      return axios('https://rangeweb.ru/test/products/', {
            method: 'GET'
        }).then((response) => {
            commit('SET_PRODUCTS', response.data || null)
        })
    }
}

export default actions

const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1'
// const api_key = 'ApiKey 588f3739f09eaa11425d135e96582ae53d3248dbb7ce7bcbd190489566a8932f'

function getJwt(){
  return window.localStorage.getItem('jwt')
}

const Room = {
  getRooms() {
    return fetch(
      `${DOMAIN}${API_PATH}/rooms`,
      {
        headers: {'Authorization':`JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },
  get(id){
    return fetch(
      `${DOMAIN}${API_PATH}/rooms/${id}`,
      {
        headers: {'Authorization':`JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },post(attributes){
    return fetch(
      `${DOMAIN}${API_PATH}/rooms`,
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':`JWT ${getJwt()}`
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json())
  }
}

const Token = {
  post(params){
    return fetch(
      `${DOMAIN}${API_PATH}/tokens/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res=>res.json())
  }
}


export { Room,Token };

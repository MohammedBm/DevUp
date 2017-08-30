const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1'

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
    ).then(res => res.json()) // { id: 2, title: "..."}
  },
  postComment(id, attributes){
    return fetch(
      `${DOMAIN}${API_PATH}/rooms/${id}/comments`,
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
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


const User = {
  post(params){
    return fetch(
      `${DOMAIN}${API_PATH}/users`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        },
        body: JSON.stringify(params)
      }
    ).then(res=>res.json())
  }
}

const Member ={
  post(userId, roomId){
    return fetch(
      `${DOMAIN}${API_PATH}/room_users/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        },
        body: JSON.stringify({user_id:userId, room_id:roomId})
      }
    ).then(res=>res.json())
  },
  delete(roomUserId){
    return fetch(
      `${DOMAIN}${API_PATH}/room_users/${roomUserId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        }
      }
    ).then(res=>res.json())
  }
}



export { Room,Token,User,Member };

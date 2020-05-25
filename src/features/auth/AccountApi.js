import {configSettings} from '../../config/config';

const _authUrl = configSettings.apiEndPoint + '/auth';

export default {

  authLogin: () => {
    return new Promise( (resolve, reject) => {
      fetch(_authUrl, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({username: 'dehack@yahoo.com', password: 'dehack'})
        })
        .then(res => res.json())
        .then(
          (result) => {
            resolve(result)
          },
          (error) => {
            reject(error)
          }
        )
      })
  }
}

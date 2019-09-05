import axios from 'axios'


export const authLogin = (email, password) => {
  return dispatch => {
    axios
      .post('http://127.0.0.1:8000/rest-auth/login/', {
        email,
        password
      })
      .then(res => {
        console.log(res.data)
        const token = res.data.key
        localStorage.setItem('token', token)
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}
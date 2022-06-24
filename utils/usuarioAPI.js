import client from './axiosClient'

export const loginUser = async(formulario) => {
  const { email, password } = formulario
  try {
    const {data} = await client.post(`/api/user/${email}`, {password})
    return data
  } catch (error) {
    console.log(error.response);
    // const data = {
    //   data: error.response.data
    // }
    return {data: error.response.data }
  }
}

export const createUser = async(formulario) => {
	const { email, password, username } = formulario
  try {
    const {data} = await client.post('/api/user', {
      username,
      password,
      email
    })
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}

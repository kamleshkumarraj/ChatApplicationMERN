import axios from 'axios'
import { setApiStatus, resetApiStatus } from '../store/slice/apiResponse'

export const apiCalling =
  ({ method, formData, url }) =>
  async (dispatch) => {
    const options = {
      method,
      url,
      headers: {
        Authorization: 'Bearer your-token',
      },
      data: formData,
      withCredentials: true,
    }

    try {
      dispatch(setApiStatus())
      const response = await axios(options)
      dispatch(resetApiStatus())
      return response.data
    } catch (err) {
      dispatch(resetApiStatus())
      return err.response?.data
    }
  }

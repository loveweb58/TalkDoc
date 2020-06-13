// General api to access data
import axios from 'axios';
import ApiConstants from 'api/ApiConstants';
export default async function apiCall(
  path = '',
  data = null,
  method = 'GET',
  token = null,
  clientType = '4ABKpxvXFI19R8KL'
) {
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  let url = ApiConstants.BASE_URL + path;

  console.log(url, data);

  return axios
    .request({
      url,
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        'CLIENT-TYPE': clientType,
        'DEVICE-ID': 'webapp',
        ...(token && { 'ACCESS-TOKEN': token }),
      },
      [dataOrParams]: data,
    })
    .then(resp => resp.data)
    .then(json => json)
    .catch(error => error);
}

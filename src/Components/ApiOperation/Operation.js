import axios from 'axios';

export async function fetchProduct() {
  let api = 'https://fakestoreapi.com/products';
  let headers = {};
  return getApi(api, headers);
}

export function getApi(url, headers) {
  return new Promise(function (resolve, reject) {
    axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log({ url, err });
        resolve(err?.response || err);
      });
  });
}

export async function api_getCart({ custId, deviceId, token }) {
  let url = `https://api.vellvette.com/cart/${process.env.STAGE}/v1/getCart`;
  let headers = {
    Authorization: token ? token : '',
    'Content-Type': 'application/json',
    store_id: process.env.STORE_ID,
  };

  if (custId) {
    url = `${url}?customer_id=${custId}`;
  } else {
    url = `${url}?device_id=${deviceId}`;
  }

  return getApi(url, headers);
}

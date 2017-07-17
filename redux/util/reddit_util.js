var ApiUtils = {
  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

// export const posts = () => {
//   fetch('https://www.reddit.com/.json')
//     .then(ApiUtils.checkStatus)
//     .then(response => {
//       console.log(response.json());
//       return response.json()
//     })
//     .catch(e => e)
//   }

export const posts = () => {
  fetch('https://www.reddit.com/.json')
    .then(function(response) {
      console.log(response.json());
      return response
    })
}

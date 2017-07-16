export const posts = () => (
  $.ajax({
    method: 'GET',
    url: 'https://www.reddit.com/.json',
  })
);

// export const posts = (query) => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/songs',
//     data: {query: query}
//   })
// );

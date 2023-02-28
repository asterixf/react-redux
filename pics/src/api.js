  import axios from 'axios';

  const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID YSiExyFj_bzl8u4T5cUCqdBh_RL4q3NeTWVpySMv1TY'
    },
    params: {
      query: term
    }
  })
  return response.data.results;
  };

  export default searchImages;

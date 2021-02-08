import axios from  'axios';

const url = 'http://localhost:5000/posts';

export cosnt fetchPosts =() => axios.get(url);
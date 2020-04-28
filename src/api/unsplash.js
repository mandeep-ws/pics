import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID An6Ru7oKQ8IdrZrT7RWwAyxILL9191QeGkgBoRqRdas' }

});




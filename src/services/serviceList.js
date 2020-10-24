import api from './api';

export default function List(url) {
    console.log("asdasd")
    const response = api.get(url, {
    }).then(response => {
        console.log(response)
        return response;
    });
    console.log(response)
    return response;
}
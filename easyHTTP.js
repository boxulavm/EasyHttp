/** EasyHTTP - library for making HTTP requests
* Version with promises
*
*   @version 1.0.0.
*   @author BVM
*   @license MIT
*
**/

class EasyHTTP {
  
    // Make an HTTP Get request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }
    
    // Make an HTTP Post request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // Make an HTTP Put request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // Make an HTTP Delete request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted!'))
            .catch(err => reject(err))
        });
    }

} 
/** EasyHTTP - library for making HTTP requests
* Version with async/await 
*
*   @version 2.0.0.
*   @author BVM
*   @license MIT
*
**/

class EasyHTTP {
  
    // Make an HTTP Get request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    
    // Make an HTTP Post request
    async post(url, data){
        const response = await fetch(url, {
            method : 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Put request
    async put(url, data){
        const response = await fetch(url, {
            method : 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Delete request
    async delete(url){
        const response = await fetch(url, {
            method : 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            }
        })
        return 'Resource deleted!';
    }

} 
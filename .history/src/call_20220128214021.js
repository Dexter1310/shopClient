const headers = {
    accept:"application/json"

};
export default async function sendRequest({url,method,body}){
    const response = await fetch(url,{
        method,
        headers,
        body
    });
    if(!response.ok){
        throw new 
    }
}
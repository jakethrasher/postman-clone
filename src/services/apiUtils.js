import request from 'superagent'

export const getData = async (url) =>{
    try {
        if(!url) return 'Enter a Valid URL'
        const {body} = await request
            .get(url)
        console.log(body)
        return JSON.stringify(body, null, 2);
        
    } catch (error) {
        return '🤔 Something went wrong';
    }
}

export const postData = async (url,data) =>{
    const {body} = await request
        .post(url)
        .set('Content-Type', 'application/json')
        .send(data)

    return JSON.stringify(body,null,2);
}   
export const updateData = async (url,data) =>{
  
    const {body} = await request
        .put(url)
        .set('Content-Type', 'application/json')
        .send(data)

    return JSON.stringify(body,null,2);
}   
export const deleteData = async (url) => {

    const {body} = await request
        .delete(url)
    
    return JSON.stringify(body,null,2);
}
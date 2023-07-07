function getUser(isOffline){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const users=['Faiq','rofifi']
        if(isOffline){
            reject(new Error('Cannot retrive the data due offline'))
            return
        }
        resolve(users)
        },3000)
    })
}

getUser(true).then(user=>console.log(user)).catch(err=>console.log(err.message))
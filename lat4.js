const wait=(hasil)=>{return new Promise((resolve,reject)=>setTimeout(()=>{
    const data='{ title: “song title”, artists: [{ name: “artist name 1”}], duration: 200 }'
    if(!hasil){
        reject(new Error('Promise Rejected'))
    }
    resolve(data)    
},1000))}

async function songs(data){
    try{
        return await wait(data)
    }catch(error){
        throw error
    }
}

songs(false).then(hasil=>console.log(hasil)).catch(err=>console.log(err.message))
const song={
    title:"song title",
    artist:[{name:"artist name1"}],
    duration:200,
}

const wait=(time)=>new Promise((resolve)=>setTimeout(resolve,time))

async function songsPromise(){
    try{
        const data=song
        setTimeout(()=>console.log("tunggu"),2000)
        wait(1000)
        return data
    }catch(err){
        return err
    }
}

songsPromise().then(resolves=>console.log(resolves)).catch(err=>console.log(err.message))
function getProvince(error,callback){
    setTimeout(()=>{
        const province=['solo','jatim']
        if(!error){
            callback(null,province)
        }else{
            callback(new Error('ada error'),null)
        }
    },3000)
}

function dataProvince(error,data){
    if(!error){
        console.log(data)
    }else{
        console.log(error.message)
    }
}
getProvince('ada',dataProvince)
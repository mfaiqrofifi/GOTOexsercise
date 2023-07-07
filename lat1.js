// console.log('Data Pelanggan')

// setTimeout(()=>{
//     console.log('data faiq')
// },3000)

// console.log('ada yang bisa dibantur')

function getUser(isOffline,callback){
    setTimeout(()=>{
        const users=['John','Jack','Abigail']
        if(isOffline){
            callback(new Error('cannot retrive user due offline',null))
        }
        callback(null,users)
    },3000)

}

function userCallBack(error,user){
    if(error){
        console.log('process failed', error.message)
    }
    console.log('process success:',user)
}
getUser(null,userCallBack)
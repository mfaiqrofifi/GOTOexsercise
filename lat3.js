function withDrawMoney(amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(amount>100){
                reject(new Error('Not enough money'))
            }
            resolve(amount)
        },1000)
    })
}

function buyCinemaTicket(money){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money<10){
                reject(new Error('Not enough money to buy ticket'))
            }
            resolve('ticket-1')
        },1000)
    })
}

function watchMoney(ticket){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!ticket){
                reject(new Error('no ticket'))
            }
            resolve('enjoy movie')
        },1000)
    })
}

// function watchMovie(){
//     withDrawMoney(10).then((money)=>buyCinemaTicket(money)).then((ticket)=>watchMoney(ticket)).then((result)=>
//     {console.log(result)}).catch((error)=>{
//         console.log(error.message)
//     })
// }
// watchMovie()

async function watchMovie(amoun){
    try{
        const money=await withDrawMoney(amoun);
        const ticket=await buyCinemaTicket(money);
        const result=await watchMoney(ticket)
        return result
    }catch(error){
        throw error
    }
}

watchMovie(0).then(result=>console.log(result)).catch((error)=>console.log(error.message))
const json='{"name":"Faiq","age":20}';
class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name="ValidationError"
    }
}
try{
    const user=JSON.parse(json)
    if(!user.data){
        throw new ValidationError("'data' is required")
    }
    console.log("akhir blok try");
}catch(error){
    if(error instanceof ValidationError){
        console.log(`json invalid:${error.message}`)
    }else if(error instanceof ReferenceError){
        console.log(error.message)
    }else{
        console.log(error.stack)
    }
}finally{
    console.log('selesai')
}
const submit=document.getElementById("submit")
const input=document.getElementById("input")

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("klik")
    validation()
})

const validation=()=>{
    if(input.value===""){
        console.log("gagal")
        
        dataCeck("gagal")
        
        
    }else{
        console.log("berhasil")
        dataCeck("berhasil")
        getData(input.value)
        tambahData()
        input.value=""
    }
}

const dataCeck=(berhasil)=>{
    const notif=document.getElementById("notifikasi")
    notif.style.visibility="visible"
    if(berhasil!=="berhasil"){
        notif.style.color="blue"
    }else{
        notif.style.color="red"
    }
    notif.innerText=berhasil
}

const data={}

const getData=(input)=>{
    console.log(input)
    data["text"]=input
}

const tambahData=()=>{
    const Posts=document.getElementById("Posts")
    console.log(data)
    Posts.innerHTML+=`
    <p>${data.text}
                        <span class="trash">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i class="fa-sharp fa-solid fa-trash" onClick="hapus(this)"></i>
                        </span>
                    </p>
    `
    
}

const hapus=(e)=>{
    e.parentElement.parentElement.remove()
}
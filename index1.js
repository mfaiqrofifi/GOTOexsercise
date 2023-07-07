document.addEventListener('DOMContentLoaded',function(){
    const inputMaxLoader=document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText=inputMaxLoader
    document.getElementById('inputNama').addEventListener('input',function(){
        const jumlahKarakterDiketik=document.getElementById('inputNama').value.length;
        const jumlahKarakterMax=document.getElementById('inputNama').maxLength;
        console.log('jumlah :',jumlahKarakterDiketik)
        console.log('max:',jumlahKarakterMax)
        const sisa=jumlahKarakterMax-jumlahKarakterDiketik
        document.getElementById('sisaKarakter').innerText=sisa
        if(sisa===0){
            document.getElementById('sisaKarakter').innerText='batas melebihi max';
        }else if(sisa<=5){
            document.getElementById('notifikasiSisaKarakter').style.color='red'
        }else{
            document.getElementById('notifikasiSisaKarakter').style.color='black'
        }
    })
    document.getElementById('inputNama').addEventListener('focus',function(){
        console.log('input:focus')
        document.getElementById('notifikasiSisaKarakter').style.visibility='visible'
    })
    document.getElementById('inputNama').addEventListener('blur',function(){
        console.log('info:hidden')
        document.getElementById('notifikasiSisaKarakter').style.visibility='hidden'
    })
    document.getElementById('inputCaptcha').addEventListener('change',function(){
        console.log('inputChaptcha: change');
        const chapca=document.getElementById('inputCaptcha').value;
        const submit=document.getElementById('submitButton');
        if(chapca==='PRNU'){
            submit.removeAttribute('disabled')
        }else{
            submit.setAttribute('disabled','')
        }
    })
    document.getElementById('formDataDiri').addEventListener('submit',function(event){
        const dtChapcha=document.getElementById('inputCaptcha').value
        if(dtChapcha==='PRNU'){
            alert('Selamat Menang')
        }else{
            alert('Selamat salah')
            dtChapcha.getElementById('submitButton').setAttribute('disabled','')
        }
        event.preventDefault()
    })
})

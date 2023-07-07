const submitAction=document.getElementById('formDataDiri')

submitAction.addEventListener('submit',function(event){
    const inputNama=document.getElementById('inputNama').value;
    const inputDomisili=document.getElementById('inputDomisili').value;
    const hidden=`hallo nama saya ${inputNama} asal ${inputDomisili}`
    document.getElementById('messageAfterSubmit').innerHTML=hidden
    event.preventDefault()
})
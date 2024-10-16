const guardar = document.getElementById("guardar");

guardar.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const email = guardar.email.value;
    const password = guardar.password.value;

    const response = await fetch('https://api.sheetbest.com/sheets/07b8c941-318f-4e31-aedd-9e625cdd2b38', {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "correo": email, 
            "password": password
        })
    })

    if(response.ok){
        alert("Se ha registrado con exito");
        window.location.href = '../principal.html';
    }else{
        alert("Hubo un problema al enviar los datos")
    }
})
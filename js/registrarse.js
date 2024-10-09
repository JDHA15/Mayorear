const registrarse = document.getElementById("guardar")

registrarse.addEventListener('Registrarse', async(uno)=>{
    uno.preventDefault();

    const email = registrarse.email.value;
    const password= registrarse.email.value;

    const response = await fetch('https://api.sheetbest.com/sheets/07b8c941-318f-4e31-aedd-9e625cdd2b38',{
        method: 'POST',
        mode: 'cors',
        headers:{
            'Contend-Type': 'application/json'
        },
        body: JSON.stringify({
            "correo":email,
            "password": password
        })
    })
    if (response.ok) {
        alert("su registro ha sido exitoso")
        window.location.href = 'principal.html'
    } else {
        alert("Lo sentimos, hubo un problema al registrarte")
    }
})
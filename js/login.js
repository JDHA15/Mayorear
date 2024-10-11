const guardar = document.getElementById("guardar");

guardar.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const email = guardar.email.value;
    const password = guardar.password.value;

    const response = await fetch('https://api.sheetbest.com/sheets/07b8c941-318f-4e31-aedd-9e625cdd2b38', {
        method: 'GET',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    if(response.ok){
      const data = await response.json();

      const user = data.find(user => user.correo === email && user.password === password);

      if (user) {
        alert("Tus datos son correctos, ya puedes ingresar")
        window.location.href = '../principal.html';
      } else {
        alert("Error, datos erroneos, vuelve a intentar")
      }
    }else{
        alert("Hubo problemas técnicos")
    }
})
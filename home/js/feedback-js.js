let formfeedback = document.querySelector('#formfeedback')

console.log(formfeedback);

formfeedback.addEventListener('submit', async e => {
    e.preventDefault();

    let formNodes = document.querySelectorAll('.form-control')
    let formDatos = Array.from(formNodes);
    let queja = {queja: formDatos[1].value, usuario: formDatos[0].value};

    console.log(queja);


    let resp = await fetch('https://u01kkrbbbd.execute-api.us-east-2.amazonaws.com/dev/arranbot-feedback', {
        method: 'POST',
        body: JSON.stringify(queja),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(resp.status != 200){
        document.querySelector('#mensajesStatusInicio').insertAdjacentHTML('beforeend',
        `<div style="width: inherit;" class="alert alert-danger alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert">
            <span>&times;</span>
        </button>
        <strong>Oh snap!</strong> Something went wrong trying to upload your complaint :[
        </div>`);
        return;
    }

    document.querySelector('#mensajesStatusInicio').insertAdjacentHTML('beforeend',
    `<div style="width: inherit;" class="alert alert-success alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert">
        <span>&times;</span>
    </button>
    <strong>Well done!</strong> You succesfully uploaded your complaint :]
    </div>`);

    let json = await resp.json();
    console.log(json);

    formfeedback.reset();
    
});
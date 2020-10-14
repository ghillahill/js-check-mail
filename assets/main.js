var emailArray = ['fek90@gmail.com', 'aba74@gmail.com', 'sergio.rossi@libero.it'];

var askEmail = prompt('Quale è il suo indirizzo e-mail?');

for (var i = 0; i < emailArray.length; i++) {
    if (askEmail === emailArray[i]) {
        document.getElementById('listaUtente').innerHTML = 'Sei in Lista';
        //console.log('Sei in lista');
        break;
    }
    else{
        document.getElementById('listaUtente').innerHTML = 'Non sei in Lista';
        //console.log('Non sei in lista');
        break;
    }
}

function carregaPerfil() {
    let perfil = document.getElementById('perfil');
    let htmlStr = '';

    fetch(`https://api.github.com/users/felagmoura`)
        .then(dados => dados.json()
        .then(db => {
                htmlStr = `
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img class="minhaFoto" src="${db.avatar_url}">
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 textoPerfil">
                        <div class="flex-perfil">
                            <h1>${db.name}</h1>
                            <p class="main-text">${db.login}</p>
                            <p class="main-text">${db.bio}</p>
                            <p class="main-text"><a href="${db.html_url}"> Me segue lá no meu perfil do GitHub</a></p>
                            <p class="main-text"> Se você me ajudar eu vou ter ${db.followers} seguidores</p>
                        </div>
                    </div>
                `;
                perfil.innerHTML = htmlStr;
        }))
}

function carregaSeguidores(){
    let seguidores = document.getElementById('seguidores');
    let htmlStr=''

    fetch ('https://api.github.com/users/felagmoura/followers')
    .then(dados => dados.json()
    .then (db => {
        htmlStr = `
            <h1>Meus seguidores favoritos:</h1>
            <div class="col-12 col-sm-12 col-md-5 col-lg-6 perfilSeguidor">
                <a class="textoSeguidor" href="https://github.com/pedroolynth0"><b>${db[0].login}</b></a>
                <img class="imgSeguidor"src="${db[0].avatar_url}">
            </div>
            <div class="col-12 col-sm-12 col-md-5 col-lg-6 perfilSeguidor">
                <a class="textoSeguidor" href="https://github.com/Andreixzc"><b>${db[1].login}</b></a>
                <img class="imgSeguidor"src="${db[1].avatar_url}">
            </div>  
        `;
        seguidores.innerHTML = htmlStr;
    }))
}

function carregaRepositorios(){
    let repositorios = document.getElementById('repositorios');
    let htmlStr = '';

    fetch('https://api.github.com/users/felagmoura/repos')
        .then(dados => dados.json()
        .then (db => {
            htmlStr = `
                <h1>Repositórios GitHub</h1>
                <section class="col-12 col-sm-12 col-md-6 col-lg-6 repositorio">    
                    <div class="col-3 col-sm-2 col-md-2 col-lg-1">
                        <img src="imagens/pastaBranca.png" class="imgPasta">
                    </div>
                    <div class="col-9 col-sm-10 col-md-10 col-lg-10">
                        <a class="nomeRepositorio" href="${db[0].html_url}">${db[0].name}</a>
                        <p><b style='color:#C9EFFC !important;'>Descrição: </b>${db[0].description}<br></p>
                        <p><b style='color:#C9EFFC !important;'>Linguagem: </b>${db[0].language}<br></p>
                    </div>
                </section>
                <section class="col-12 col-sm-12 col-md-6 col-lg-6 repositorio">
                    <div class="col-3 col-sm-2 col-md-2 col-lg-1">
                        <img src="imagens/pastaBranca.png" class="imgPasta">
                    </div>
                    <div class="col-9 col-sm-10 col-md-10 col-lg-10">
                        <a class="nomeRepositorio" href="${db[1].html_url}">${db[1].name}</a>
                        <p><b style='color:#C9EFFC !important;'>Descrição: </b>${db[1].description}<br></p>
                        <p><b style='color:#C9EFFC !important;'>Linguagem: </b>${db[1].language}<br></p>
                    </div>
                </section>
            `;
            repositorios.innerHTML = htmlStr;
        }))
}

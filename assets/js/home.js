export const header=`<header>
                <nav class="navbar navbar-expand-lg py-2">
                    <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <a class="navbar-brand" href="#" id="nombre-user">      
                        <img id="img-user" src="" alt="img" width="30" height="24" class="d-inline-block align-text-top">
                    </a>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                <img src="assets/img/notificación.png" alt="img" width="30" height="24" class="d-inline-block align-text-top"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            <img src="assets/img/msj2.png" alt="img" width="30" height="24" class="d-inline-block align-text-top"></a>
                    </li>
                        <div class="lang-menu">
                        <div class="selected-lang"> <a class="nav-link"><img src="assets/img/opciones.png" alt="img" width="30" height="24" class="d-inline-block align-text-top"></a>
                        </div>
                        <ul>
                          <li>
                            <a href="#" language="Amigos" class="de">Amigos</a>
                          </li>
                          <li>
                            <a href="" language="Ajustes" class="en">Ajustes</a>
                          </li>
                          <li>
                            <a href="" language="Salir" class="fr">Salir</a>
                        </ul>
                      </div>
                    </div>
                    </div>

                </nav>
            </header>`;

export const main=`
<div class="container-main ">

  <div class="general-information">
  <div class="row py-1 px-1"> <div class="col-md-12"> 
  <!-- Profile widget --> 
  <div class="container-perfil"> 
  <div class="px-5 pt-0 pb-4 cover"> 
  <div class="media align-items-end profile-head"> 
  <div class="profile mr-3">
  <div>
  <img src="https://i.pinimg.com/736x/98/90/59/9890593fd50e5d4c057933faccf2baff.jpg" class="img-fluid">
  <img id="img-user2" src="" alt="..." width="10%" class="rounded mb-2 img-thumbnail">
  <a href="#" class="btn btn-outline-dark btn-sm btn-block">Edit profile</a>

  <ul class="list-inline mb-0"> 
  <li class="list-inline-item"> 
  <h5 class="font-weight-bold mb-0 d-block">10</h5> <small class="text-muted"> <i class="fas fa-image mr-1"></i>Post</small> 
  </li> 
  <li class="list-inline-item"> 
  <h5 class="font-weight-bold mb-0 d-block">745</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Amigos</small> 
  </li> 
  <li class="list-inline-item"> 
  <h5 class="font-weight-bold mb-0 d-block"> 340 </h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Seguidos</small> 
  </li> 
  </ul> 
<br>
  <p class="small mb-4"><i class="fas fa-map-marker-alt mr-2"></i>Lima, Perú</p> 
  <p>&#127754  &#127807 &#128218</p>
  <p class="font-italic mb-0"> #Estudiante</p> <p class="font-italic mb-0">#Me gusta bailar</p> 
 </div> </div> <div class="py-4 px-4"> <div class="d-flex align-items-center justify-content-between mb-3"> <h5 class="mb-0">
  </div>
  </div> 
  </div> 
  </div> 

  <div class="px-4 py-3"> 
  <div class="seguir"> 
 </div> </div> </div> </div>
  </div>
  <div class="container-post">
    
    <div class="new-post">
    <form id="task-form">
    <textarea rows="4" cols="50" placeholder="Comparte algo ahora" id="task-description"></textarea>
    <div class="containerProgress">
      <div class="progress"></div>
    </div>
    <div class="hide divImg">
      <span class="deleteImg">❌</span>
      <img class="picPost"/>
    </div>
    <div class="container-functions">
      <div class="camera-privacity">
      <input type="file" id="photoPost" class="hide" accept="image/*">
      <label for="photoPost"><img src="assets/img/camara.png" class="camera"></label>        
        <div class="privacidad">
          <select id="privacyPostArea">
            <option value="1">🌎 Público</option>
            <option value="2">Solo yo</option>
          </select>
        </div>
      </div>
      <button class="subir"> Compartir</button>
    </div>
  </div>
  <div class="container-post">
<div class="container p-4">
  <div class="row">
    <div >
      <ul class="list-group" id="posts">
      <div class="titulo">
      
      
      </div>
      </ul>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
</div>`;



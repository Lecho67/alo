function creadorDePaginasAjustes(competitivo) {
    const page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Plan Carrera - Ajustes</title>
        <meta name="description" content="">
        <meta name="author" content="templatemo">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
        <link href="/estilos/css/font-awesome.min.css" rel="stylesheet">
        <link href="/estilos/css/bootstrap.css" rel="stylesheet">
        <link href="/estilos/css/templatemo-style.css" rel="stylesheet">
      </head>
      <body>
        <div class="templatemo-flex-row">
        <div class="templatemo-sidebar">
        <header class="templatemo-site-header">
          <div class="profile-photo-container">
            <img src="/images/Vortexbird.desarrolloSoftware.png" alt="Profile Photo" class="img-responsive">
          </div> 
        </header>
          
        <nav class="templatemo-left-nav">          
          <ul>
            <li><a href="/inicio"><img class = "icon" src="/images/casita.png" alt="">Inicio</a></li>

            <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt="">Mi Plan Carrera </a></li>

            <li><a href="/buzon"><img class="icon" src="/images/buzón.png" alt="">Buzón</a></li>
              
            <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt="">Grupos</a></li>
            
            <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt="">Empresa</a></li>

            <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>

            <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt="">Logros</a></li>
            
            <li><a href="/miperfil" class="active"><img class="icon" src="/images/perfil.png" alt="">Mi Perfil</a></li>
          </ul>  
        </nav>
      </div>
          <!-- Main content -->
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-content-container">
              <div class="templatemo-content-widget white-bg">
                <h2 class="margin-bottom-10">Configuración</h2>
                <p>Aquí puedes configurar tu cuenta</p>
                <form action="/cambiar/ajustes" class="templatemo-login-form" method="post" enctype="multipart/form-data">
                  <div class="row form-group">
                    <div class="col-lg-6 col-md-6 form-group">                  
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" name="nombre" placeholder="Ingrese un nombre" maxlength="399">                  
                    </div>
                    <div class="col-lg-6 col-md-6 form-group">                  
                        <label for="apellido">Apellido</label>
                        <input type="text" class="form-control" name ="apellido" placeholder="Ingrese un apellido" maxlength="399">                  
                    </div> 
                  </div>
                  <div class="row form-group">
                  <div class="col-lg-6 col-md-6 form-group">                  
                  <label for="descripcion">Descripción</label>
                  <input type="text" class="form-control" name ="descripcion" placeholder="Ingresa una descripción" maxlength="1000">                  
              </div>
                    <div class="col-lg-6 col-md-6 form-group">                  
                        <label for="inputEma">Cargo</label>
                        <input type="text" class="form-control" name ="cargo" placeholder="ingrese su cargo" maxlength="399">                  
                    </div> 
                  </div>
                  <div class="row form-group">
                  <div class="templatemo-block margin-bottom-5" style="margin-left: 20px;">
    <input type="checkbox" name="clasificacion" id="c3" value="1" ${competitivo[0].competitivo==1 ? 'checked' : ''} class="custom-checkbox">
    <label for="c3" class="font-weight-400 checkbox-label"><span></span>Activar el Modo clasificación</label> 
</div>

                  </div>
                  <div class="row form-group">
    <div class="form-group" style="text-align: center;">
        <label for="inputCurrentPassword">Imagen actual</label>
        <div>
            <img src="/foto/usuario" class="imgcircle_perfil" style="border-radius: 50%"; >
            <br>
            <br>

            <div style="display: flex; justify-content: center; align-items: center;">
                <details style="width: 50%;">
                    <summary style="text-align: center; cursor: pointer; position: relative;">
                        <h4 style="text-align: center; margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Cambiar Foto De Perfil</h4>
                    </summary>
                    <br>
                    <div style="display: grid; place-items: center;">
                        <input type="file" name="imagen" placeholder="Ingresa una imagen" accept="image/*" onchange="mostrarImagen(this)">
                        <br>
                        <div id="vistaPrevia" style="display: none; margin-top: 10px;">
                            <h5>Vista previa:</h5>
                            <img id="imagenPrevia" class="imgcircle_perfil" style=" border-radius: 50%">
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </div>
</div>
                  <div class="row form-group">
                    <!-- <div class="col-lg-6 col-md-6 form-group"> 
                      <label class="control-label templatemo-block">Tipo de texto</label>                 
                      <select class="form-control">
                        <option value="html">Arial</option>
                        <option value="plain">Time New Roman</option>                      
                      </select>
                    </div> -->
                    <div class="col-lg-6 col-md-6 form-group pl-5">                  
    
 </div>
                  </div>
                  <div class="form-group text-right">
                    <button type="submit" class="templatemo-blue-button">Actualizar</button>
                  </div>                           
                </form>
              </div>
            </div>
            <footer class="text-right">
                <p>Copyright &copy; 2023 Innovate U
                | InnovateU@uao.edu.co</p>
              </footer>
          </div>
        </div>
        <script>
    function mostrarImagen(input) {
        var vistaPrevia = document.getElementById('vistaPrevia');
        var imagenPrevia = document.getElementById('imagenPrevia');

        vistaPrevia.style.display = 'block';

        var archivo = input.files[0];
        var lector = new FileReader();

        lector.onload = function (e) {
            imagenPrevia.src = e.target.result;
        };

        lector.readAsDataURL(archivo);
    }
</script>
      </body>
    </html>
    `;
    return page;
}

module.exports={creadorDePaginasAjustes}
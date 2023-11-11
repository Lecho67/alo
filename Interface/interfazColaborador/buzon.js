function creadorDePaginaBuzon(propuestas,evidencias) {
    let res = "";
    let res1 = "";
  
    propuestas.forEach((element) => {
      res += `<tr>
      <td>${element.nombre}</td>
      <td>${element.titulo}</td>
      <td>${element.objetivo}</td>
      <td>${element.descripcion}</td>
      <td><a href="javascript:void(0);" onclick="enviarSolicitudAprobar(${element.id_PP})" class="templatemo-edit-btn">Aprobar</a></td>
      <td><a href="javascript:void(0);" onclick="enviarSolicitudDenegar(${element.id_PP})" class="templatemo-edit-btn">Denegar</a></td>
      <td><a href="javascript:void(0);" onclick="enviarSolicitudDetalles(${element.id_PP})" class="templatemo-link" id="Detalles">Detalles</a></td>
    </tr>`;
    });
  
    evidencias.forEach((element) => {
      res1 += `<tr>
      <td>${element.nombreUsuario}</td>
      <td>${element.nombreActividad}</td>
      <td>${element.nombre}</td>
      <td>${element.fecha}</td>
      <td><a href="/buzon/Detalles/${element.id_PP}" class="templatemo-link" id ='Detalles'>Detalles</a></td>
    </tr>`; 
    });
  
    const page = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Plan Carrera - Buzón</title>
      <meta name="description" content="">
      <meta name="author" content="templatemo">
      <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
      <link href="/estilos/css/font-awesome.min.css" rel="stylesheet">
      <link href="/estilos/css/bootstrap.css" rel="stylesheet">
      <link href="/estilos/css/templatemo-style.css" rel="stylesheet">
      <script>
          function enviarSolicitudAprobar(element) {
              enviarSolicitud('POST', '/aprobarPropuesta/' + element);
          }
  
          function enviarSolicitudDenegar(element) {
              enviarSolicitud('POST', '/denegarPropuesta/' + element);
          }
  
          function enviarSolicitudDetalles(element) {
              enviarSolicitud('POST', '/buzon/Detalles/' + element);
          }
          function enviarSolicitud(method, url) {
            var form = document.createElement('form');
            form.method = method;
            form.action = url;
            document.body.appendChild(form);
            form.submit();
        }
      </script>
    </head>
    <body>
      <div class="templatemo-flex-row">
        <div class="templatemo-sidebar">
          <header class="templatemo-site-header">
            <h1>VortexBird</h1>  
          </header>
          <div class="profile-photo-container">
            <img src="/images/profile-photo.png" alt="Profile Photo" class="img-responsive"> 
          </div>
          <div class="mobile-menu-icon">
              <i class="fa fa-bars"></i>
            </div>
            <nav class="templatemo-left-nav">          
              <ul>
                <li><a href="/inicio"><img class = "icon" src="/images/casita.png" alt=""><br>Inicio</a></li>

                <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
    
                <li><a href="/buzon"class="active"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
                  
                <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>
                
                <li><a href="/empresa" ><img class= "icon"src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
    
                <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                
                <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
  
                <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
    
                <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
    
              </ul>  
            </nav>
        </div>
        <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-content-container">
            <div class="templatemo-content-widget no-padding ">
              <details class="ajustar-detalles-claro">
                <summary style="text-align: center;">
                  <h4 style="text-align: center;">Solicitudes De Plan Carrera</h4>
                  <span style="text-align: left;" class="icon">▼</span>
                </summary>
                <div class="panel panel-default table-responsive">
                <table class="table table-striped table-bordered templatemo-user-table">
                  <thead>
                    <tr>
                      <td>Nombre Del Proponente</td>
                      <td>Título Plan Carrera</td>
                      <td>Objetivo</td>
                      <td>Descripcion</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                      ${res}   
                  </tbody>
                </table>  
              </div> 
              </details>
              <details class="ajustar-detalles-claro">
                <summary style="text-align: center;">
                  <h4 style="text-align: center;">Solicitudes De Cambios A Actividades</h4>
                  <span style="text-align: left;" class="icon">▼</span>
                </summary>
                <div class="panel panel-default table-responsive">
                <table class="table table-striped table-bordered templatemo-user-table">
                  <thead>
                    <tr>
                      <td>Nombre Del Proponente</td>
                      <td>Título Plan Carrera</td>
                      <td>Presupuesto</td>
                      <td>Descripcion</td>
                      <td>Fecha Inicio</td>
                      <td>Fecha Fin</td>
                      <td>Unidades</td>
                      <td>tipo</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                      ${res}   
                  </tbody>
                </table>  
              </div> 
              </details>
              <details class="ajustar-detalles-claro">
                <summary style="text-align: center;">
                  <h4 style="text-align: center;">Envíos De evidencias</h4>
                  <span style="text-align: left;" class="icon">▼</span>
                </summary>
                <div class="panel panel-default table-responsive">
                <table class="table table-striped table-bordered templatemo-user-table">
                  <thead>
                    <tr>
                      <td>Nombre Del Colaborador</td>
                      <td>Actividad</td>
                      <td>Evidencia</td>
                      <td>Fecha de Subida</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                      ${res1}   
                  </tbody>
                </table>  
              </div> 
              </details>
               
              
                                      
            </div> 
             
          </div>
        </div>
      </div>
      <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
      <script type="text/javascript" src="js/templatemo-script.js"></script>
      <script>
        $(document).ready(function(){
          var imageUrl = $('img.content-bg-img').attr('src');
          $('.templatemo-content-img-bg').css('background-image', 'url(' + imageUrl + ')');
          $('img.content-bg-img').hide();        
        });
      </script>
    </body>
    </html>`;
    return page;
  }
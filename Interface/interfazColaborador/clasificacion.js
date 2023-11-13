function creadorDePaginaClasificaciones(clasificacionGlobal) {
  let res = "";
  clasificacionGlobal.forEach((element, i) => {
    res += `<tr>
              <td>${i + 1}.</td>
              <td>${element.Nombre}</td>
              <td>${element.Apellido}</td>
              <td>${element.RolUsuario}</td>
              <td>${element.Cargo}</td>
              <td>${element.NombreGrupo}</td>
              <td>${element.PuntosLogroTotales}</td>
              <td>${element.PorcentajeCompletitud} %</td>
            </tr>`;
  });
  const nPage = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Plan Carrera - Clasificaciones</title>
        <meta name="description" content="">
        <meta name="author" content="templatemo">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
        <link href="estilos/css/font-awesome.min.css" rel="stylesheet">
        <link href="estilos/css/bootstrap.css" rel="stylesheet">
        <link href="estilos/css/templatemo-style.css" rel="stylesheet">
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
  
              <li><a href="/clasificaciones"  class="active"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>
  
              <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt="">Logros</a></li>
              
              <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt="">Mi Perfil</a></li>
            </ul>  
          </nav>
        </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12">
                  <ul class="text-uppercase">
                    <li><a href="" class="active">Colaboradores</a></li>
                    <li><a href="clasificacionesGrupos">Grupos</a></li>
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-container">
              <div class="templatemo-content-widget no-padding">
                <div class="panel panel-default table-responsive">
                  <table class="table table-striped table-bordered templatemo-user-table">
                    <thead>
                      <tr>
                        <td>Rango</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Rol</td>
                        <td>Cargo</td>
                        <td>Grupo</td>
                        <td>Puntos de logro</td>
                        <td>Porcentaje De Completitud</td>
                      </tr>
                    </thead>
                    <tbody>
                      ${res} 
                    </tbody>
                  </table>    
                </div>                          
              </div>          
              <footer class="text-right">
                <p>Copyright &copy; 2023 Vortex Bird
                | Design: InnovateU</p>
              </footer>         
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return nPage;
}

function creadorDePaginaSinClasificaciones() {
  const nPage = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Plan Carrera - Clasificaciones</title>
        <meta name="description" content="">
        <meta name="author" content="templatemo">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
        <link href="estilos/css/font-awesome.min.css" rel="stylesheet">
        <link href="estilos/css/bootstrap.css" rel="stylesheet">
        <link href="estilos/css/templatemo-style.css" rel="stylesheet">
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
              <li><a href="/inicio" class="active"><img class = "icon" src="/images/casita.png" alt="">Inicio</a></li>

              <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt="">Mi Plan Carrera </a></li>
  
              <li><a href="/buzon"><img class="icon" src="/images/buzón.png" alt="">Buzón</a></li>
                
              <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt="">Grupos</a></li>
              
              <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt="">Empresa</a></li>
  
              <li><a href="/clasificaciones"  class="active"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>
  
              <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt="">Logros</a></li>
              
              <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt="">Mi Perfil</a></li>
            </ul>  
          </nav>
        </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12">
                  <ul class="text-uppercase">
                    <li><a href="" class="active">Colaboradores</a></li>
                    <li><a href="clasificacionesGrupos">Grupos</a></li>
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-container">
              <div class="templatemo-content-widget no-padding">
                <div class="panel panel-default table-responsive">
                  <table class="table table-striped table-bordered templatemo-user-table">
                    <thead>
                      <tr>
                        <td>Rango</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Rol</td>
                        <td>Cargo</td>
                        <td>Grupo</td>
                        <td>Puntos de logro</td>
                        <td>Porcentaje De Completitud</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td colspan="8" style="text-align: center;">MODO COMPETITIVO DESACTIVADO</td></tr>
                    </tbody>
                  </table>    
                </div>                          
              </div>          
              <footer class="text-right">
                <p>Copyright &copy; 2023 Vortex Bird
                | Design: InnovateU</p>
              </footer>         
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return nPage;
}

function creadorDePaginasClasificacionesGrupos(clasificacionesGrupos) {
  let res = "";
  clasificacionesGrupos.forEach((element, i) => {
    res += `<tr>
              <td>${i + 1}.</td>
              <td>${element.NombreGrupo}</td>
              <td>${element.Padrino}</td>
              <td>${element.PorcentajeCompletitud}</td>
              <td><a href="/grupo/${
                element.id_grupo
              }" class="templatemo-edit-btn"> Ir al Grupo</a></td>
            </tr>`;
  });

  const page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Plan Carrera - Clasificaciones Grupos</title>
        <meta name="description" content="">
        <meta name="author" content="templatemo">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
        <link href="estilos/css/font-awesome.min.css" rel="stylesheet">
        <link href="estilos/css/bootstrap.css" rel="stylesheet">
        <link href="estilos/css/templatemo-style.css" rel="stylesheet">
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

            <li><a href="/clasificaciones" class="active"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>

            <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt="">Logros</a></li>
            
            <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt="">Mi Perfil</a></li>
          </ul>  
        </nav>
      </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12">
                  <ul class="text-uppercase">
                    <li><a href="/clasificaciones">Colaboradores</a></li>
                    <li><a href=""class="active">Grupos</a></li>
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-container">
              <div class="templatemo-content-widget no-padding">
                <div class="panel panel-default table-responsive">
                  <table class="table table-striped table-bordered">
                    <thead class="cabecera-roja">
                      <tr>
                        <td>Rango</td>
                        <td>Nombre</td>
                        <td>Padrino</td>
                        <td>Porcentaje De Completitud</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                    ${res}
                    </tbody>
                  </table>
                </div>
              </div>
              <footer class="text-right">
                <p>Copyright &copy; 2023 Vortex Bird
                | Design: InnovateU</p>
              </footer>         
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

module.exports = {
  creadorDePaginaClasificaciones,
  creadorDePaginaSinClasificaciones,
  creadorDePaginasClasificacionesGrupos,
};

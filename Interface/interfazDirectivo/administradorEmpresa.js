function creadorDePaginaEmpresa(usuario) {
    let res = "";
    usuario.forEach((element) => {
      if (element.CargoEnParticipacion == "P") {
        res += `<tr>
              <td>${element.Nombre}</td>
              <td>${element.Apellido}</td>
              <td>${element.Rol}</td>
              <td>${element.Cargo}</td>
              <td>${element.Grupo} (Padrino)</td>
              <td><a href="/perfil/${element.Identificacion}">Ver Perfil</a></td>
            </tr>`;
      } else {
        res += `<tr>
        <td>${element.Nombre}</td>
        <td>${element.Apellido}</td>
        <td>${element.Rol}</td>
        <td>${element.Cargo}</td>
        <td>${element.Grupo}</td>
        <td><a href="/perfil/${element.Identificacion}">Ver Perfil</a></td>
      </tr>`;
      }
    });
  
    const page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Plan Carrera - Empresa</title>
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
              <h1>Vortex Bird</h1>  
            </header>
            <div class="profile-photo-container">
              <img src="images/profile-photo.png" alt="Profile Photo" class="img-responsive"> 
            </div>
            <div class="mobile-menu-icon">
                <i class="fa fa-bars"></i>
              </div>
              <nav class="templatemo-left-nav">          
                <ul>
                  <li><a href="inicio"><img class = "icon" src="images/casita.png" alt=""><br>Inicio</a></li>
      
                  <li><a href="buzon"><img class="icon" src="images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="grupos"><img class="icon" src="images/grupo.png" alt=""><br>Grupos</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
                  
                  <li><a href="empresa" class="active"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="clasificaciones" id="link"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="mislogros"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
          </div> 
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-content-container">
              <div class="templatemo-content-widget no-padding">
                <div class="panel panel-default table-responsive">
                  <table class="table table-striped table-bordered templatemo-user-table">
                    <thead>
                      <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Rol</td>
                        <td>Cargo</td>
                        <td>Grupo</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      ${res}
                    </tbody>
                  </table>    
                </div> 
                <div style="text-align: center; margin-bottom: 20px;">
                <form action="/generar-reporte-global" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded">
                <button  type="submit"class="generar-reporte">Generar Reporte de Todos</button>
                </form>
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

module.exports = {creadorDePaginaEmpresa}
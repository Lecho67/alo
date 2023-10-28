function creadorDePaginaIndexhtml(top3Grupo,top5Colab,usuario,actividadesPendientes) {
  let res = "";

  actividadesPendientes.forEach((element, i) => {
    var dia = actividadesPendientes[i].fecha_fin.getDate();
    var mes = actividadesPendientes[i].fecha_fin.getMonth() + 1; // Los meses son indexados desde 0 (enero es 0)
    var anio = actividadesPendientes[i].fecha_fin.getFullYear();

    // Formatear la fecha como una cadena (puedes ajustar el formato como desees)
    var fechaComoString = dia + "/" + mes + "/" + anio;
    res += `<li>
    <div class="templatemo-flex-row flex-content-row">
      <div class="col-3">
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="midicon" src="images/Peligro.png" alt="Sunset">
            </a>
          </div>
          <div class="media-body">
            <h2 class="media-heading text-uppercase">${actividadesPendientes[i].titulo}</h2>
            <p>Para ${actividadesPendientes[i].fecha_fin}</p>  
          </div>        
        </div>
      </div>     
    </div>
  </li>`;
  });

  const npage = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Visual Admin Dashboard - Home</title>
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
            
          <nav class="templatemo-left-nav">          
            <ul>
              <li><a href="/inicio" class="active"><img class = "icon" src="images/casita.png" alt=""><br>Inicio</a></li>
  
              <li><a href="buzon"><img class="icon" src="images/buzón.png" alt=""><br>Buzón</a></li>
                
              <li><a href="/grupos"><img class="icon" src="images/grupo.png" alt=""><br>Grupos</a></li>

              <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
              
              <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
  
              <li><a href="/clasificaciones" id="link"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
  
              <li><a href="/mislogros"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
              
              <li><a href="/miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
  
              <li><a href="/ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
            </ul>  
          </nav>
        </div>
        <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-content-container">
            <div class="templatemo-flex-row flex-content-row">
              <div class="templatemo-content-widget white-bg col-2">
                <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <h2 class="templatemo-inline-block">Actividades Próximas A Terminar</h2>
                </div>
                <div>
                  <a href="/mi-plan-carrera"><p class="ver-mas">Detalles</p></a>
                </div>  
                </div>
                <hr>
                <ul>
                  ${res}
                </ul>
              </div>
              <div class="templatemo-content-widget white-bg col-1 text-center">
                <h2 class="text-uppercase">Mi perfil</h2>
                <h3 class="text-uppercase margin-bottom-10">${
                  usuario[0].NombreUsuario
                }</h3>
                <img src="/foto/usuario"  class="imgcircle"><br><br>
                <a href="/miperfil" class="templatemo-more-btn">Ver Perfil</a>
              </div>
            </div>
            <div class="templatemo-flex-row flex-content-row">
            <div class="col-1 templatemo-overflow-hidden">
            <div class="templatemo-content-widget white-bg templatemo-overflow-hidden">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <h2 class="templatemo-inline-block">Mi Plan Carrera</h2><hr>
                </div>
                <div>
                  <a href="/mi-plan-carrera"><p class="ver-mas">Detalles</p></a>
                </div>
              </div>
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1 col-lg-6 col-md-12">
                  <div id="pie_chart_div" class="templatemo-chart-small"></div> 
                </div>
              </div>
            </div>
          </div>  
              <div class="col-1">
                <div class="panel panel-default templatemo-content-widget white-bg no-padding templatemo-overflow-hidden">
                  <div class="panel-heading templatemo-position-relative"><h2 class="text-uppercase">Top 5 Colaboradores: </h2></div>
                  <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <td>Puesto Nro</td>
                          <td>Nombre</td>
                          <td>Apellido</td>
                          <td>Puntos De Logro</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>${top5Colab[0].NombreUsuario}</td>
                          <td>${top5Colab[0].ApellidoUsuario}</td>
                          <td>${top5Colab[0].SumaPuntosMedallas}</td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>${top5Colab[1].NombreUsuario}</td>
                          <td>${top5Colab[1].ApellidoUsuario}</td>
                          <td>${top5Colab[1].SumaPuntosMedallas}</td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>${top5Colab[2].NombreUsuario}</td>
                          <td>${top5Colab[2].ApellidoUsuario}</td>
                          <td>${top5Colab[2].SumaPuntosMedallas}</td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>${top5Colab[3].NombreUsuario}</td>
                          <td>${top5Colab[3].ApellidoUsuario}</td>
                          <td>${top5Colab[3].SumaPuntosMedallas}</td>
                        </tr>
                        <tr>
                          <td>5.</td>
                          <td>${top5Colab[4].NombreUsuario}</td>
                          <td>${top5Colab[4].ApellidoUsuario}</td>
                          <td>${top5Colab[4].SumaPuntosMedallas}</td>
                        </tr>                    
                      </tbody>
                    </table>    
                  </div>                          
                </div>
              </div>           
            </div>
            <div class="templatemo-flex-row flex-content-row templatemo-overflow-hidden"> 
            <div class="col-1 templatemo-overflow-hidden">
              <div class="templatemo-content-widget white-bg templatemo-overflow-hidden">
                <div class="templatemo-flex-row flex-content-row">
                  <div class="col-1">
                    <h2 class="templatemo-inline-block">Tu Actualidad</h2><hr>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div class="col-1">
            <div class="panel panel-default templatemo-content-widget white-bg no-padding templatemo-overflow-hidden">
              <div class="panel-heading-red templatemo-position-relative"><h2 class="text-uppercase">Top 3 Grupos: </h2></div>
              <div class="table-responsive">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <td>Puesto Nro</td>
                      <td>Nombre</td>
                      <td>Coach</td>
                      <td>Porcentaje De Completitud:</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>${top3Grupo[0].NombreGrupo}</td>
                      <td>${top3Grupo[0].Padrino}</td>
                      <td>${top3Grupo[0].PorcentajeCompletitud}%</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>${top3Grupo[1].NombreGrupo}</td>
                      <td>${top3Grupo[1].Padrino}</td>
                      <td>${top3Grupo[1].PorcentajeCompletitud}%</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>${top3Grupo[2].NombreGrupo}</td>
                      <td>${top3Grupo[2].Padrino}</td>
                      <td>${top3Grupo[2].PorcentajeCompletitud}%</td>
                    </tr>               
                  </tbody>
                </table>    
              </div>                          
            </div>
          </div> 
            
          </div>
          <footer class="text-right">
            <p>Copyright &copy; 2023 Vortex Bird 
            | Design: InnovateU</p>
          </footer>         
        </div>
      </div>
    </div> 
    <script src="https://www.google.com/jsapi"></script> 
    <script>

      
      /* Google Chart 
      -------------------------------------------------------------------*/
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart); 
      
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Slices');
          data.addRows([
            ['Completo', ${usuario[0].PorcentajeCompletitud}],
            ['Incompleto', ${100 - usuario[0].PorcentajeCompletitud}],
          ]);

          // Set chart options
          var options = {'width':500, 'height':250, colors: ['#41BFBD','#EA520B']};

          // Instantiate and draw our chart, passing in some options.
          var pieChart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
          pieChart.draw(data, options);
      }
    </script>
    </body>
  </html>`;
  return npage;
}

function creadorDePaginaBuzon() {
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
          <h1>Vortex Bird</h1>  
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
  
              <li><a href="/buzon"class="active"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
                
              <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>

              <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
              
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
                <h4 style="text-align: center;">----------</h4>
                <span style="text-align: left;" class="icon">▼</span>
              </summary>
              <div class="panel panel-default table-responsive">
              <table class="table table-striped table-bordered templatemo-user-table">
                <thead>
                  <tr>
                    <td>Proximamente</td>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>  
            </div> 
            </details>
          
             
            
                                    
          </div> 
           
        </div>
      </div>
    </div>
  </body>
  </html>`;
  return page;
}

function creadorDePaginaBuzonDetalles(propuestas) {
  let res = "";
  propuestas.forEach((element) => {
    res += `<tr>
    <td>${element.usuario}</td>
    <td>${element.titulo}</td>
    <td>${element.presupuesto}</td>
    <td>${element.descripcion}</td>
    <td>${element.fecha_inicio}</td>
    <td>${element.fecha_fin}</td>
    <td>${element.unidades}</td>
    <td>${element.tipo}</td>
  </tr>     `;
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
  </head>
  <body>
    <div class="templatemo-flex-row">
      <div class="templatemo-sidebar">
        <header class="templatemo-site-header">
          <h1>Vortex Bird</h1>  
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
  
              <li><a href="/buzon"class="active"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
                
              <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>

              <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
              
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
          <div class="templatemo-content-widget no-padding">
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
                    <td>unidades</td>
                    <td>tipo</td>
                  </tr>
                </thead>
                <tbody>
                    ${res}   
                </tbody>
              </table>    
            </div>                          
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

function creadorDePaginaBuzonDirectivo(propuestas) {
  let res = "";
  propuestas.forEach((element) => {
    res += `<tr>
    <td>${element.usuario}</td>
    <td>${element.titulo}</td>
    <td>${element.presupuesto}</td>
    <td>${element.descripcion}</td>
    <td>${element.fecha_inicio}</td>
    <td>${element.fecha_fin}</td>
    <td>${element.unidades}</td>
    <td>${element.tipo}</td>
  </tr>     `;
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
  </head>
  <body>
    <div class="templatemo-flex-row">
      <div class="templatemo-sidebar">
        <header class="templatemo-site-header">
          <h1>Vortex Bird</h1>  
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
  
              <li><a href="/buzon"class="active"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
                
              <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>

              <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
              
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
          <div class="templatemo-content-widget no-padding">
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
                    <td>unidades</td>
                    <td>tipo</td>
                  </tr>
                </thead>
                <tbody>
                    ${res}   
                </tbody>
              </table>  
              

            </div>                          
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

function creadorDePaginasMiPerfil(usuarioPerfil) {
  const page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Plan Carrera - Mi Perfil</title>
      <meta name="description" content="">
      <meta name="author" content="templatemo">
      <!-- 
      Visual Admin Template
      https://templatemo.com/tm-455-visual-admin
      -->
      <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
      <link href="estilos/css/font-awesome.min.css" rel="stylesheet">
      <link href="estilos/css/bootstrap.css" rel="stylesheet">
      <link href="estilos/css/templatemo-style.css" rel="stylesheet">
      
      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
  
    </head>
    <body>  
      <!-- Left column -->
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
                
                <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
    
                <li><a href="clasificaciones" id="link"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                
                <li><a href="mislogros"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
                
                <li><a href="miperfil" class="active"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
    
                <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
    
              </ul>  
            </nav>
        </div>
        <!-- Main content --> 
        <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-content-container">         
            <div class="templatemo-content-widget white-bg">
              
              <div class="panel panel-default no-border">
                <div class="panel-heading border-radius-10">
                  <h2 class="text-uppercase">${usuarioPerfil[0].Nombre}</h2>
                </div>
                
                <div class="panel-body">
                    <div class="templatemo-flex-row" style=" text-align: center;">
                      <div class="templatemo-content-widget light-gray-bg" style="height: 500px; width: 50%">
                        <img src="/foto/usuario" class="imgcircle_perfil" ><br><br>
                          <div class="templatemo-flex-row flex-content-row">
                            <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                              <img class="insignia-mostrada-en-perfil-2" src="images/Insignias/7g.png" alt="">
          
                            </div>
                            <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                              <img class="insignia-mostrada-en-perfil-2" src="images/Insignias/god.png" alt="">
          
                            </div>
                            <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                              <img class="insignia-mostrada-en-perfil-2" src="images/Insignias/decepticon.png" alt="">
          
                            </div>
                          </div>
                        
                      </div>
                      <div style="text-align: center; margin: 30px;">
                        <div class="panel panel-default no-border"> 
                          <div class="panel-heading border-radius-10">
                            <h2 class="text-uppercase">${
                              usuarioPerfil[0].RolUsuario
                            }</h2>
                          </div>
                          <div class="panel-heading border-radius-10">
                            <h2 class="text-uppercase">${
                              usuarioPerfil[0].CargoUsuario
                            }</h2>
                          </div>
                          <div class="panel-heading border-radius-10">
                            <h2 class="text-uppercase">${
                              usuarioPerfil[0].NombreGrupo
                            } (${usuarioPerfil[0].RolEnGrupo})</h2>
                          </div>
                          <div class="panel-heading border-radius-10">
                            <h2 class="text-uppercase">${
                              usuarioPerfil[0].SumaPuntosMedalla
                            } 🥇</h2>
                          </div>
                        </div>
                        <div class="templatemo-content-widget light-gray-bg">
                          <p style="text-align: justify;">${
                            usuarioPerfil[0].Descripcion
                          }</p>
                        </div>
                        <div class="col-1 col-lg-6 col-md-12">
                          <div id="pie_chart_div" class="templatemo-chart-small"></div> 
                        </div>
                      </div>
  
  
                      
                    </div>
                </div>
              </div>            
              
            </div>
            <footer class="text-right">
              <p>Copyright &copy; 2084 Vortex Bird Desing: InnovateU
              | Design: Template Mo</p>
            </footer>         
          </div>
        </div>
      </div>
  
  
  
  
      <script src="https://www.google.com/jsapi"></script> 
      <script>
  
        
        /* Google Chart 
        -------------------------------------------------------------------*/
        // Load the Visualization API and the piechart package.
        google.load('visualization', '1.0', {'packages':['corechart']});
  
        // Set a callback to run when the Google Visualization API is loaded.
        google.setOnLoadCallback(drawChart); 
        
        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {
  
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Completo', ${usuarioPerfil[0].PorcentajeCompletacion}],
              ['Incompleto', ${100 - usuarioPerfil[0].PorcentajeCompletacion}],
            ]);
  
            // Set chart options
            var options = {'width':500, 'height':250};
  
            // Instantiate and draw our chart, passing in some options.
            var pieChart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
            pieChart.draw(data, options);
        }
        
      </script>
  
    </body>
  </html>`;
  return page;
}

function creadorDePaginaSesion() {
  const page = `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Inicio de Sesión</title>
      <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
  
  <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form action="tu_script_de_login.php" method="post">
          <div class="input-group">
              <label for="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required>
          </div>
          <div class="input-group">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" name="password" required>
          </div>
          <button type="submit">Iniciar Sesión</button>
      </form>
  </div>
  
  </body>
  </html>
  `;
  return page;
}
 
module.exports = {
  creadorDePaginaIndexhtml,
  creadorDePaginaEmpresa,
  creadorDePaginaBuzon,
  creadorDePaginasMiPerfil,
  creadorDePaginaSesion,
  creadorDePaginaBuzonDetalles,
  creadorDePaginaBuzonDirectivo,
};

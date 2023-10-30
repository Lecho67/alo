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

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="buzon"><img class="icon" src="images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="grupos"><img class="icon" src="images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="empresa" class="active"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="clasificaciones" id="link"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="mislogros"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
          </div> 
          <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href="/empresa"class="active">Integrantes de la Empresa</a></li>
                    <li><a href="/empresaPlanCarrera">Planes Carrera de los Integrantes</a></li>
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

function creadorDePaginaBuzon(propuestas) {
  let res = "";

  propuestas.forEach((element) => {
    res += `<tr>
    <td>${element.nombre}</td>
    <td>${element.titulo}</td>
    <td>${element.objetivo}</td>
    <td>$${element.presupuesto}</td>
    <td>${element.descripcion}</td>
    <td><a href="javascript:void(0);" onclick="enviarSolicitudAprobar(${element.id_PP})" class="templatemo-edit-btn">Aprobar</a></td>
    <td><a href="javascript:void(0);" onclick="enviarSolicitudDenegar(${element.id_PP})" class="templatemo-edit-btn">Denegar</a></td>
    <td><a href="javascript:void(0);" onclick="enviarSolicitudDetalles(${element.id_PP})" class="templatemo-link" id="Detalles">Detalles</a></td>
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
            enviarSolicitud('POST', '/aprobarPropuestaDirectivo/' + element);
        }

        function enviarSolicitudDenegar(element) {
            enviarSolicitud('POST', '/denegarPropuestaDirectivo/' + element);
        }

        function enviarSolicitudDetalles(element) {
            enviarSolicitud('POST', '/buzon/Detalles/VistaDirectivo/' + element);
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
          <h1 class="mi-titulo">Buzon Directivo</h1>
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
                <td>Presupuesto</td>
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
          
          </div>

        </div>
      </div>
    </div>
  </body>
  </html>`;
  return page;
}

function creadorDePaginaBuzonCoach(propuestas,evidencias,propuestasgenerales) {
  let res = "";
  let res1 = "";
  let res2 = "";

  propuestas.forEach((element) => {
    res += `<tr>
    <td>${element.nombre}</td>
    <td>${element.titulo}</td>
    <td>${element.objetivo}</td>
    <td>$${element.presupuesto}</td>
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
    <td><a href="/descargarEvidencia/${element.id_evidencia}" class="templatemo-link" id ='Detalles'>Descargar Evidencia</a></td>
  </tr>`; 
  });

  propuestasgenerales.forEach((element) => {
    res2 += `<tr>
    <td>${element.nombre}</td>
    <td>${element.titulo}</td>
    <td>${element.objetivo}</td>
    <td>$${element.presupuesto}</td>
    <td>${element.descripcion}</td>
    <td><a href="javascript:void(0);" onclick="enviarSolicitudAprobarD(${element.id_PP})" class="templatemo-edit-btn">Aprobar</a></td>
    <td><a href="javascript:void(0);" onclick="enviarSolicitudDenegarD(${element.id_PP})" class="templatemo-edit-btn">Denegar</a></td>
    <td><a href="javascript:void(0);" onclick="enviarSolicitudDetallesD(${element.id_PP})" class="templatemo-link" id="Detalles">Detalles</a></td>
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
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link href="/estilos/css/font-awesome.min.css" rel="stylesheet">
    <link href="/estilos/css/bootstrap.css" rel="stylesheet">
    <link href="/estilos/css/templatemo-style.css" rel="stylesheet">
    <script>
        function enviarSolicitudAprobarD(element) {
            enviarSolicitud('POST', '/aprobarPropuestaDirectivo/' + element);
        }

        function enviarSolicitudDenegarD(element) {
            enviarSolicitud('POST', '/denegarPropuestaDirectivo/' + element);
        }

        function enviarSolicitudDetallesD(element) {
            enviarSolicitud('POST', '/buzon/Detalles/VistaDirectivo/' + element);
        }
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
          <h1 class="mi-titulo">Buzon Coach</h1>

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
                    <td>Presupuesto</td>
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

              <div class="panel panel-default table-responsive">
              </div> 

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
            <div class="panel panel-default table-responsive">
            </div>              
            
                                    
          </div>
          <div class="templatemo-content-widget no-padding ">
          <h1 class="mi-titulo">Buzon Directivo</h1>

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
                  <td>Presupuesto</td>
                  <td>Descripcion</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                  ${res2}   
              </tbody>
            </table>  
          </div> 
          </details>

            <div class="panel panel-default table-responsive">
            </div>    
          
          </div>
        </?div>
      </div>
    </div>
  </body>
  </html>`;
  return page;
}

function creadorDePaginaVistaPropuestas(actividadesPropuestas, propuestaExistente) {
  let res = "";
  let aux = "";
  let unit = 0;
  let ur = 0;
  let estado = "";


  actividadesPropuestas.forEach((element, i) => {
      var dia = element.fecha_inicio.getDate();
      var mes = element.fecha_inicio.getMonth() + 1;
      var anio = element.fecha_inicio.getFullYear();
      var fechaString = dia + "/" + mes + "/" + anio;
      var dia1 = element.fecha_fin.getDate();
      var mes1 = element.fecha_fin.getMonth() + 1;
      var anio1 = element.fecha_fin.getFullYear();
      var fechaString1 = dia1 + "/" + mes1 + "/" + anio1;
    
      if (element.tipo == 1) {
        aux = "Retorno a Vortex Bird";
        ur += parseInt(element.unidades);
      } else {
        aux = "Desarrollo Personal";
      }

      res += `
      <hr>
      <div class="templatemo-widget-content templatemo-flex-row">
        <div class="col-1" style="text-align: center; margin-top: 10px; width: 100px;">
          <h2>Actividad ${i + 1}: <span id="titulo${i + 1}" >${
        element.titulo
      }</span></h2><br><br>
          <h2>Tipo: <span>${aux}</span></h2><br><br>
          <h2>Unidades: <span>${element.unidades}</span></h2>
        </div>
        <div class="col-1" style="text-align: center; margin: 10px;"> 
          <h2>Descripción:</h2><br>
          <p id="descripcion${i + 1}" style="text-align: justify;">${
        element.descripcion
      }</p>
        </div>
        <div class=" col-1" style="text-align: center; margin-top: 10px;">
          <h2>Fecha Inicio: <span id="fecha_inicio${
            i + 1
          }">${fechaString}</span></h2><br><br>
          <h2>Fecha Final: <span id="fecha_fin${
            i + 1
          }">${fechaString1}</span></h2><br><br>
          <h2>Presupuesto: <span id="presupuesto${i + 1}">${
        element.presupuesto
      }$</span></h2>
        </div>
      </div>
      <br>`;
    });
    
  

  const page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Plan Carrera - Mi plan Carrera</title>
        <meta name="description" content="">
        <meta name="author" content="templatemo">
        <!-- 
        Visual Admin Template
        https://templatemo.com/tm-455-visual-admin
        -->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
        <link href="/estilos/css/font-awesome.min.css" rel="stylesheet">
        <link href="/estilos/css/bootstrap.css" rel="stylesheet">
        <link href="/estilos/css/templatemo-style.css" rel="stylesheet">
        
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <script>    
          function defyForm() {
            // Cambia el atributo 'action' del formulario para apuntar a la URL de actualización
            document.getElementById("myForm").action = "/denegarPropuestaDirectivo/${propuestaExistente[0].id_PP}";
            // Envía el formulario
            document.getElementById("myForm").submit();
          }

          function submitForm() {
            // Cambia el atributo 'action' del formulario para apuntar a la URL de envío de propuesta
            document.getElementById("myForm").action = "/aprobarPropuestaDirectivo/${propuestaExistente[0].id_PP}";
            document.getElementById("myForm").submit();
        } 
    
        </script>
  
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  
      <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
  
        function drawChart() {
  
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Unidades'],
            ['Unidades Usadas',${unit} ],
            ['Unidades de retorno',${ur}],
            ['Unidades desarrollo personal',${unit - ur}]
          ]);
  
          var options = {
            title: 'Unidades totales',
            colors: ['green']
          };
  
          var chart = new google.visualization.BarChart(document.getElementById('barchartU'));
  
          chart.draw(data, options);
        }
      </script>
      </head>
      <body>  
        <!-- Left column -->
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

                  <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="/buzon" class="active"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="/clasificaciones" id="link"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
                  
                  <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
       
                </ul>  
              </nav>
          </div>
          <!-- Main content --> 
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-content-container">         
              <form action="/enviarPropuesta" id="myForm" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded">
                <div class="templatemo-content-widget white-bg">
                    <div class="templatemo-widget-content templatemo-flex-row">
                
                      <div id="barchartU" style="width: 50%; height: 250px;"></div>
                      <div class="templatemo-content-widget light-gray-bg col-2" style="width: 50%;">
                        <h2>Unidades totales:  ${unit} / 72</h2><br>
                        <label for="inputLastName">Título</label>
                        <input type="text" class="form-control" name="TituloPC" value="${
                          propuestaExistente[0].titulo
                        }" style="opacity: 1;">
                        <br>
                        <label for="inputLastName">Objetivo</label>
                        <input type="text" class="form-control" name="ObjetivoPC" value="${
                          propuestaExistente[0].objetivo
                        }" style="opacity: 1;">
                        <br>
                        <label for="inputLastName">Descripción</label>
                        <input type="text" class="form-control" name="DescripcionPC" value="${
                          propuestaExistente[0].descripcion
                        }" style="opacity: 1;">
                        <div class="templatemo-widget-content templatemo-flex-row" style="display: grid; place-items: center;">
                        <button type="button" class="templatemo-blue-button" style="margin-left: 5px" onclick="submitForm()">Aprobar Propuesta</button>
                        <button type="button" class="templatemo-blue-button" style="margin-left: 5px" onclick="defyForm()">Rechazar Propuesta</button>
                        </div>
  
                      </div>
                       
                    </div>
                    </form>
                    <!-- actividades -->
                    ${res}
                    <!-- Formulario -->
                    <hr>
              
                  <hr>
                    
                  
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

function creadorDePaginaVisualizacionP(usuario) {
  let res = "";
  usuario.forEach((element) => {

      res += `<tr>
      <td>${element.Nombre}</td>
      <td>${element.Apellido}</td>
      <td>${element.Rol}</td>
      <td>${element.Cargo}</td>
      <td>${element.TituloPC}</td>
      <td><a href="/planCarrera/${element.Id_PC}">Ver Perfil</a></td>
    </tr>`;
    
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

                <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
    
                <li><a href="buzon"><img class="icon" src="images/buzón.png" alt=""><br>Buzón</a></li>
                  
                <li><a href="grupos"><img class="icon" src="images/grupo.png" alt=""><br>Grupos</a></li>
                
                <li><a href="empresa" class="active"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
    
                <li><a href="clasificaciones" id="link"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                
                <li><a href="mislogros"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
  
                <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
    
                <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
    
              </ul>  
            </nav>
        </div> 
        <div class="templatemo-content col-1 light-gray-bg">
        <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href=""class="active">Integrantes de la Empresa</a></li>
                    <li><a href="">Planes Carrera de los Integrantes</a></li>
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
                      <td>Nombre</td>
                      <td>Apellido</td>
                      <td>Rol</td>
                      <td>Cargo</td>
                      <td>Plan Carrera</td>
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

function creadorDePaginaVisualizacionPlanC(usuarioPlanCarrera,planCarrera,actividades){
  let res = "";
  let aux = "";
  let aux1 = "";
  let aux2 = "";


  actividades.forEach((element,i) => {
        var dia = actividades[i].FechaInicioActividad.getDate();
        var mes = actividades[i].FechaInicioActividad.getMonth() + 1;
        var anio = actividades[i].FechaInicioActividad.getFullYear();
        var fechaComoString = dia + '/' + mes + '/' + anio;
        var dia1 = actividades[i].FechaFinActividad.getDate();
        var mes1 = actividades[i].FechaFinActividad.getMonth() + 1;
        var anio1 = actividades[i].FechaFinActividad.getFullYear();
        var fechaComoString1 = dia1 + '/' + mes1 + '/' + anio1;

        if (actividades[i].TipoActividad == 1) {
          aux="Retorno a Vortex Bird";
        }else{
          aux="Desarrollo Personal";
        }
        if (actividades[i].EstadoActividad == 1) {
          aux1="Completada";
          aux2=``;
        }else{
          aux1="En Curso";
          aux2=`<div class="templatemo-block margin-bottom-5">
          <input type="checkbox" name="Completada" id="completada" value="weekly">
          <label for="completada" class="font-weight-400"><span></span>Completada</label> 
        </div>`
        }
        res+= `<div class="templatemo-widget-content templatemo-flex-row">
        <div class="col-1" style="text-align: center; margin-top: 10px; width: 100px;">
          <h2>Actividad ${i+1}: ${actividades[i].TituloActividad}</h2><br><br>
          <h2>Tipo: ${aux}</h2><br><br>
          <h2>Unidades: ${actividades[i].UnidadesActividad}</h2><br><br>
          <form action="/subirEvidencia/${actividades[i].IdActividad}" method="post" enctype="multipart/form-data">
      <input type="file" name="evidencia" multiple>
      <input type="hidden" name="actividadId" value="${actividades[i].IdActividad}">
      <button type="submit" class="evidenciaalo">Subir Evidencia</button>
    </form>
        </div>
        <div class="col-1" style="text-align: center; margin: 10px;"> 
          <h2>Descripción:</h2><br>
          <p style="text-align: justify;">${actividades[i].DescripcionActividad}</p>
        </div>
        <div class=" col-1" style="text-align: center; margin-top: 10px;">
          <h2>Fecha Inicio: ${fechaComoString}</h2><br><br>
          <h2>Fecha Final: ${fechaComoString1}</h2><br><br>
          <h2>Estado: ${aux1}</h2><br><br>
          ${aux2}
        </div>
      </div>
      <hr>`
  });
  
  const page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Plan Carrera - Mi plan Carrera</title>
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

                <li><a href="/mi-plan-carrera" class="active"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
    
                <li><a href="buzon"><img class="icon" src="images/buzón.png" alt=""><br>Buzón</a></li>
                  
                <li><a href="grupos"><img class="icon" src="images/grupo.png" alt=""><br>Grupos</a></li>
                
                <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
    
                <li><a href="clasificaciones" id="link"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                
                <li><a href="mislogros"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
                
                <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
    
                <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
    
              </ul>  
            </nav>
        </div>
        <!-- Main content --> 
        <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-top-nav-container">
            <div class="row">
              <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left:40%;">
                <ul class="text-uppercase">
                  <li><a href=""class="active">Mi Plan Carrera</a></li>
                  <li><a href="propuesta">Proponer</a></li>
                </ul>  
              </nav> 
            </div>
          </div>
          <div class="templatemo-content-container">         
            <div class="templatemo-content-widget white-bg">
              
              <div class="panel panel-default no-border">
                <div class="panel-body">
                    <div class="templatemo-flex-row" style=" text-align: center;">
                        <div class="col-lg-6 col-md-12" style="width: 420px;">
                          <div id="pie_chart_div" class="templatemo-chart-small"></div> 
                        </div>
                        
                      
                      <div style="text-align: center; width: 100%;">
                        <div class="panel panel-default no-border"> 
                          <div class="panel-heading border-radius-10">
                            <h2>${planCarrera[0].TituloPlanCarrera}</h2>
                          </div>
                        </div>
                        <div class="templatemo-content-widget light-gray-bg">
                          <p>Objetivo: ${planCarrera[0].ObjetivoPlanCarrera}</p>
                          <p style="text-align: justify;">
                            ${planCarrera[0].DescripcionPlanCarrera}
                          </p>
                        </div>
                        
                      </div>
                    </div>
                    <hr>
                    ${res}
                    <details>
                <summary>
                  <h2>Grupos de actividades</h2>
                  <span class="icon">▼</span>
                </summary>
                <br>
                <!-- ------ -->
                <div>
                  <h2>De Retorno</h2><br>
                    <details>
                      <summary>
                        <p>Cambiar Nombre</p>
                      </summary>
                      <div>
                        <form action="cambiarnombregrupo">
                          <input type="text" name="nombre" placeholder="Nombre">
                          <input type="submit" value="Cambiar">
                        </form>
                      </div>
                      <br>
                    </details>
                    <details>
                      <summary>
                        <p>Actividades</p>
                      </summary>
                      <div>
                        <form action="cambiarnombregrupo">
                          <ul>
                            <li>
                              <input type="checkbox" name="actividad1"> conferencia liderazgo
                            </li>
                            <li>
                              <input type="checkbox" name="actividad2"> leer clean code
                            </li>
                            <li>
                              <input type="checkbox" name="actividad3"> taller liderazgo
                            </li>
                            <br>  
                            <input type="submit" value="Actualizar">
                          </ul>
                        </form>
                      </div>
                      <br>
                    </details>
                  <a href="#">Eliminar</a>
                </div>
                <hr>
                <!-- ------ -->
                <div>
                  <h2>Conferencias</h2><br>
                    <details>
                      <summary>
                        <p>Editar</p>
                      </summary>
                      <div>
                        <form action="cambiarnombregrupo">
                          <input type="text" name="nombre" placeholder="Nombre">
                          <input type="submit" value="Cambiar">
                        </form>
                      </div>
                      <br>
                    </details>
                    <details>
                      <summary>
                        <p>Actividades</p>
                      </summary>
                      <div>
                        <form action="cambiarnombregrupo">
                          <ul>
                            <li>
                              <input type="checkbox" name="actividad1"> conferencia liderazgo
                            </li>
                            <li>
                              <input type="checkbox" name="actividad2"> leer clean code
                            </li>
                            <li>
                              <input type="checkbox" name="actividad3"> taller liderazgo
                            </li>
                            <br>  
                            <input type="submit" value="Actualizar">
                          </ul>
                        </form>
                      </div>
                      <br>
                    </details>
                    <a href="#">Eliminar</a>
                </div>
                <hr>
                <!-- ------ -->
                <div>
                  <h2>Cursos</h2><br>
                    <details>
                      <summary>
                        <p>Editar</p>
                      </summary>
                      <div>
                        <form action="cambiarnombregrupo">
                          <input type="text" name="nombre" placeholder="Nombre">
                          <input type="submit" value="Cambiar">
                        </form>
                      </div>
                      <br>
                    </details>
                    <details>
                      <summary>
                        <p>Actividades</p>
                      </summary>
                      <div>
                        <form action="cambiarnombregrupo">
                          <ul>
                            <li>
                              <input type="checkbox" name="actividad1"> conferencia liderazgo
                            </li>
                            <li>
                              <input type="checkbox" name="actividad2"> leer clean code
                            </li>
                            <li>
                              <input type="checkbox" name="actividad3"> taller liderazgo
                            </li>
                            <br>  
                            <input type="submit" value="Actualizar">
                          </ul>
                        </form>
                      </div>
                      <br>
                    </details>
                    <a href="#">Eliminar</a>
                </div>
                <hr>
                <!-- ------ -->
                <div>

                    <details>
                      <summary>
                        <h2>Crear nuevo grupo</h2>
                      </summary>
                      <br>
                      <div>
                        <form action="Crearnuevogrupo">
                          <input type="text" name="nombre" placeholder="Nombre">
                          <input type="submit" value="Crear">
                        </form>
                      </div>
                      <br>
                    </details>
                </div>
                <hr>
                <br>
              </details>            
              
            </div>        
          </div>
          <footer class="text-right">
              <p>Copyright &copy; 2023 Vortex Bird 
              | Design: InnovateU</p>
            </footer> 
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
              ['Completo', ${usuarioPlanCarrera[0].PorcentajeCompletitud}],
              ['Incompleto', ${100-(usuarioPlanCarrera[0].PorcentajeCompletitud)}],
            ]);
  
            // Set chart options
            var options = {'width':380, 'height':250};
  
            // Instantiate and draw our chart, passing in some options.
            var pieChart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
            pieChart.draw(data, options);
  
        }
        
      </script>
  
    </body>
  </html>`
  return page
}

module.exports = {
  creadorDePaginaEmpresa,
  creadorDePaginaBuzon, 
  creadorDePaginaBuzonCoach,
  creadorDePaginaVistaPropuestas,
  creadorDePaginaVisualizacionP,
  creadorDePaginaVisualizacionPlanC}
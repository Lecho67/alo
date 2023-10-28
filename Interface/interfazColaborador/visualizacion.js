function creadorDePaginasMiGrupo(miGrupo) {
  let padrino = miGrupo.find((x) => x.RolParticipacion == "P");
  miGrupo = miGrupo.filter((x) => x.RolParticipacion !== "P");
  const incompletitud = 100 - padrino.PorcentajeCompletitud;
  let colaboradoresHtml = "";
  miGrupo.forEach((colaborador, index) => {
    colaboradoresHtml += `
      <div class="col-1 templatemo-overflow-hidden">
        <div class="templatemo-content-widget white-bg templatemo-overflow-hidden">
          <div class="templatemo-flex-row flex-content-row">
            <div class="col-1" style="text-align: center; width: 30%;">
              <h2 class="text-uppercase">Colaborador ${index + 1}:</h2>
              <h3 class="text-uppercase margin-bottom-10">${
                colaborador.Nombre
              } ${colaborador.Apellido}</h3>
              <img src="/foto/${
                colaborador.Identificacion
              }"  class="imgcircle"><br><br>
              <a href="/perfil/${
                colaborador.Identificacion
              }" class="templatemo-more-btn">Ver Perfil</a>
            </div>
            <div style="text-align: center;">
              <h2 class="text-uppercase">Porcentaje de Completitud: </h2><br>
              <div id="piechart${index}" style="width: 280px; height: 250px; background-color: transparent;float: right"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  let scriptsHtml = "";

  miGrupo.forEach((colaborador, index) => {
    scriptsHtml += `
      <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart${index});

        function drawChart${index}() {
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Completo', ${colaborador.PorcentajeCompletitud}],
            ['Incompleto', ${100 - colaborador.PorcentajeCompletitud}]
          ]);

          var options = {
            title: '',
            legend: 'none',
            pieSliceText: 'label',
            pieSliceTextStyle: {
              color: 'white',
              fontSize: 12
            },
            chartArea: {
              top: 30,
              height: '70%'
            }
          };

          var chart = new google.visualization.PieChart(document.getElementById('piechart${index}'));

          chart.draw(data, options);
        }
      </script>
    `;
  });

  let colaboradoresPuntosData = "['Persona', 'Puntos'],\n";

  miGrupo.forEach((colaborador, index) => {
    colaboradoresPuntosData += `['${colaborador.Nombre}', ${colaborador.PuntosLogroTotales}],\n`;
  });

  const puntosChartScript = `
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ${colaboradoresPuntosData}
        ]);

        var options = {
          title: 'Puntos de logros totales',
          width: '100%', // Establece el ancho al 100%
          height: '100%' // Establece el alto al 100%
        };
        
        var chart = new google.visualization.BarChart(document.getElementById('barchart'));

        chart.draw(data, options);
      }
    </script>
  `;

  const page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Plan Carrera - Mi Grupo</title>
      <meta name="description" content="">
      <meta name="author" content="templatemo">
      <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
      <link href="/estilos/css/font-awesome.min.css" rel="stylesheet">
      <link href="/estilos/css/bootstrap.css" rel="stylesheet">
      <link href="/estilos/css/templatemo-style.css" rel="stylesheet">
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Completo',${padrino.PorcentajeCompletitud}],
          ['Incompleto',${incompletitud}]
        ]);

        var options = {
          title: '',
      legend: 'none', // Deshabilita la leyenda
      pieSliceText: 'label', // Muestra las etiquetas en las porciones de la gráfica
      pieSliceTextStyle: {
        color: 'white', // Color del texto
        fontSize: 12 // Tamaño de la fuente
      },
      chartArea: {
        top: 30, // Espacio arriba de la gráfica para los títulos
        height: '70%' // Altura de la gráfica (ajusta según tu preferencia)
      }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>

    ${scriptsHtml}

    ${puntosChartScript}
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
          <nav class="templatemo-left-nav">          
            <ul>
              <li><a href="/inicio"><img class = "icon" src="/images/casita.png" alt=""><br>Inicio</a></li>
  
              <li><a href="/buzon"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
                
              <li><a href="/grupos"class="active"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>

              <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
              
              <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
  
              <li><a href="/clasificaciones" id="link"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
  
              <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
  
              <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
  
              <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
  
            </ul>  
          </nav>
        </div>
        <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-top-nav-container">
            <div class="row">
              <nav class="templatemo-top-nav col-lg-12 col-md-12"style="margin-left: 35%;">
                <ul class="text-uppercase">
                  <li><a href="/grupos" >Todos</a></li>
                  <li><a href="/migrupo" class="active">Mi Grupo</a></li>
                </ul>  
              </nav>
            </div>
          </div>
          <div class="templatemo-content-container">
            <div class="templatemo-flex-row flex-content-row">
              <div class="templatemo-content-widget white-bg  text-center">
                <h2 class="text-uppercase">${padrino.NombreGrupo}</h2><br><br>
                <img src="/imagen/${padrino.id_grupo}"  class="imgcircle"><br><br>
            </div>
              <div class="templatemo-content-widget white-bg col-2">
              <div id="barchart" style="width: 100%; height: 300px;background-color: transparent; float: center; padding: 0;"></div>
              </div>
              
            </div>
            <div class="templatemo-flex-row flex-content-row">  
                <div class="col-1 templatemo-overflow-hidden">
                  <div class="templatemo-content-widget white-bg templatemo-overflow-hidden">
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="col-1" style="text-align: center; width: 10%;">
                        <h2 class="text-uppercase">Padrino:</h2>
                        <h3 class="text-uppercase margin-bottom-10">${padrino.Nombre} ${padrino.Apellido}</h3>
                        <img src="/foto/${padrino.Identificacion}"  class="imgcircle"><br><br>
                        <a href="miperfil" class="templatemo-more-btn">Ver Perfil</a>
                      </div>
                      <div style="text-align: center;">
                        <h2 class="text-uppercase">Porcentaje de Completitud: </h2><br>
                        <div id="piechart" style="width: 280px; height: 250px; background-color: transparent; float: right; padding: 0;"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                                   
            </div>
            ${colaboradoresHtml}


            </div>
            <footer class="text-right">
            <p>Copyright &copy; 2023 Vortex Bird 
            | Design: InnovateU</p>
            </footer>  
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;
  return page;
}
// FALTA SER DINAMICA GRUPOS
function creadorDePaginasGrupos(Miembrosgrupos,grupos) {
  let res = "";
  grupos.forEach((grupo) => {
    const miembros = Miembrosgrupos.filter((miembro) => miembro.id_grupo === grupo.id_grupo);

    res += `<div class="templatemo-content-container">
      <div class="templatemo-content-widget white-bg col-2">
        <div class="media margin-bottom-30">
          <div class="media-left padding-right-25">
            <a href="#">
              <img class="media-object groupimgcircle templatemo-img-bordered " src="/imagen/${grupo.id_grupo}" alt="">
            </a>
          </div>
          <div class="media-body">
            <h2 class="media-heading text-uppercase blue-text">${grupo.nombre}</h2>
          </div>        
        </div>
        <div class="table-responsive">
          <table class="table">
            <tbody>
              ${miembros.map((miembro) => `
                <tr>
                  <td><div class="circle ${miembro.RolParticipacion === 'P' ? 'pink-bg' : 'blue-bg'}"></div></td>
                  <td>${miembro.Nombre}</td>
                  <td>${miembro.PorcentajeCompletitud}%</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>             
      </div>
    </div>`;
  });
  const npage = `<!DOCTYPE html>
    <html lang="en">
     <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Visual Admin Dashboard - Maps</title>
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
            <nav class="templatemo-left-nav">          
              <ul>
                <li><a href="inicio"><img class = "icon" src="images/casita.png" alt=""><br>Inicio</a></li>
    
                <li><a href="buzon"><img class="icon" src="images/buzón.png" alt=""><br>Buzón</a></li>
                  
                <li><a href="grupos" class="active"><img class="icon" src="images/grupo.png" alt=""><br>Grupos</a></li>

                <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
                
                <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
    
                <li><a href="/clasificaciones"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                
                <li><a href="mislogros"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
  
                <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
    
                <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
    
              </ul>  
            </nav>
          </nav>
        </div>
        <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-top-nav-container">
            <div class="row">
              <nav class="templatemo-top-nav col-lg-12 col-md-12"style="margin-left: 35%;">
                <ul class="text-uppercase">
                  <li><a href="" class="active">Todos</a></li>
                  <li><a href="/migrupo">Mi Grupo</a></li>
                </ul>  
              </nav>
            </div>
          </div>
        ${res}                  
            <footer class="text-right">
              <p>Copyright &copy; 2023 VortexBird Desing: InnovateU</p>
            </footer>         
          </div>
        </div>
      </div>
    </body>
    </html>`;
  return npage;
}
// Visualizacion del perfil de un usuario a
function creadorDePaginasPerfil(usuarioPerfil) {
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
        <link href="/estilos/css/font-awesome.min.css" rel="stylesheet">
        <link href="/estilos/css/bootstrap.css" rel="stylesheet">
        <link href="/estilos/css/templatemo-style.css" rel="stylesheet">
        
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
              <img src="/images/profile-photo.png" alt="Profile Photo" class="img-responsive"> 
            </div>
            <div class="mobile-menu-icon">
                <i class="fa fa-bars"></i>
              </div>
              <nav class="templatemo-left-nav">          
                <ul>
                  <li><a href="/inicio"><img class = "icon" src="/images/casita.png" alt=""><br>Inicio</a></li>
      
                  <li><a href="/buzon"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
                  
                  <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="/clasificaciones" id="link"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
                  
                  <li><a href="/miperfil" class="active"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
          </div>
          <!-- Main content --> 
          <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-top-nav-container">
          <div class="row">
            <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 25%;">
              <ul class="text-uppercase">
                <li><a href=""class="active">Mi Perfil</a></li>
                <li><a href="mi-plan-carrera">Mi Plan Carrera</a></li>
                <li><a href="propuesta">Proponer</a></li>
              </ul>  
            </nav> 
          </div>
        </div>
            <div class="templatemo-content-container">         
              <div class="templatemo-content-widget white-bg">
                
                <div class="panel panel-default no-border">
                  <div class="panel-heading border-radius-10">
                    <h2 class="text-uppercase">${usuarioPerfil[0].Nombre}</h2>
                  </div>
                  
                  <div class="panel-body">
                      <div class="templatemo-flex-row" style=" text-align: center;">
                        <div class="templatemo-content-widget light-gray-bg" style="height: 500px; width: 50%;">
                          <img src="/foto/${
                            usuarioPerfil[0].id
                          }" class="imgcircle_perfil" ><br><br>
                            <div class="templatemo-flex-row flex-content-row">
                              <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                <img class="insignia-mostrada-en-perfil-2" src="/images/Insignias/7g.png" alt="">
            
                              </div>
                              <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                <img class="insignia-mostrada-en-perfil-2" src="/images/Insignias/god.png" alt="">
            
                              </div>
                              <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                <img class="insignia-mostrada-en-perfil-2" src="/images/Insignias/decepticon.png" alt="">
            
                              </div>
                            </div>
                          
                        </div>
                        <div style="text-align: center; margin: 30px; width: 50%;">
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
                <p>Copyright &copy; 2023 VortexBird Desing: InnovateU 
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
                ['Incompleto', ${
                  100 - usuarioPerfil[0].PorcentajeCompletacion
                }],
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

module.exports = { creadorDePaginasMiGrupo, creadorDePaginasGrupos ,creadorDePaginasPerfil};

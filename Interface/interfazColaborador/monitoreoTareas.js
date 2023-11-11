// Controlador de Tareas y Subida de evidencias
function miPlanCarrera(usuarioPlanCarrera,planCarrera,actividades){
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
        <input type="file" name="evidencia">
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
                <nav class="templatemo-top-nav col-lg-12 col-md-12">
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

module.exports={miPlanCarrera}
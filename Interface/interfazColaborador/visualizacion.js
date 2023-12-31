function creadorDePaginasMiGrupo(miGrupo,misGrupos,i) {
  let padrino = miGrupo.find((x) => x.RolParticipacion == "P");
  miGrupo = miGrupo.filter((x) => x.RolParticipacion !== "P");
  const incompletitud = 100 - padrino.PorcentajeCompletitud;
  let colaboradoresHtml = "";
  let ul = "";
  misGrupos.forEach((grupo, index) => {
    if (i == index) {
      ul += `
      <li><a href="/migrupo/${index}" class="active">${grupo.nombre}</a></li>
  `;
    }else{
      ul += `
      <li><a href="/migrupo/${index}">${grupo.nombre}</a></li>
  `;
    }

  });
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
        <div class="profile-photo-container">
          <img src="/images/Vortexbird.desarrolloSoftware.png" alt="Profile Photo" class="img-responsive">
        </div> 
      </header>
        
      <nav class="templatemo-left-nav">          
        <ul>
          <li><a href="/inicio"><img class = "icon" src="/images/casita.png" alt="">Inicio</a></li>

          <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt="">Mi Plan Carrera </a></li>

          <li><a href="/buzon"><img class="icon" src="/images/buzón.png" alt="">Buzón</a></li>
            
          <li><a href="/grupos" class="active"><img class="icon" src="/images/grupo.png" alt="">Grupos</a></li>
          
          <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt="">Empresa</a></li>

          <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>

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
                  <li><a href="/grupos" >Todos</a></li>
                  ${ul}
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

function creadorDePaginasGrupos(Miembrosgrupos, grupos, misGrupos) {
  let res = "";
  let ul = "";
  misGrupos.forEach((grupo, index) => {
    ul += `
        <li><a href="/migrupo/${index}">${grupo.nombre}</a></li>
    `;
  });
  grupos.forEach((grupo) => {
    const miembros = Miembrosgrupos.filter((miembro) => miembro.id_grupo === grupo.id_grupo);

    res += `
      
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
      
    `;
  });

  const npage = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Plan Carrera - Grupos</title>
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
              
            <li><a href="/grupos" class="active"><img class="icon" src="/images/grupo.png" alt="">Grupos</a></li>
            
            <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt="">Empresa</a></li>

            <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>

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
                    <li><a href="" class="active">Todos</a></li>
                    ${ul}
                  </ul>  
                </nav>
              </div>
            </div>
          <div class="templatemo-content-container">
            ${res}      
            <div class="templatemo-content-widget white-bg col-2">
              <details>
                <summary>
                  <h2>Crear nuevo grupo</h2>
                  <span class="icon">▼</span>
                </summary>
                <br>
                <div>
                  <form action="Crearnuevogrupodecolab">
                  <hr>
                  <h2>Padrino:</h2>
                  <br>
                    <select name="padrino" id="padrino">
                      <option value="">Selecciona un padrino</option>
                      <!-- Opciones para padrino -->
                    </select>
                    <hr>
                    <br>
                    <h2>Colaboradores:</h2>
                    <br>

                      <h3> • Juanestebane</h3>
                      <details class="ajustar-detalles-claro">
                        <summary>
                          <h4>Editar</h4>
                          </summary>
                        <div>
                          <br>
                          <p><a href="">Eliminar Del Grupo</a></p>
                          <br>
                          <form action="Actualizarcolaborador">
                            <select name="colaborador" id="colaborador">
                              <option value="">Selecciona el colaborador 1</option>
                              <!-- Opciones para colaborador 1 -->
                            </select>
                            <input type="submit" value="Actualizar">
                          </form>
                        </div>
                      </details>
                      <br>

                      <h3> • Infopablo</h3>
                      <details class="ajustar-detalles-claro">
                        <summary>
                          <h4>Editar</h4>
                          </summary>
                        <div>
                          <br>
                          <p><a href="">Eliminar Del Grupo</a></p>
                          <br>
                          <form action="Actualizarcolaborador">
                            <select name="colaborador" id="colaborador">
                              <option value="">Selecciona el colaborador 1</option>
                              <!-- Opciones para colaborador 1 -->
                            </select>
                            <input type="submit" value="Actualizar">
                          </form>
                        </div>
                      </details>
                      <br>

                      <h3> • Esteban</h3>
                      <details class="ajustar-detalles-claro">
                        <summary>
                          <h4>Editar</h4>
                          </summary>
                        <div>
                          <br>
                          <p><a href="">Eliminar Del Grupo</a></p>
                          <br>
                          <form action="Actualizarcolaborador">
                            <select name="colaborador" id="colaborador">
                              <option value="">Selecciona el colaborador 1</option>
                              <!-- Opciones para colaborador 1 -->
                            </select>
                            <input type="submit" value="Actualizar">
                          </form>
                        </div>
                      </details>
                      <br>


                    <hr>
                    <h2>Agregar Colaborador:</h2>
                    <br>
                    <form action="Agregarcolaborador">
                      <select name="colaborador" id="colaborador">
                        <option value="">Selecciona el colaborador</option>
                        <!-- Opciones para colaborador 1 -->
                      </select>
                      <input type="submit" value="Agregar">
                    </form>
                    <hr>
                    <input type="submit" value="Crear Nuevo Grupo">
                  </form>
                </div>
                <br>
              </details>
            </div>
          </div>
          <footer class="text-right">
          <p>Copyright &copy; 2023 VortexBird Design: InnovateU</p>
        </footer> 
          </div>
        </div>
        
      </body>
    </html>
  `;

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
            
            <li><a href="/empresa" class="active"><img class= "icon"src="/images/Empresa.png" alt="">Empresa</a></li>

            <li><a href="/clasificaciones" id="link"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>

            <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt="">Logros</a></li>
            
            <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt="">Mi Perfil</a></li>
          </ul>  
        </nav>
      </div>
          <!-- Main content --> 
          <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-top-nav-container">
          <div class="row">
            <nav class="templatemo-top-nav col-lg-12 col-md-12">
              <ul class="text-uppercase">
                <li><a class="active">Perfil de ${usuarioPerfil[0].Nombre} ${usuarioPerfil[0].Apellido}</a></li>
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
                                <img class="insignia-mostrada-en-perfil-2" src="/fotoMedalla/${usuarioPerfil[0].medalla_1}" alt="">
            
                              </div>
                              <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                <img class="insignia-mostrada-en-perfil-2" src="/fotoMedalla/${usuarioPerfil[0].medalla_2}" alt="">
            
                              </div>
                              <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                <img class="insignia-mostrada-en-perfil-2" src="/fotoMedalla/${usuarioPerfil[0].medalla_3}" alt="">
            
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

        </script>
    
      </body>
    </html>`;
  return page;
}

module.exports = { creadorDePaginasMiGrupo, creadorDePaginasGrupos ,creadorDePaginasPerfil};

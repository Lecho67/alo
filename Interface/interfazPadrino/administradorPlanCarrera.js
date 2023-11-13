function creadorDePaginaBuzon(propuestas,evidencias) {
  let res = "";
  let res1 = "";

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
      <div class="profile-photo-container">
        <img src="/images/Vortexbird.desarrolloSoftware.png" alt="Profile Photo" class="img-responsive">
      </div> 
    </header>
      
    <nav class="templatemo-left-nav">          
      <ul>
        <li><a href="/inicio"><img class = "icon" src="/images/casita.png" alt="">Inicio</a></li>

        <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt="">Mi Plan Carrera </a></li>

        <li><a href="/buzon" class="active"><img class="icon" src="/images/buzón.png" alt="">Buzón</a></li>
          
        <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt="">Grupos</a></li>
        
        <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt="">Empresa</a></li>

        <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>

        <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt="">Logros</a></li>
        
        <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt="">Mi Perfil</a></li>
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
    unit += parseInt(element.unidades);
  });

    actividadesPropuestas.forEach((element, i) => {
      var dia = element.fecha_inicio.getDate();
      var mes = element.fecha_inicio.getMonth() + 1;
      var anio = element.fecha_inicio.getFullYear();
      var fechaString = dia + "/" + mes + "/" + anio;
      var fechaISO = element.fecha_inicio.toISOString().slice(0, 10);
      var dia1 = element.fecha_fin.getDate();
      var mes1 = element.fecha_fin.getMonth() + 1;
      var anio1 = element.fecha_fin.getFullYear();
      var fechaString1 = dia1 + "/" + mes1 + "/" + anio1;
      var fechaISO1 = element.fecha_fin.toISOString().slice(0, 10);
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
          <h2>Presupuesto: <span id="presupuesto${i + 1}">$${
        element.presupuesto
      }</span></h2>
        </div>
      </div>
      <br>
      <details class="ajustar-detalles-claro">
        <summary style="text-align: center;">
          <h4 style="text-align: left;">Editar Actividad</h4>
          <span style="text-align: left;" class="icon">▼</span>
        </summary>
                    <div>
                      <form action="/actualizarActividadPropuesta/${
                        element.id_PA
                      }" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded" onsubmit="return validarFormulario(${
        element.id_PA
      })">
                        <div class="templatemo-widget-content templatemo-flex-row">
                          <div class="col-1" style="text-align: center; margin-top: 10px; width: 100px;">
                            <label for="inputLastName">Nombre De La Actividad</label>
                            <input type="text" class="form-control" id="TituloActividad${
                              element.id_PA
                            }" name ="TituloActividad" placeholder="Ingrese un Nombre" value="${element.titulo}" maxlength="399"><br> 
                            <label for="inputLastName">Tipo de Actividad</label><br>
                            <select id="TipoActividad${
                              element.id_PA
                            }" name="TipoActividad">
                              <option>Retorno A Vortex Bird</option>
                              <option>Desarrollo Personal</option>
                            </select><br><br>
                            <label for="UnidadesActividad">Unidades:</label>
                            <input type="number" class="form-control" id="UnidadesActividad${
                              element.id_PA
                            }" name="UnidadesActividad" placeholder="Ingrese el número de unidades que usa esta actividad" min="1" max="${
        72 + element.unidades - unit
      }" value="${element.unidades}">
                          </div>
    
                          <div class="col-1" style="text-align: center; margin: 10px;"> 
                            <label for="inputLastName" >Descripción De La Actividad</label>
                            <textarea  class="form-control" id="DescripcionActividad${
                              element.id_PA
                            }" name ="DescripcionActividad" cols="30" rows="10" placeholder="Descripción de la actividad" style="resize: none" maxlength="1000">${element.descripcion}</textarea>
                          </div>
    
                          <div class=" col-1" style="text-align: center; margin-top: 10px;">
                            <label for="inputLastName">Fecha Inicio</label>
                            <input type="date" class="form-control" id="FechaInicio${
                              element.id_PA
                            }" name ="FechaInicio" placeholder="Fecha Inicio" value="${fechaISO}"><br><br>
                            <label for="inputLastName">Fecha Finalización</label>
                            <input type="date" class="form-control" id="FechaFinalizacion${
                              element.id_PA
                            }" name ="FechaFinalizacion" placeholder="Fecha Finalización" value="${fechaISO1}"><br><br>
                            <label for="inputLastName">Presupuesto de la Actividad</label>
                            <input type="number" class="form-control" id="Presupuesto${
                              element.id_PA
                            }" name ="Presupuesto" placeholder="Ingrese el presupuesto en COP" min="0" max="1000000000" value="${element.presupuesto}"><br>
                            <div class="templatemo-flex-row">
                              <div>
                                <button type="submit" class="templatemo-blue-button">Actualizar</button>
                              </div>
                              <div>
                                <button type="button" class="templatemo-blue-button" onclick="eliminarActividad(${
                                  element.id_PA
                                })">Eliminar Actividad</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <br>
      </details>`;
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
          function eliminarActividad(idActividad) {
            document.getElementById("myForm").action = "/eliminarActividadPropuesta/"+idActividad;
            // Envía el formulario
            document.getElementById("myForm").submit();
        }
  
          function updateForm() {
            // Cambia el atributo 'action' del formulario para apuntar a la URL de actualización
            document.getElementById("myForm").action = "/actualizarPropuesta/${propuestaExistente[0].id_PP}";
            // Envía el formulario
            document.getElementById("myForm").submit();
          }

          function defyForm() {
            // Cambia el atributo 'action' del formulario para apuntar a la URL de actualización
            document.getElementById("myForm").action = "/denegarPropuesta/${propuestaExistente[0].id_PP}";
            // Envía el formulario
            document.getElementById("myForm").submit();
          }

          function submitForm() {
            // Cambia el atributo 'action' del formulario para apuntar a la URL de envío de propuesta
            document.getElementById("myForm").action = "/aprobarPropuesta/${propuestaExistente[0].id_PP}";
  
            // Envía el formulario
            if (${unit}==72){
            document.getElementById("myForm").submit();
          }else{
            alert("Por favor, complete las unidades necesaria.");
          }
        } 
  
        function validarFormulario(id) {
            var tituloActividad = document.getElementById('TituloActividad'+id).value;
            var tipoActividad = document.getElementById('TipoActividad'+id).value;
            var unidadesActividad = document.getElementById('UnidadesActividad'+id).value;
            var descripcionActividad = document.getElementById('DescripcionActividad'+id).value;
            var fechaInicio = document.getElementById('FechaInicio'+id).value;
            var fechaFinalizacion = document.getElementById('FechaFinalizacion'+id).value;
            var presupuesto = document.getElementById('Presupuesto'+id).value;
  
            if (tituloActividad === '' || tipoActividad === '' || unidadesActividad === '' || descripcionActividad === '' || fechaInicio === '' || fechaFinalizacion === '' || presupuesto === '') {
              alert("Por favor, complete todos los campos obligatorios.");
              return false; // Evitar el envío del formulario
          }
  
            if (fechaInicio > fechaFinalizacion) {
                alert("La fecha de finalización debe ser mayor que la fecha de inicio");
                return false;
            }

            return true;
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
          <div class="profile-photo-container">
            <img src="/images/Vortexbird.desarrolloSoftware.png" alt="Profile Photo" class="img-responsive">
          </div> 
        </header>
          
        <nav class="templatemo-left-nav">          
          <ul>
            <li><a href="/inicio"><img class = "icon" src="/images/casita.png" alt="">Inicio</a></li>

            <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt="">Mi Plan Carrera </a></li>

            <li><a href="/buzon" class="active"><img class="icon" src="/images/buzón.png" alt="">Buzón</a></li>
              
            <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt="">Grupos</a></li>
            
            <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt="">Empresa</a></li>

            <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt="">Clasificaciones</a></li>

            <li><a href="/mislogros"><img class="icon" src="/images/Insignias.png" alt="">Logros</a></li>
            
            <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt="">Mi Perfil</a></li>
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
                        }" style="opacity: 1;" maxlength="399">
                        <br>
                        <label for="inputLastName">Objetivo</label>
                        <input type="text" class="form-control" name="ObjetivoPC" value="${
                          propuestaExistente[0].objetivo
                        }" style="opacity: 1;" maxlength="399">
                        <br>
                        <label for="inputLastName">Descripción</label>
                        <input type="text" class="form-control" name="DescripcionPC" value="${
                          propuestaExistente[0].descripcion
                        }" style="opacity: 1;" maxlength="999">
                        <div class="templatemo-widget-content templatemo-flex-row" style="display: grid; place-items: center;">
                        <button type="button" class="templatemo-blue-button" style="margin-left: 5px" onclick="updateForm()">Actualizar</button>
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
                  <form action="/agregarActividadPropuesta/${
                    propuestaExistente[0].id_PP
                  }" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded" onsubmit="return validarFormulario('')">
                    <div class="templatemo-widget-content templatemo-flex-row">
                      <div class="col-1" style="text-align: center; margin-top: 10px; width: 100px;">
                        <label for="inputLastName">Nombre De La Actividad</label>
                        <input type="text" class="form-control" id="TituloActividad" name ="TituloActividad" placeholder="Ingrese un Nombre" maxlength="399"><br> 
                        <label for="inputLastName">Tipo de Actividad</label><br>
                        <select id="TipoActividad" name="TipoActividad">
                          <option>Retorno A Vortex Bird</option>
                          <option>Desarrollo Personal</option>
                        </select><br><br>
                        <label for="UnidadesActividad">Unidades:</label>
                        <input type="number" class="form-control" id="UnidadesActividad" name="UnidadesActividad" placeholder="Ingrese el número de unidades que usa esta actividad" min="1" max="${
                          72 - unit
                        }">
                      </div>
    
                      <div class="col-1" style="text-align: center; margin: 10px;"> 
                        <label for="inputLastName" >Descripción De La Actividad</label>
                        <textarea  class="form-control" id="DescripcionActividad" name ="DescripcionActividad" cols="30" rows="10" placeholder="Descripción de la actividad" style="resize: none" maxlength="999"></textarea>
                      </div>
    
                      <div class=" col-1" style="text-align: center; margin-top: 10px;">
                        <label for="inputLastName">Fecha Inicio</label>
                        <input type="date" class="form-control" id="FechaInicio" name ="FechaInicio" placeholder="Fecha Inicio"><br><br>
                        <label for="inputLastName">Fecha Finalización</label>
                        <input type="date" class="form-control" id="FechaFinalizacion" name ="FechaFinalizacion" placeholder="Fecha Finalización"><br><br>
                        <label for="inputLastName">Presupuesto de la Actividad</label>
                        <input type="number" class="form-control" id="Presupuesto" name ="Presupuesto" placeholder="Ingrese el presupuesto en COP" min="0" max="1000000000"><br>
                        <button type="submit" class="templatemo-blue-button">Agregar Actividad</button>
                      </div>
                    </div>
                  </form>
              
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

/// GENERACION DEL REPORTE-PDF del Grupo9(/generar-reporte-grupal)
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
                  <div>
                  <details class="ajustar-detalles">
                  <summary style="text-align: center;">
                    <h4 style="text-align: center;">Ajustar detalles del grupo</h4>
                  </summary>
                  <div>
                  <form action="/subirFotoGrupo/${padrino.id_grupo}" method="post" enctype="multipart/form-data">
                  <label for="nombre">Nombre:</label>
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre del grupo" style="color: #000; background-color: #fff; border: 1px solid #ccc;" maxlength="399"><br><br>
  
                  <label for="file">Foto de perfil:</label>
                  <input type="file"class="ajustar-file" name="file" id="file" accept="image/*" multiple ><br>
                  <input type="submit" class="ajustar-actulizar" value="Actualizar">
                </form>
                
                  </div>
                  <br>
                </details>
                </div>
     
      
        
        
      
                                            
                                              
                                              
                                            
      
        
        
      
     
              </div>
                <div class="templatemo-content-widget white-bg col-2">
                <div id="barchart" style="width: 100%; height: 300px;background-color: transparent; float: center; padding: 0;"></div>
                <form action="/generar-reporte-grupal" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded">
                  <button type="submit" class="btn btn-primary">Generar Reporte</button>
                  </form>
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

module.exports = {creadorDePaginasMiGrupo,creadorDePaginaBuzon,creadorDePaginaVistaPropuestas}

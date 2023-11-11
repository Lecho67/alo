function propuestas(actividadesPropuestas, propuestaExistente) {
  let res = "";
  let aux = "";
  let unit = 0;
  let ur = 0;
  let estado = "";
  let buttonAction = "";
  let buttonNueva = "";
  let buttonActualizar = "<hr>";

  actividadesPropuestas.forEach((element, i) => {
    unit += parseInt(element.unidades);
  });

  if (propuestaExistente[0].estado == "N") {
    buttonAction = `<button type="button" class="templatemo-blue-button" style="margin-left: 5px" onclick="submitForm()">Enviar Propuesta</button>`;
    buttonActualizar = `<button type="button" class="templatemo-blue-button" style="margin-left: 5px" onclick="updateForm()">Actualizar</button>`;
    buttonNueva = `<button type="submit" class="templatemo-blue-button">Agregar Actividad</button>`;
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
          <h2>Presupuesto: <span id="presupuesto${i + 1}">${
        element.presupuesto
      }$</span></h2>
        </div>
      </div>
      <br>
      <details class="ajustar-detalles-claro">
        <summary style="text-align: center;">
          <h4 style="text-align: left;">Editar Actividad</h4>
          <span style="text-align: left;" class="icon">▼</span>
        </summary>
                    <div>
                      <form action="/actualizarActividad/${
                        element.id_PA
                      }" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded" onsubmit="return validarFormulario(${
        element.id_PA
      })">
                        <div class="templatemo-widget-content templatemo-flex-row">
                          <div class="col-1" style="text-align: center; margin-top: 10px; width: 100px;">
                            <label for="inputLastName">Nombre De La Actividad</label>
                            <input type="text" class="form-control" id="TituloActividad${
                              element.id_PA
                            }" name ="TituloActividad" placeholder="Ingrese un Nombre"><br> 
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
      }">
                          </div>
    
                          <div class="col-1" style="text-align: center; margin: 10px;"> 
                            <label for="inputLastName" >Descripción De La Actividad</label>
                            <textarea  class="form-control" id="DescripcionActividad${
                              element.id_PA
                            }" name ="DescripcionActividad" cols="30" rows="10" placeholder="Descripción de la actividad" style="resize: none"></textarea>
                          </div>
    
                          <div class=" col-1" style="text-align: center; margin-top: 10px;">
                            <label for="inputLastName">Fecha Inicio</label>
                            <input type="date" class="form-control" id="FechaInicio${
                              element.id_PA
                            }" name ="FechaInicio" placeholder="Fecha Inicio"><br><br>
                            <label for="inputLastName">Fecha Finalización</label>
                            <input type="date" class="form-control" id="FechaFinalizacion${
                              element.id_PA
                            }" name ="FechaFinalizacion" placeholder="Fecha Finalización"><br><br>
                            <label for="inputLastName">Presupuesto de la Actividad</label>
                            <input type="number" class="form-control" id="Presupuesto${
                              element.id_PA
                            }" name ="Presupuesto" placeholder="Ingrese el presupuesto en COP" min="0" max="1000000000"><br>
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
    
  } else if (propuestaExistente[0].estado == "C") {
    buttonAction = `<button type="button" class="templatemo-blue-button" style="margin-left: 5px" onclick="submitForm()">Cancelar Propuesta</button>`;
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
          <h2>Fecha Inicio: <span id="fecha_inicio${i + 1}">${
        fechaString
      }</span></h2><br><br>
          <h2>Fecha Final: <span id="fecha_fin${i + 1}">${
        fechaString1
      }</span></h2><br><br>
          <h2>Presupuesto: <span id="presupuesto${i + 1}">${
        element.presupuesto
      }$</span></h2>
        </div>
      </div>
      <br>`;
    });
  } else {
    actividadesPropuestas.forEach((element, i) => {
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
          <h2>Fecha Inicio: <span id="fecha_inicio${i + 1}">${
        element.fecha_inicio
      }</span></h2><br><br>
          <h2>Fecha Final: <span id="fecha_fin${i + 1}">${
        element.fecha_fin
      }</span></h2><br><br>
          <h2>Presupuesto: <span id="presupuesto${i + 1}">${
        element.presupuesto
      }$</span></h2>
        </div>
      </div>
      <br>`;
    });
  }

  const page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Plan Carrera - Mi plan Carrera</title>
        <meta name="description" content="">
        <meta name="author" content="templatemo">

        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
        <link href="estilos/css/font-awesome.min.css" rel="stylesheet">
        <link href="estilos/css/bootstrap.css" rel="stylesheet">
        <link href="estilos/css/templatemo-style.css" rel="stylesheet">
        
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

        <script>
        function formatCurrency(input) {
            console.log('La función formatCurrency se está ejecutando');
            // Obtener el valor sin formato
            let value = input.value.replace(/[^\d.]/g, '');
        
            // Formatear el valor como moneda
            if (value !== '') {
                value = parseFloat(value).toFixed(2);
                value = '$' + value.replace(/\\d(?=(\\d{3})+\\.)/g, '$&,');
            }
        
            // Establecer el valor formateado en el campo
            input.value = value;
        }
        
      
          
          function eliminarActividad(idActividad) {
            document.getElementById("myForm").action = "/eliminarActividad/"+idActividad;
            // Envía el formulario
            document.getElementById("myForm").submit();
        }
  
          function updateForm() {
            // Cambia el atributo 'action' del formulario para apuntar a la URL de actualización
            document.getElementById("myForm").action = "/actualizacion";
            // Envía el formulario
            document.getElementById("myForm").submit();
          }
  
          function submitForm() {
            // Cambia el atributo 'action' del formulario para apuntar a la URL de envío de propuesta
            if ("${propuestaExistente[0].estado}" == "N"){
              document.getElementById("myForm").action = "/enviarPropuesta";
  
            }else{
              document.getElementById("myForm").action = "/cancelarPropuesta";
            }
  
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
                    <li><a href="mi-plan-carrera">Mi Plan Carrera</a></li>
                    <li><a href=""class="active">Proponer</a></li>
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-container">         
              <form action="/enviarPropuesta" id="myForm" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded">
                <div class="templatemo-content-widget white-bg">
                    <div class="templatemo-widget-content templatemo-flex-row">
                
                      <div id="barchartU" style="width: 50%; height: 250px;"></div>
                      <div class="templatemo-content-widget light-gray-bg col-2" style="width: 50%;">
                        <h2>Unidades totales:  ${unit} / 72</h2><br>
                        <label for="inputLastName">Título</label>
                        <input type="text" class="form-control" name="TituloPC" placeholder="${
                          propuestaExistente[0].titulo
                        }" style="opacity: 1;">
                        <br>
                        <label for="inputLastName">Objetivo</label>
                        <input type="text" class="form-control" name="ObjetivoPC" placeholder="${
                          propuestaExistente[0].objetivo
                        }" style="opacity: 1;">
                        <br>
                        <label for="inputLastName">Descripción</label>
                        <input type="text" class="form-control" name="DescripcionPC" placeholder="${
                          propuestaExistente[0].descripcion
                        }" style="opacity: 1;">
                        <div class="templatemo-widget-content templatemo-flex-row" style="display: grid; place-items: center;">
                          ${buttonActualizar}
                          ${buttonAction}
                        </div>
  
                      </div>
                       
                    </div>
                    </form>
                    <!-- actividades -->
                    ${res}
                    <!-- Formulario -->
                    <hr>
                  <form action="/agregarActividad/${
                    propuestaExistente[0].id_PP
                  }" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded" onsubmit="return validarFormulario('')">
                    <div class="templatemo-widget-content templatemo-flex-row">
                      <div class="col-1" style="text-align: center; margin-top: 10px; width: 100px;">
                        <label for="inputLastName">Nombre De La Actividad</label>
                        <input type="text" class="form-control" id="TituloActividad" name ="TituloActividad" placeholder="Ingrese un Nombre" required><br> 
                        <label for="inputLastName">Tipo de Actividad</label><br>
                        <select id="TipoActividad" name="TipoActividad">
                          <option>Retorno A Vortex Bird</option>
                          <option>Desarrollo Personal</option>
                        </select><br><br>
                        <label for="UnidadesActividad">Unidades:</label>
                        <input type="number" class="form-control" id="UnidadesActividad" name="UnidadesActividad" placeholder="Ingrese el número de unidades que usa esta actividad" min="1" max="${
                          72 - unit
                        }" required>
                      </div>
    
                      <div class="col-1" style="text-align: center; margin: 10px;"> 
                        <label for="inputLastName" >Descripción De La Actividad</label>
                        <textarea  class="form-control" id="DescripcionActividad" name ="DescripcionActividad" cols="30" rows="10" placeholder="Descripción de la actividad" style="resize: none"></textarea>
                      </div>
    
                      <div class=" col-1" style="text-align: center; margin-top: 10px;">
                        <label for="inputLastName">Fecha Inicio</label>
                        <input type="date" class="form-control" id="FechaInicio" name ="FechaInicio" placeholder="Fecha Inicio" required><br><br>
                        <label for="inputLastName">Fecha Finalización</label>
                        <input type="date" class="form-control" id="FechaFinalizacion" name ="FechaFinalizacion" placeholder="Fecha Finalización" required><br><br>
                        <label for="inputLastName">Presupuesto de la Actividad</label>
                        <input type="number" class="form-control" id="Presupuesto" name="Presupuesto" placeholder="Ingrese el presupuesto en COP" pattern="^\\d+(\\.\\d{1,2})?$" required><br>
                        ${buttonNueva}
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

function sinPropuestas() {
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
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
      
  
      
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
                    <li><a href="mi-plan-carrera">Mi Plan Carrera</a></li>
                    <li><a href=""class="active">Proponer</a></li>
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-container">         
              <form action="/propuesta-nueva" class="templatemo-login-form" method="post" enctype="application/x-www-form-urlencoded">
                <div class="templatemo-content-widget white-bg" style="display: grid; place-items: center">
                  <div class="templatemo-widget-content templatemo-flex-row" style="width: 50%;">
                    <div class="templatemo-content-widget light-gray-bg col-2">
                      <label>Título</label>
                      <input type="text" class="form-control" name="TituloPC" placeholder="Ingrese un título">
                      <br>
                      <label>Objetivo</label>
                      <input type="text" class="form-control" name="ObjetivoPC" placeholder="Ingrese un objetivo">
                      <br>
                      <label>Descripción</label>
                      <input type="text" class="form-control" name="DescripcionPC" placeholder="Ingrese una descripción">
                      <div class="templatemo-widget-content templatemo-flex-row" style="display: grid; place-items: center;">
                        <button type="submit" class="templatemo-blue-button">Crear Nueva Propuesta</button>
                      </div>
  
                    </div>
                  </div>
                </div>
              </form>
                    
                  
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

module.exports = { propuestas, sinPropuestas };

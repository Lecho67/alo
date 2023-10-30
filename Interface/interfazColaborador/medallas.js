function creadorDePaginasLogros(logros) {
  const page = `<!DOCTYPE html>
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
                  <li><a href="/inicio"><img class = "icon"src="images/casita.png" alt=""><br>Inicio</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="buzon"><img class="icon"src="images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="grupos"><img class="icon"src="images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="clasificaciones" id="link"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="mislogros" class="active"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
            </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href=""class="active">Todos</a></li>
                    <li><a href="logros-actuales">2023-Q1</a></li>
                    <li><a href="logros-custom">Personales</a></li>
    
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-widget white-bg col-2">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <div class="templatemo-content-widget marco-insignia-mostrada">
                    <img class="insignia-mostrada" src="../images/Insignias/god.png" alt="Sunset ">
                  </div>
                </div>
                <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="" style="width:200px">
                  
                      <h2>Nombre: Primer Actividad Subida</h2><hr>
                      <br>
                      <p>Estado: Obtenido</p>
                      <br>
                      <p>Descripción: Realiza tu primer actividad y recibe la aprobación de tu padrino</p> 
                    </div>
                  </div>
                </div>
                
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1" style="text-align: center;">
                      <ul class="button-list">
                        <li><h2 class="bold">Puntos de logro: 30g</h2></li>
                        <li><a href="logros-eliminar" class="templatemo-add-btn">Agregar al perfil</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1">
                      <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${logros[0].medalla_1}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${logros[0].medalla_2}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${logros[0].medalla_3}" alt="">
    
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr>  
            </div>
            <div class="templatemo-content-widget white-bg col-2" >
            <details>
            <summary>
              <h2>Logros</h2>
              <span class="icon">▼</span>
            </summary>
            <div>
              <table class="tabla-logros">
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href="/logro/${logros[0].nombre}"><img class="insignia-mostrada" src="images/Insignias/7g.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href="/logro/${logros[1].nombre}"><img class="insignia-mostrada" src="images/Insignias/aunmaschulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href="/logro/${logros[2].nombre}"><img class="insignia-mostrada" src="images/Insignias/calidad.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/chulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/chunchulo.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/decepticon.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/elmayorlogro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/god.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/insignia0.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/insigniacademia.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lesabe.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/like.jpg" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/vaxhaullinsignia.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/logro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/logromaicena.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lologro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/maschulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/ogro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/peye.jpeg" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/platano.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/spudo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/uaos.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </details>
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

function creadorDePaginasMedallas(logros, nombre) {
  const medalla = logros.find((x) => x.nombre == nombre);
  const page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Visual Admin Dashboard - Maps</title>
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
              <nav class="templatemo-left-nav">          
                <ul>
                  <li><a href="/inicio"><img class = "icon"src="/images/casita.png" alt=""><br>Inicio</a></li>
      
                  <li><a href="/buzon"><img class="icon"src="/images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="/grupos"><img class="icon"src="/images/grupo.png" alt=""><br>Grupos</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/perfil.png" alt=""><br>Mi Plan Carrera </a></li>
                  
                  <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="/clasificaciones" id="link"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="/mislogros" class="active"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
            </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href=""class="active">Todos</a></li>
                    <li><a href="/logros-actuales">2023-Q1</a></li>
                    <li><a href="/logros-custom">Personales</a></li>
    
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-widget white-bg col-2">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <div class="templatemo-content-widget marco-insignia-mostrada">
                    <img class="insignia-mostrada" src="../images/Insignias/god.png" alt="Sunset ">
                  </div>
                </div>
                <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="" style="width:200px">
                  
                      <h2>Nombre:${nombre}</h2><hr>
                      <br>
                      <p>Estado: </p>
                      <br>
                      <p>Descripción:${medalla.descripcion}</p> 
                    </div>
                  </div>
                </div>
                
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1" style="text-align: center;">
                      <ul class="button-list">
                        <li><h2 class="bold">Puntos de logro: ${medalla.puntos}</h2></li>
                        <li><a href="/agregarAlPefil/${medalla.id_medalla}" class="templatemo-add-btn">Agregar al perfil</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1">
                      <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${logros[0].medalla_1}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${logros[0].medalla_2}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${logros[0].medalla_3}" alt="">
    
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr>  
            </div>
            <div class="templatemo-content-widget white-bg col-2" >
            <details>
            <summary>
              <h2>Logros</h2>
              <span class="icon">▼</span>
            </summary>
            <div>
              <table class="tabla-logros">
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href="/logro/${logros[0].nombre}"><img class="insignia-mostrada" src="/images/Insignias/7g.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href="/logro/${logros[1].nombre}"><img class="insignia-mostrada" src="/images/Insignias/aunmaschulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href="/logro/${logros[2].nombre}"><img class="insignia-mostrada" src="/images/Insignias/calidad.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="/images/Insignias/chulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="/images/Insignias/chunchulo.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="/images/Insignias/decepticon.png" alt=""></a>
                    </div>
                  </td>
                  
                
              </table>
            </div>
          </details>
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

function creadorDePaginasLogrosEliminar() {
  const page = `<!DOCTYPE html>
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
                  <li><a href="/inicio"><img class = "icon"src="images/casita.png" alt=""><br>Inicio</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="buzon"><img class="icon"src="images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="grupos"><img class="icon"src="images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="clasificaciones"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="mislogros" class="active"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
            </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href=""class="active">Todos</a></li>
                    <li><a href="logros-actuales">2023-Q1</a></li>
                    <li><a href="logros-actuales">Personales</a></li>
    
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-widget white-bg col-2">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <div class="templatemo-content-widget marco-insignia-mostrada">
                    <img class="insignia-mostrada" src="images/Insignias/god.png" alt="Sunset ">
                  </div>
                </div>
                <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="" style="width:200px">
                  
                      <h2>Nombre: Primer Actividad Subida</h2><hr>
                      <br>
                      <p>Estado: Obtenido</p>
                      <br>
                      <p>Descripción: Realiza tu primer actividad y recibe la aprobación de tu padrino</p> 
                    </div>
                  </div>
                </div>
                
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1" style="text-align: center;">
                      <ul class="button-list">
                        <li><h2 class="bold">Puntos de logro: 30g</h2></li>
                        
                        <li><a href="mislogros" class="templatemo-add-btn">Eliminar del perfil </a></li>
    
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1">
                      <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/7g.png" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/god.png" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/decepticon.png" alt="">
    
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr>  
            </div>
            <div class="templatemo-content-widget white-bg col-2" >
              <table class="tabla-logros">
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/7g.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/aunmaschulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/calidad.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/chulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/chunchulo.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/decepticon.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/elmayorlogro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/god.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/insignia0.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/insigniacademia.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lesabe.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/like.jpg" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/vaxhaullinsignia.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/logro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/logromaicena.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lologro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/maschulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/ogro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/peye.jpeg" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/platano.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/spudo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/uaos.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

function creadorDePaginasLogrosActuales(medallas) {

  let cont = 0;
  let res = "<tr>";
  
  medallas.filter((element,index)=>element.tipo =="P").forEach((element,index)=>{
    cont+=1;
    res+=`
  <td>
    <div class="templatemo-content-widget marco-insignia-en-lista">
      <a href="/logrosActuales/${element.id_medalla}"><img class="insignia-mostrada" src="/fotoMedalla/${element.id_medalla}" alt=""></a>
    </div>
  </td>`
    if (cont == 5) {
      res+=`</tr>`;
      cont=0;
    }
  })
  if (cont != 0) {
    res+=`</tr>`
  }


  const page = `<!DOCTYPE html>
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
                  <li><a href="/inicio"><img class = "icon"src="images/casita.png" alt=""><br>Inicio</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="buzon"><img class="icon"src="images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="grupos"><img class="icon"src="images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="clasificaciones"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="mislogros" class="active"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
            </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href="/mislogros">Todos</a></li>
                    <li><a href=""class="active">2023-Q1</a></li>
                    <li><a href="/logros-custom">Personales</a></li>
    
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-widget white-bg col-2">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <div class="templatemo-content-widget marco-insignia-mostrada">
                    <img class="insignia-mostrada" src="images/Insignias/decepticon.png" alt="Sunset ">
                  </div>
                </div>
                <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="" style="width:200px">
                  
                      <h2>Nombre: Competitivo 2023-Q1</h2><hr>
                      <br>
                      <p>Estado: Obtenido</p>
                      <br>
                      <p>Descripción: Mantente en los primeros 5 puestos de clasificación por 1 mes</p> 
                    </div>
                  </div>
                </div>
                
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1" style="text-align: center;">
                      <ul class="button-list">
                        <li><h2 class="bold">Puntos de logro: 200g</h2></li>
                        <li><a href="logros-actuales-eliminar" class="templatemo-add-btn">Agregar al perfil</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1">
                      <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_1}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_2}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_3}" alt="">
    
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr>  
            </div>
            <div class="templatemo-content-widget white-bg col-2" >
            <details>
            <summary>
              <h2>Logros</h2>
              <span class="icon">▼</span>
            </summary>
            
              <table class="tabla-logros">
               ${res}
              </table>
            </div>
            </details>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

function creadorDePaginasSeleccionarLogrosActuales(medallas,medalla) {
  let cont = 0;
  let res = "<tr>";
  
  medallas.filter((element,index)=>element.tipo =="P").forEach((element,index)=>{
    cont+=1;
    res+=`
  <td>
    <div class="templatemo-content-widget marco-insignia-en-lista">
      <a href="/logrosActuales/${element.id_medalla}"><img class="insignia-mostrada" src="/fotoMedalla/${element.id_medalla}" alt=""></a>
    </div>
  </td>`
    if (cont == 5) {
      res+=`</tr>`;
      cont=0;
    }
  })
  if (cont != 0) {
    res+=`</tr>`
  }


  const page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <title>Visual Admin Dashboard - Maps</title>
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
              <nav class="templatemo-left-nav">          
                <ul>
                  <li><a href="/inicio"><img class = "icon"src="/images/casita.png" alt=""><br>Inicio</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="/buzon"><img class="icon"src="/images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="/grupos"><img class="icon"src="/images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="/mislogros" class="active"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
            </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href="/mislogros">Todos</a></li>
                    <li><a href=""class="active">2023-Q1</a></li>
                    <li><a href="/logros-custom">Personales</a></li>
    
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-widget white-bg col-2">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <div class="templatemo-content-widget marco-insignia-mostrada">
                    <img class="insignia-mostrada" src="/fotoMedalla/${medalla[0].id_medalla}" alt="Sunset ">
                  </div>
                </div>
                <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="" style="width:200px">
                  
                      <h2>Nombre: ${medalla[0].nombre}</h2><hr>
                      <br>
                      <p>Estado: Obtenido</p>
                      <br>
                      <p>Descripción: ${medalla[0].descripcion}</p> 
                    </div>
                  </div>
                </div>
                
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1" style="text-align: center;">
                      <ul class="button-list">
                        <li><h2 class="bold">Puntos de logro: 200g</h2></li>
                        <li><a href="/agregarAlPefil/${medalla[0].id_medalla}" class="templatemo-add-btn">Agregar al perfil</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1">
                      <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_1}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_2}" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_3}" alt="">
    
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr>  
            </div>
            <div class="templatemo-content-widget white-bg col-2" >
            <details>
            <summary>
              <h2>Logros</h2>
              <span class="icon">▼</span>
            </summary>
            
              <table class="tabla-logros">
               ${res}
              </table>
            </div>
            </details>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

function creadorDePaginasLogrosActualesEliminar() {
  const page = `<!DOCTYPE html>
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
                  <li><a href="inicio"><img class = "icon"src="images/casita.png" alt=""><br>Inicio</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="buzon"><img class="icon"src="images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="grupos"><img class="icon"src="images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="clasificaciones"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="mislogros" class="active"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
            </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href="mislogros">Todos</a></li>
                    <li><a href=""class="active">2023-Q1</a></li>
                    <li><a href="logros-custom">Personales</a></li>
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-widget white-bg col-2">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <div class="templatemo-content-widget marco-insignia-mostrada">
                    <img class="insignia-mostrada" src="images/Insignias/decepticon.png" alt="Sunset ">
                  </div>
                </div>
                <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="" style="width:200px">
                  
                      <h2>Nombre: Competitivo 2023-Q1</h2><hr>
                      <br>
                      <p>Estado: Obtenido</p>
                      <br>
                      <p>Descripción: Mantente en los primeros 5 puestos de clasificación por 1 mes</p> 
                    </div>
                  </div>
                </div>
                
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1" style="text-align: center;">
                      <ul class="button-list">
                        <li><h2 class="bold">Puntos de logro: 200g</h2></li>
                        <li><a href="logros-actuales" class="templatemo-add-btn">Eliminar del perfil</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1">
                      <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/7g.png" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/god.png" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/decepticon.png" alt="">
    
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr>  
            </div>
            <div class="templatemo-content-widget white-bg col-2" >
              <table class="tabla-logros">
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/7g.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lologro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/maschulo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/god.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/chunchulo.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/decepticon.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/elmayorlogro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/ogro.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/peye.jpeg" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/platano.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/spudo.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/uaos.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

function creadorDePaginasLogrosCustom(medallas){
  let cont = 0;
  let res = "<tr>";
  
  medallas.filter((element,index)=>element.tipo =="C").forEach((element,index)=>{
    cont+=1;
    res+=`
  <td>
    <div class="templatemo-content-widget marco-insignia-en-lista">
      <a href="/SeleccionLogro/${element.id_medalla}"><img class="insignia-mostrada" src="/fotoMedalla/${element.id_medalla}" alt=""></a>
    </div>
  </td>`
    if (cont == 5) {
      res+=`</tr>`;
      cont=0;
    }
  })
  if (cont != 0) {
    res+=`</tr>`
  }
  const page = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Visual Admin Dashboard - Maps</title>
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
                      <li><a href="/inicio"><img class="icon" src="/images/casita.png" alt=""><br>Inicio</a></li>

                      <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
  
                      <li><a href="/buzon"><img class="icon" src="/images/buzón.png" alt=""><br>Buzón</a></li>
  
                      <li><a href="/grupos"><img class="icon" src="/images/grupo.png" alt=""><br>Grupos</a></li>
  
                      <li><a href="/empresa"><img class="icon" src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
  
                      <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
  
                      <li><a href="/mislogros" class="active"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
  
                      <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
  
                      <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
  
                  </ul>
              </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
              <div class="templatemo-top-nav-container">
                  <div class="row">
                      <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                          <ul class="text-uppercase">
                              <li><a href="/mislogros">Todos</a></li>
                              <li><a href="logros-actuales">2023-Q1</a></li>
                              <li><a href="" class="active">Personales</a></li>
  
                          </ul>
                      </nav>
                  </div>
              </div>
              <div class="templatemo-content-widget white-bg col-2">
                  <div class="templatemo-flex-row flex-content-row">
                      <div class="col-1">
                          <div class="templatemo-content-widget marco-insignia-mostrada">
                              <img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt="Sunset ">
                          </div>
                      </div>
                      <div class="templatemo-content-widget white-bg templatemo-overflow-hidden">
                          <div class="templatemo-flex-row flex-content-row">
                              <div class="" style="width:200px">
  
                                  <h2>Nombre: Talentoso</h2>
                                  <hr>
                                  <br>
                                  <p>Estado: No conseguido</p>
                                  <br>
                                  <p>Descripción: Consigue 5 logros en un cuartil de año</p>
                              </div>
                          </div>
                      </div>
  
                      <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                          <div class="templatemo-flex-row flex-content-row">
                              <div class="col-1" style="text-align: center;">
                                  <ul class="button-list">
                                      <li>
                                          <h2 class="bold">Insignia Creada Por Padrino</h2>
                                      </li>
                                      <li><a href="logros-custom-eliminar" class="templatemo-add-btn">Agregar al perfil</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                          <div class="templatemo-flex-row flex-content-row">
                              <div class="col-1">
                                  <h2 class="templatemo-inline-block">Insignias en perfil:</h2>
                                  <hr>
                                  <div class="templatemo-flex-row flex-content-row">
                                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                          <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_1}" alt="">
  
                                      </div>
                                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                          <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_2}" alt="">
  
                                      </div>
                                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                                          <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_3}" alt="">
  
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr>
              </div>
              <div class="templatemo-content-widget white-bg col-2">
                  <details>
                      <summary>
                          <h2>Logros</h2>
                          <span class="icon">▼</span>
                      </summary>
                      <div>
                          <table class="tabla-logros">
                  
                      ${res}
                      </table>
                      </div>
                  </details>
              </div>
              <div class="templatemo-content-widget white-bg col-2">
                  <form action="/CrearMedalla" method="POST" enctype="multipart/form-data">
                      <details>
                          <summary>
                              <h2>Crear Insignia Personalizada</h2>
                              <span class="icon">▼</span>
                          </summary>
                          <div class="templatemo-content-widget light-gray-bg" style="width: 30%; display: grid; align-items: center">
                              <label for="nombre">Nombre: </label>
                              <input type="text" name="nombre" id="nombre" placeholder="Nombre de la insignia"><br>
                              <label for="Descripcion">Descripción: </label>
                              <input type="text" name="descripcion" id="Descripcion" placeholder="Inserte Una Descripción"><br><br>
                              <label for="file">Foto de la insignia: </label>
                              <input type="file" name="file" id="file"><br>
                              <input type="submit" class="ajustar-actulizar" value="Crear Nueva Insignia">
                          </div>
                      </details>
                  </form>
              </div>
          </div>
      </div>
  </body>
  
  </html>`
  return page
}

function creadorDePaginasSelectorLogrosCustom(medallas,medalla){
  let cont = 0;
  let res = "<tr>";
  console.log(medalla)
  medallas.filter(x=>x.tipo=='C').forEach((element,index)=>{
    cont+=1;
    res+=`
  <td>
    <div class="templatemo-content-widget marco-insignia-en-lista">
      <a href="/SeleccionLogro/${element.id_medalla}"><img class="insignia-mostrada" src="/fotoMedalla/${element.id_medalla}" alt=""></a>
    </div>
  </td>`
    if (cont == 5) {
      res+=`</tr>`;
      cont=0;
    }
  })
  if (cont != 0) {
    res+=`</tr>`
  }
  const page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Visual Admin Dashboard - Maps</title>
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
            <nav class="templatemo-left-nav">          
              <ul>
                <li><a href="/inicio"><img class = "icon"src="/images/casita.png" alt=""><br>Inicio</a></li>

                <li><a href="/mi-plan-carrera"><img class="icon" src="/images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
    
                <li><a href="/buzon"><img class="icon"src="/images/buzón.png" alt=""><br>Buzón</a></li>
                  
                <li><a href="/grupos"><img class="icon"src="/images/grupo.png" alt=""><br>Grupos</a></li>
                
                <li><a href="/empresa"><img class= "icon"src="/images/Empresa.png" alt=""><br></i>Empresa</a></li>
    
                <li><a href="/clasificaciones"><img class="icon" src="/images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                
                <li><a href="/mislogros" class="active"><img class="icon" src="/images/Insignias.png" alt=""><br>Logros</a></li>
  
                <li><a href="/miperfil"><img class="icon" src="/images/perfil.png" alt=""><br>Mi Perfil</a></li>
    
                <li><a href="/ajustes"><img class="icon" src="/images/ajustes.png" alt=""><br>Ajustes</a></li>
    
              </ul>  
            </nav>
          </nav>
        </div>
        <div class="templatemo-content col-1 light-gray-bg">
          <div class="templatemo-top-nav-container">
            <div class="row">
              <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                <ul class="text-uppercase">
                  <li><a href="/mislogros">Todos</a></li>
                  <li><a href="/logros-actuales">2023-Q1</a></li>
                  <li><a href=""class="active">Personales</a></li>
  
                </ul>  
              </nav> 
            </div>
          </div>
          <div class="templatemo-content-widget white-bg col-2">
            <div class="templatemo-flex-row flex-content-row">
              <div class="col-1">
                <div class="templatemo-content-widget marco-insignia-mostrada">
                  <img class="insignia-mostrada" src="/fotoMedalla/${medalla[0].id_medalla}" alt="Sunset ">
                </div>
              </div>
              <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                <div class="templatemo-flex-row flex-content-row">
                  <div class="" style="width:200px">
                
                    <h2>Nombre: ${medalla[0].nombre}</h2><hr>
                    <br>
                    <p>Estado: conseguido</p>
                    <br>
                    <p>Descripción: ${medalla[0].descripcion}</p> 
                  </div>
                </div>
              </div>
              
              <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                <div class="templatemo-flex-row flex-content-row">
                  <div class="col-1" style="text-align: center;">
                    <ul class="button-list">
                      <li><h2 class="bold">Insignia Creada Por Padrino</h2></li>
                      <li><a href="/agregarAlPefil/${medalla[0].id_medalla}" class="templatemo-add-btn">Agregar al perfil</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                <div class="templatemo-flex-row flex-content-row">
                  <div class="col-1">
                    <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                      <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_1}" alt="">
  
                    </div>
                    <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                      <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_2}" alt="">
  
                    </div>
                    <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                      <img class="insignia-mostrada-en-perfil" src="/fotoMedalla/${medallas[0].medalla_3}" alt="">
  
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>  
          </div>
          <div class="templatemo-content-widget white-bg col-2" >
            <details>
              <summary>
                <h2>Logros</h2>
                <span class="icon">▼</span>
              </summary>
                <div>
                  <table class="tabla-logros">
            
                      ${res}
                    
                  </table>
                </div>
            </details>
          </div>
          <div class="templatemo-content-widget white-bg col-2" >
          <form action="/CrearMedalla" method="POST" enctype="multipart/form-data">
            <details>
            
              <summary>
                <h2>Crear Insignia Personalizada</h2>
                <span class="icon">▼</span>
              </summary>
                <div class="templatemo-content-widget>
                  <br>
                    <div class="templatemo-content-widget light-gray-bg" style="width: 30%; display: grid; align-items: center">
                      <label for="nombre">Nombre: </label>
                      <input type="text" name="nombre" id="nombre" placeholder="Nombre de la insignia"><br>
                      <label for="descripcion">Descripción: </label>
                      <input type="text" name="descripcion" id="descripcion" placeholder="Inserte Una Descripción"><br><br>
                      <label for="file">Foto de la insignia: </label>
                      <input type="file" name="file" id="file"><br>
                      <input type="submit" class="ajustar-actulizar"value="Crear Nueva Insignia">
                    </div>
                  
            </details>
            </form>
          </div>
      </div>
    </body>
  </html>`
  return page
}

function creadorDePaginasLogrosCustomEliminar() {
  const page = `<!DOCTYPE html>
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
                  <li><a href="inicio"><img class = "icon"src="images/casita.png" alt=""><br>Inicio</a></li>

                  <li><a href="/mi-plan-carrera"><img class="icon" src="images/nota.png" alt=""><br>Mi Plan Carrera </a></li>
      
                  <li><a href="buzon"><img class="icon"src="images/buzón.png" alt=""><br>Buzón</a></li>
                    
                  <li><a href="grupos"><img class="icon"src="images/grupo.png" alt=""><br>Grupos</a></li>
                  
                  <li><a href="empresa"><img class= "icon"src="images/Empresa.png" alt=""><br></i>Empresa</a></li>
      
                  <li><a href="clasificaciones"><img class="icon" src="images/Trofeo.png" alt=""><br>Clasificaciones</a></li>
                  
                  <li><a href="mislogros" class="active"><img class="icon" src="images/Insignias.png" alt=""><br>Logros</a></li>
    
                  <li><a href="miperfil"><img class="icon" src="images/perfil.png" alt=""><br>Mi Perfil</a></li>
      
                  <li><a href="ajustes"><img class="icon" src="images/ajustes.png" alt=""><br>Ajustes</a></li>
      
                </ul>  
              </nav>
            </nav>
          </div>
          <div class="templatemo-content col-1 light-gray-bg">
            <div class="templatemo-top-nav-container">
              <div class="row">
                <nav class="templatemo-top-nav col-lg-12 col-md-12" style="margin-left: 30%;">
                  <ul class="text-uppercase">
                    <li><a href="mislogros">Todos</a></li>
                    <li><a href="logros-actuales">2023-Q1</a></li>
                    <li><a href=""class="active">Personales</a></li>
    
                  </ul>  
                </nav> 
              </div>
            </div>
            <div class="templatemo-content-widget white-bg col-2">
              <div class="templatemo-flex-row flex-content-row">
                <div class="col-1">
                  <div class="templatemo-content-widget marco-insignia-mostrada">
                    <img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt="Sunset ">
                  </div>
                </div>
                <div class=" templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="" style="width:200px">
                  
                      <h2>Nombre: Talentoso</h2><hr>
                      <br>
                      <p>Estado: No conseguido</p>
                      <br>
                      <p>Descripción: Consigue 5 logros en un cuartil de año</p> 
                    </div>
                  </div>
                </div>
                
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1" style="text-align: center;">
                      <ul class="button-list">
                        <li><h2 class="bold">Insignia Creada Por Padrino</h2></li>
                        <li><a href="logros-custom" class="templatemo-add-btn">Eliminar del perfil</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-1 templatemo-content-widget white-bg templatemo-overflow-hidden">
                  <div class="templatemo-flex-row flex-content-row">
                    <div class="col-1">
                      <h2 class="templatemo-inline-block">Insignias en perfil:</h2><hr>
                    <div class="templatemo-flex-row flex-content-row">
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/7g.png" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/god.png" alt="">
    
                      </div>
                      <div class="templatemo-content-widget.no-padding marco-insignia-en-perfil">
                        <img class="insignia-mostrada-en-perfil" src="images/Insignias/decepticon.png" alt="">
    
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr>  
            </div>
            <div class="templatemo-content-widget white-bg col-2" >
              <table class="tabla-logros">
                <tr>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/calidad.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                     <a href=""><img class="insignia-mostrada" src="images/Insignias/lesabe.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                  <td>
                    <div class="templatemo-content-widget marco-insignia-en-lista">
                      <a href=""><img class="insignia-mostrada" src="images/Insignias/lockeado.png" alt=""></a>
                    </div>
                  </td>
                </tr>
                
              </table>
            </div>
          </div>
        </div>
      </body>
    </html>`;
  return page;
}

module.exports = {
  creadorDePaginasLogros,
  creadorDePaginasMedallas,
  creadorDePaginasLogrosEliminar,
  creadorDePaginasLogrosActuales,
  creadorDePaginasLogrosActualesEliminar,
  creadorDePaginasLogrosCustom,
  creadorDePaginasLogrosCustomEliminar,creadorDePaginasSelectorLogrosCustom,creadorDePaginasSeleccionarLogrosActuales
};

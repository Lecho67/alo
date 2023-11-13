function login() {
   let res = `<!doctype html>
   <html lang="en">
       <head>
           <meta charset="utf-8">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <title>Express • TodoMVC</title>
           <link rel="stylesheet" href="/estilos/css/base.css">
           <link rel="stylesheet" href="/estilos/css/index.css">
           <link rel="stylesheet" href="/estilos/css/login.css">
       </head>
       <body>
           <section class="prompt">
               <h3>todos</h3>
               <h1>Sign in</h1>
               <form action="verificacion" method="post">
                   <section>
                       <label for="identificacion">identificacion</label>
                       <input id="identificacion" name="identificacion" type="text" autocomplete="username" required autofocus>
                   </section>
                   <button type="submit">Sign in</button>
               </form>
               <hr>
               <p class="help">Don't have an account? <a href="/signup">Sign up</a></p>
           </section>
           <footer class="info">
               <p>Created by <a href="https://www.jaredhanson.me">InnovateU</a></p>
               <p>Authentication powered by <a href="https://www.passportjs.org">Passport</a></p>
           </footer>
       </body>
   </html>
   ` ;
   return res;
}

module.exports = {login}
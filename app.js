const express = require("express"); //Requerimos express
const app = express(); //Requerimos su funcion de alto nivel
const path = require('path'); //Requerimos path

app.set("view engine", "ejs") //Aclaramos cual sera el motor del template
app.set('views', path.resolve(__dirname, 'views')); //Aclaramos la carpeta vistas
app.use(express.static("public")); //Definimos una carpeta  estatica: public.
app.use(express.urlencoded({ extended: false }));


app.get("/", function(req, res){ // Creamos rutas.
    res.render("index"); //Renderizamos la vista en "index" (no hace falta .ejs)
})

const moviesRouter = require('./routes/movies');
const actorsRouter = require('./routes/actors');
const genresRouter = require('./routes/genres');

app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);
app.use('/genres', genresRouter);

app.listen(3000, function(){ //Corremos el server en escucha
    console.log("El servidor está corriendo en el puerto 3000")
})
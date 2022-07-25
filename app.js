//API Key: da64585d0e52c216b57f61a92f600d69

//URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc
///movie/popular
//poster path:   /6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg
//release_date

var informacion = document.getElementById('informacion')


//esto es para cargar mas paginas de pelis
let pagina=1;
const btnSiguiente=document.getElementById('siguiente');//cuando le doy al boton, la funcion llama a la funcion cargar pelis y se muestran mas.
btnSiguiente.addEventListener('click',() => {
  pagina=pagina+1
  cargarPeliculas()
})

/**funcion "cargar peliculas"
 * Hacec una peticion a la API de películas a través de un fetch.
 * Almacenamos los resultados JSON en una variable para seguidamente hacer un foreach y poder recorrerlos uno a uno junto con un contador para adjudicarles a cada uno un div.
 * Paralelamente en la API el endpoint o fetch tiene la opcion de la paginación.
 */
function cargarPeliculas(){
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=da64585d0e52c216b57f61a92f600d69&page=${pagina}`)
  .then(response => response.json())
  .then(data => {
    
    var resultaditos= data.results
    //document.getElementById('contenedor').innerHTML=(JSON.stringify(resultaditos[0]))
            console.log(resultaditos);
            var contador=0;

  resultaditos.forEach(peli => {//con este foreach recorro todas las pelis de forma separada.
  console.log(peli.original_title);
  contador++
  document.getElementById(`pelicula${contador}`).innerHTML+=(`${peli.original_title}<br><br><br>
  <img src="https://image.tmdb.org/t/p/w500/${peli.poster_path}"><br><br><br>`)
  
  //ahora quiero hacer que salga el div con la info de la peli de API.

            const botonCerrar=document.getElementById('cerrarInfo-btn')
            const pop = document.getElementById('pop');
            const informativos=document.getElementById(`pelicula${contador}`);//cuando le doy al la peli, la funcion mete en el div la info del jason, y muestro el div.
                    
                    informativos.addEventListener('click',() => {
                        informacion.innerHTML=(`${peli.original_title}<br><br>${peli.release_date}<br><br>${peli.overview}<br>`)
                        pop.style.display='block'
                  })
                  
                  botonCerrar.addEventListener('click',() => {
                    pop.style.display='none'
              })        


        }); 
    
  });

 
  

}

cargarPeliculas();




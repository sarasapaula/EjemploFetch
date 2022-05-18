const createData= (item,idArray)=> 
    {
        
        //console.log("item",item)
        const baseURLImg = "https://image.tmdb.org/t/p/w200";
        
        return {  
        
            id: idArray,
            imagen: `${baseURLImg}${item.poster_path}`,
            title: item.title,
            overview: item.overview,     
            };
        
    }


export const getMovies_fetch = async (sendData) => {
    try {
    const url ="https://api.themoviedb.org/3/discover/movie?api_key=";
    const discover= "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    const apiKEY="af158ebf42ce4f8e554bcd0ba82df8dc";

    const endpoint = `${url}${apiKEY}${discover}`;
    let resultado = await fetch(endpoint);
    // console.log("parametro",sendData);
    let rtaApi = await resultado.json();         
   
    //Obtengo estrenos
    const estrenos = rtaApi.results;
    //console.log("movie",estrenos[0])
    let movies = [];
    let i=0;
    estrenos.map(item=>{
        i++;
        movies.push(createData(item,i))
    })
    
    //console.log("movie",movies)
     sendData(movies);
   } catch (error) {
     console.error(error);
   } 
 }

 
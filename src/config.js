//Configuration pour TMDB
// Nouvelle config de l'api = https://api.themoviedb.org/3/configuration?api_key=0fa964c211ec97fbdb3483b5075d2825

//Exemple de recherche :https://api.themoviedb.org/3/movie/550?api_key=0fa964c211ec97fbdb3483b5075d2825

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0fa964c211ec97fbdb3483b5075d2825';

//Images
//Exemple d'URL pour une image : 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

//Taille des images : "w300","w780","w1280","original"

const BACKDROP_SIZE = 'w1280';

//"w92","w154","w185","w342","w500","w780","original"

const POSTER_SIZE = 'w500';


export {
	API_URL
	API_KEY
	IMAGE_BASE_URL
	BACKDROP_SIZE
	POSTER_SIZE
}
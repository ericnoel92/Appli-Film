//import react from "react"; // Cette ligne est en commentaire, donc elle est désactivée. Il semble que vous n'ayez pas besoin d'importer React explicitement dans ce fichier, car vous n'utilisez pas directement de JSX ici.

import { Text } from "react-native"; // Importation du composant Text depuis react-native. Cependant, ce composant n'est pas utilisé dans ce fichier.

import AllTrendingDay from "../Components/AllTrendingDay"; // Importation du composant AllTrendingDay depuis le fichier AllTrendingDay.js situé dans le dossier Components à la racine du projet.

export default function Alltrending (){ // Définition du composant Alltrending en tant que fonction fléchée. Ce composant ne prend aucun paramètre.
    return(
       <AllTrendingDay/> // Renvoie le composant AllTrendingDay. Ce composant affichera une liste de films tendance.
    );
};

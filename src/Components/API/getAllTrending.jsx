import axios from "axios";

export const getAllTrending = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=5788136c0fe92c84b0098005839a2b81`);
        
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("La requête n'a pas abouti avec le statut HTTP attendu.");
        }
    } catch (error) {
        // Gestion détaillée des erreurs
        if (error.response) {
            // La requête a été effectuée et le serveur a répondu avec un statut de code différent de 2xx
            console.error("Erreur de réponse du serveur :", error.response.data);
        } else if (error.request) {
            // La requête a été effectuée mais aucune réponse n'a été reçue
            console.error("Aucune réponse reçue du serveur :", error.request);
        } else {
            // Une erreur s'est produite lors de la configuration de la requête
            console.error("Erreur lors de la configuration de la requête :", error.message);
        }
        throw error; // Rejeter l'erreur pour qu'elle soit gérée par le composant appelant
    }
};

import { API_RM } from './../contants/Api';

class RickandMortyService{

    // Traer todos por personajes
    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        return response.json();
    }

    // Traerlos por id
    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        return response.json();
    }

}

export default new RickandMortyService();
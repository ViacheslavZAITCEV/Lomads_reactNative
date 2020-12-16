// export default function(idUser = '', action) {
export default function(idUser = '5fd8957156659543d44e477a', action) {
    if(action.type == 'addIdUser') {
        // console.log("ajout ID user dans le store", action.idUser);
        return action.idUser;
    } else {
        // console.log("echec ajout ID user dans le store")
        return idUser;
    }
}
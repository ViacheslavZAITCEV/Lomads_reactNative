export default function(user = '-= GoWizMe_from_Redux =-', action) {
    console.log('user reduceur ')
    if(action.type == 'user') {
        console.log('enregistrement user : ', action.user)
        return action.user;
    } else {
        return user;
    }
}

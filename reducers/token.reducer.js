export default function(token = '', action) {
    if(action.type == 'saveToken') {
        console.log('change token to ', action.token)
        return action.token;
    } else {
        return token;
    }
}

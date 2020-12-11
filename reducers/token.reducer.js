export default function(token = 'ls', action) {
    if(action.type == 'saveToken') {
        console.log('change token to ', action.token)
        return action.token;
    } else {
        return token;
    }
}

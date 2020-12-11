export default function(token = 'ls', action) {
    if(action.type == 'saveToken') {
        return action.token;
    } else {
        return token;
    }
}

export default (posts=[], action) =>{
    switch (action.type) {
        case 'FETCH-ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}
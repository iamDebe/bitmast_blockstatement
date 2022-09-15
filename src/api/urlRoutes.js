export  default function urlRoutes(){

    const apis = [
        { 'path': '/users', 'name': 'get-users' },
        { 'path': '/login', 'name': 'login' },
        { 'path': '/register/user', 'name': 'register' },
        { 'path': '/redoc', 'name': 'redoc_html' }
    ]
    return apis;

    
}

export function path(specified_name){
    
    const apis = urlRoutes();
    const filterPath = apis.filter(function(arr){
        
        return  arr.name === specified_name
    })
    
    return filterPath[0].path;

    
}

// function getPath(given_name){
        
//     return  given_name.name == 'user_registration'
// }

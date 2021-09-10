const routes = {
    '/': home,
    '/contact': contact,
    '/about': about
}

var Router = function (name, routes) {
    return {
        name: name,
        routes: routes
    }
}

window.onload = function () {
    var myFirstRouter = new Router('myFirstRouter', [
        {
            path: '/',
            name: 'Root'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/contact',
            name: 'Contact'
        }
    ])

    var currentPath = window.location.pathname;
    console.log(currentPath);

}


const rootDiv = document.querySelector('root');
// rootDiv.innerHTML = routes.[window.location.pathname]

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}
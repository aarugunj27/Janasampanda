import React from 'react'
import './static/css/404.css';

function PageNotFound() {
    return (
        <div class="errorpage">
            <title>Oops!</title>   
            <h1 class="lead"><b>Oops!</b></h1> 
            <h2 class="explain">We can't seem to find the page you're looking for.</h2>
            <br />
            <h3 class="desc">Error code: 404</h3>
            <h3 class="desc">Page not found</h3>
            <br />
            <h3 class="desc"><a href="/"><button type="button" class="btn btn-primary btn-lg"><b>Go back to home</b></button></a></h3>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default PageNotFound;
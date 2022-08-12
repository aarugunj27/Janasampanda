import React from 'react'
import './static/css/404.css';

function PageNotFound() {
    return (
        <div className="errorpage">
            <title>Oops!</title>   
            <h1 className="lead"><b>Oops!</b></h1> 
            <h2 className="explain">We can't seem to find the page you're looking for.</h2>
            <br />
            <h3 className="desc">Error code: 404</h3>
            <h3 className="desc">Page not found</h3>
            <br />
            <h3 className="desc"><a href="/"><button type="button" className="btn btn-primary btn-lg"><b>Go back to home</b></button></a></h3>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default PageNotFound;
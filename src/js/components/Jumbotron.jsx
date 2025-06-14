import React from "react";

const Jumbotron = () => {
    return (
        <div className="container m-auto mt-4 bg-secondary-subtle rounded p-3">
            <h1>A Warm Welcome!</h1>
            <p>
                This is the Jumbotron....
            </p>
            <button type="button" className="btn btn-primary btn-lg">Call to action!</button>
        </div>
    );
};

export default Jumbotron;
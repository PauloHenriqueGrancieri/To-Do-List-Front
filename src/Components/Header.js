import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                    </button>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="navbar-brand" href="#">To-do List</a>
                </div>
            </div>
        </nav>
    );
}
import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-64" src="emmi-logo.png" alt="logo" />
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-8">
                <Link to="/" className="mr-5 hover:text-gray-900">Issue Tracker</Link>
                <Link to="/add-issue"><button className="Button">
                    Add Issue
                </button></Link>
                </nav>
            </div>
        </header>
    )
}
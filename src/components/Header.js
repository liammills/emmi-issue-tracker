import React from 'react';
import '../styles/App.css';

export default function Header() {

    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img class="w-64" src="emmi-logo.png" alt="logo" />
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-8">
                <a class="mr-5 hover:text-gray-900">Issue Tracker</a>
                <button className="Button">
                    Add Issue
                </button>
                </nav>
            </div>
        </header>
    )
}
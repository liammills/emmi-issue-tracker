import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Issue from './Issue';

export default function IssuesList() {
    const [issues, setIssues] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch('http://localhost:8000/issues')
        .then(response => {
            if (!response.ok) {
                throw Error('error in fetching data for that resource')
            }
            return response.json();
        })
        .then(function(data) {
            // console.log(data);
            setIssues(data)
            setIsLoading(false);
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(err.message);
                setIsLoading(false);
            }
        })

        return () => abortCont.abort();
    },[])

    return (
        <section className="text-gray-600 body-font mb-40">
            <div className="container px-5 py-24 mx-auto items-start">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="Title">Issue Tracker</h1>
                </div>
                <div className="flex flex-wrap tm-4">
                {error && <p>{error}</p>}
                {isLoading && <p>Loading...</p>}
                {issues && issues.length > 0 ? issues.map((issue,key) => {
                    return (
                        <Issue issue={issue} key={key} />
                    )
                })
            : <p>No issues at the moment.</p>}

                </div>
            </div>
            </section>
    )
}


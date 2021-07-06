import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Issue from './Issue';

export default function IssuesList() {
    const [issues, setIssues] = useState([]);
    const getData=()=>{
        fetch('issues.json'
        ,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
            .then(function(response){
            // console.log(response)
            return response.json();
            })
            .then(function(myJson) {
            // console.log(myJson["issues"]);
            setIssues(myJson["issues"])
            });
        }
        useEffect(()=>{
        getData()
    },[])
    // console.log(issues);
    return (
        <section className="text-gray-600 body-font mb-40">
            <div className="container px-5 py-24 mx-auto items-start">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="Title">Issue Tracker</h1>
                </div>
                <div className="flex flex-wrap tm-4">
                
                {issues && issues.length > 0 && issues.map((issue,key) => {
                    return (
                        <Issue issue={issue} key={key} />
                    )
                })}

                </div>
            </div>
            </section>
    )
}


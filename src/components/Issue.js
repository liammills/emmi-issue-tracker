import '../styles/App.css';
import React, { useState } from 'react';

export default function Issue(issue) {
    const [closed, setClosed] = useState(issue.issue.closed);

    const handleClick = (close) => {
        setClosed(close);
        fetch('http://localhost:8000/issues/'+issue.issue.id, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({closed:close})
        }).then(res => console.log(res))
    }

    var openClosedColor = closed ? "flex rounded-lg border-4 border-transparent h-full p-8 flex-col bg-gray-800 text-gray-100 hover:border-yellow-500" : "flex rounded-lg border-4 border-transparent h-full p-8 flex-col bg-gray-100 hover:border-yellow-500";

    return (
        <div className="p-4 md:w-1/3">
            <div className={openClosedColor}>
                <div className="stretch">
                    <h2 className="text-lg title-font font-medium">{issue.issue.name}</h2>
                    {closed ? <p className="text-sm font-medium">Closed</p> : <p className="text-sm font-medium">Open</p>}
                </div>
                <p className="self-start mb-4 mt-1 text-sm">{issue.issue.date}</p>
                <p className="h-full leading-relaxed text-base mb-8">{issue.issue.description}</p>
                <div>
                    {closed
                    ? <button className="ClosedIssueButton" onClick={() => handleClick(false)}>Open</button>
                    : <button className="OpenIssueButton" onClick={() => handleClick(true)}>Close</button>
                    }
                </div>
            </div>
    </div>
    )
  
  }
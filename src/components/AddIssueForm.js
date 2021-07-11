import React, { useState } from 'react';
import '../styles/App.css';

export default function IssueForm() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [des, setDes] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = event => {
        event.preventDefault();
        const issue = { name, closed: false, date, description: des };
        fetch('http://localhost:8000/issues', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(issue)
        }).then(() => {
            console.log("new issue added")
            setIsLoading(true)
        })

        setShowForm(false);
    }
  
    return (
        <section className="text-gray-600 body-font mb-40">
            <div className="container px-5 py-24 mx-auto items-start">
                <div className="flex flex-col w-full mb-10">
                    <h1 className="Title">Add a new issue</h1>
                </div>

                {/* redo in css not tailwind */}
                {showForm ? <div className="form-div">
                    <form className="w-full" id="issueInputForm" onSubmit={handleSubmit}>
                        <label className="font-medium text-m block text-left">
                        Name *
                        </label>
                        <input
                        id="issueNameInput"
                        className="form-box"
                        type="text"
                        required
                        placeholder="Please add a name..."
                        value={name}
                        onChange={event => {
                            setName(event.target.value);
                        }}
                        />
                        <label className="font-medium text-m block text-left">
                        When was this created? *
                        </label>
                        <input
                        id="issueDateInput"
                        className="form-box"
                        type="date"
                        required
                        value={date}
                        onChange={event => {
                            setDate(event.target.value);
                        }}
                        />
                        <label className="font-medium text-m block text-left">
                        Description *
                        </label>
                        <textarea
                        id="issueDesInput"
                        className="form-box"
                        type="text"
                        required
                        placeholder="Please add a description..."
                        value={des}
                        onChange={event => {
                            setDes(event.target.value);
                        }}
                        />
                    {!isLoading && <button className="Button bottom" type="submit">
                        Submit Issue
                    </button>}
                    {isLoading && <button disabled className="Button bottom" type="submit">
                        Submitting Issue...
                    </button>}
                    </form>
                </div>
                : 
                <div>
                    <p className="text-xl">The new issue has been recorded.</p>
                    <p className="mt-6 text-xl">Name: {name}<br />Date: {date}<br />Description: {des}</p>
                    <button className="Button bottom" onClick={() => setShowForm(true)}>Add another</button>
                </div>
                }
            </div>
        </section>
    );
  };
  
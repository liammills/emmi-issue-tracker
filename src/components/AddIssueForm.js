import React, { useState } from 'react';
import '../styles/App.css';

export default function IssueForm() {
    let [name, setName] = useState("");
    let [date, setDate] = useState("");
    let [des, setDes] = useState("");
    let [showForm, setShowForm] = useState(true)

    const handleSubmit = event => {
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
                        <label className="font-medium text-m block">
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
                            // console.log(name);
                        }}
                        />
                        <label className="font-medium text-m block">
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
                            // console.log(date);
                        }}
                        />
                        <label className="font-medium text-m block">
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
                            // console.log(des);
                        }}
                        />
                    <button className="Button bottom" type="submit">
                        Submit Issue
                    </button>
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
  
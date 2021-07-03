import React from 'react';
import '../styles/App.css';

export default function IssuesList() {

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto items-start">
                <div class="flex flex-col w-full mb-20">
                    <h1 className="Title">Issue Tracker</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="stretch">
                        <h2 class="text-gray-900 text-lg title-font font-medium">Issue #1</h2>
                        <p>Open</p>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        </a>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        </a>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        </a>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}
import React from 'react';

export default function Projects() {
    return (
        <div className=" w-[81vw] p-6 bg-bgmain min-h-screen">
            {/* Table Header */}
            <div className="bg-white rounded-md shadow-md p-4">
                <div className="grid grid-cols-6 gap-4 font-semibold text-gray-700">
                    <div>Client-Name</div>
                    <div>Date</div>
                    <div>Deadline</div>
                    <div>Status</div>
                    <div>Rating</div>
                    <div>Payout</div>
                </div>
            </div>

            {/* Red Div */}
            <div className="mt-6 bg-red-500 h-20 rounded-md shadow-md"></div>
        </div>
    );
}

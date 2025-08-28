import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPastes = () => {
  const{id}=useParams(); 
  
  const allPastes=useSelector((state)=>state.pastes.pastes);
  const paste=allPastes.filter((p)=>p._id===id)[0];
  console.log("final paste: ",paste);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">View Paste</h1>
            <p className="text-blue-100 mt-1">Read-only view of your paste</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Title Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title
              </label>
              <input
                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 font-medium cursor-not-allowed focus:outline-none'
                type="text"
                placeholder='enter title here'
                value={paste.title}
                disabled
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>

            {/* Content Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content
              </label>
              <div className="relative">
                <textarea 
                  className='w-full px-4 py-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 leading-relaxed resize-none cursor-not-allowed focus:outline-none'
                  value={paste.content}
                  placeholder='enter content'
                  onChange={(e)=>setValue(e.target.value)}
                  rows={20}
                  disabled
                />
                {/* Read-only indicator */}
                <div className="absolute top-2 right-2 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                  Read Only
                </div>
              </div>
            </div>

            {/* Metadata */}
            {paste.createdAt && (
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">Created:</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {paste.createdAt}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button 
            onClick={() => window.history.back()}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewPastes
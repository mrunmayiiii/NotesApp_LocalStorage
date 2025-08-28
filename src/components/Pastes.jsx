import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Edit, Eye, Trash2, Copy, Share2, Calendar } from 'lucide-react';

const Pastes = () => {
  const pastes=useSelector((state)=>state.pastes.pastes); 
  
  console.log(pastes); 
  
  const [searchTerm,setSearchTerm]=useState('');
  //  const temp=[];
  //  for(let i=0;i<pastes.length;i++){
  //   temp.push(
  //     <div key={i}>
  //       <p>{pastes[i].title}</p>
  //     </div>
  //   );         
  //   }

  const dispatch=useDispatch();
  const filteredData=pastes.filter((paste)=>paste.title.
                    toLowerCase().includes(searchTerm.toLowerCase()));     

  console.log("after")

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste){
    const shareURL=`${window.location.origin}/pastes/${paste?._id}`;
    navigator.clipboard.writeText(shareURL);
    toast.success("generated and copied link successfully");
  }

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = now - date;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) {
        return 'Today';
      } else if (diffDays === 1) {
        return 'Yesterday';
      } else if (diffDays < 7) {
        return `${diffDays} days ago`;
      } else {
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        });
      }
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Pastes</h1>
          <div className="relative">
            <input 
              className='w-full max-w-2xl px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700 placeholder-gray-400'
              type="search"
              placeholder='Search your pastes...'
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)} 
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          {
            filteredData.length>0 && filteredData.map(
              (paste)=>{return(
                <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1' key={paste?._id}>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 truncate mb-1">{paste.title}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">{paste.content}</p>
                    </div>
                    <div className='flex flex-wrap gap-3 items-center justify-between border-t border-gray-100 pt-4'>
                      <div className="flex flex-wrap gap-2">
                        <button className='group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2'>
                          <Edit size={16} />
                          <a href={`/?pasteId=${paste?._id}`} className="text-white no-underline">
                            Edit
                          </a>
                        </button>
                        <button className='group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2'>
                          <Eye size={16} />
                          <a href={`/pastes/${paste?._id}`} className="text-white no-underline">
                            View
                          </a>
                        </button>
                        <button 
                          className='group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2' 
                          onClick={()=>handleDelete(paste?._id)}
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                        <button 
                          className='group bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2' 
                          onClick={()=>{navigator.clipboard.writeText(paste?.content); toast.success("copied to clipboard")}}
                        >
                          <Copy size={16} />
                          Copy
                        </button>
                        <button 
                          className='group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2' 
                          onClick={()=>handleShare(paste)}
                        >
                          <Share2 size={16} />
                          Share
                        </button>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-500 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-full border border-gray-200'>
                        <Calendar size={14} />
                        {formatDate(paste.createdAt)}
                      </div>
                    </div>
                  </div>                  
                </div>
              )}
            )
          }
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No pastes found</h3>
              <p className="text-gray-500">
                {searchTerm ? 'Try adjusting your search terms' : 'Create your first paste to get started'}
              </p>
            </div>
          )}
        </div>
      </div>     
    </div>
  )
}

export default Pastes
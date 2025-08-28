// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { addToPastes, updateToPastes } from '../redux/pasteSlice';

// const Home = () => {
//     const [title,setTitle]=useState('');
//     const [value,setValue]=useState('');
//     const [searchParams,setSearchParams]=useSearchParams();
//     const pasteId=searchParams.get("pasteId");
// // function handleClick(){
// //     console.log("clicked");
// // }
//     const allPastes=useSelector((state)=>state.pastes.pastes);
// const dispatch=useDispatch();
// useEffect(()=>{
//     if(pasteId){
//         const paste=allPastes.find((p)=>p._id===pasteId);
//          setTitle(paste.title);
//         setValue(paste.content);
//     }
    
   

// },[pasteId])
// function createPaste(){
//       console.log("error here");
//     const paste={
//         title:title,
//         content: value,
//         _id:pasteId|| Date.now().toString(36),
//         createdAt:new Date().toISOString(),

//     }
//     if(pasteId){
//         //update
//         dispatch(updateToPastes(paste));
//     }
//     else{
//         //create
//         dispatch(addToPastes(paste));

//     }
//     setTitle('');
//     setValue('');
//     setSearchParams({});
// }


//   return (
//     <>
//     <div>
//         <input
//         className='p-2 border solid black rounded-2xl mt-4 ml-4'
//         type="text"
//         placeholder='enter title here'
//         value={title}
//         onChange={(e)=>setTitle(e.target.value)}
//         />
//         <br />

//         <button className='p-2 border solid black rounded-2xl mt-4 ml-4' onClick={createPaste} >
//                 {
//                      pasteId ? "Update My Paste" : "Create My Paste"
//                 }
//         </button>
//     </div>
//     <div className='mt-4'>
//          <textarea className='rounded-2xl mt-4 ml-4 min-w-[500px] p-4 bg-white'
//          value={value}
//          placeholder='enter content'
//          onChange={(e)=>setValue(e.target.value)}
//          rows={20}
//          >

//          </textarea>
//     </div>
    
// </>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title,setTitle]=useState('');
    const [value,setValue]=useState('');
    const [searchParams,setSearchParams]=useSearchParams();
    const pasteId=searchParams.get("pasteId");

    const allPastes=useSelector((state)=>state.pastes.pastes);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(pasteId){
            const paste=allPastes.find((p)=>p._id===pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }           
    },[pasteId])

    function createPaste(){
        console.log("error here");
        const paste={
            title:title,
            content: value,
            _id:pasteId|| Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }
        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
        }
        else{
            //create
            dispatch(addToPastes(paste));
        }
        setTitle('');
        setValue('');
        setSearchParams({});
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-6 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {pasteId ? "Edit Your Paste" : "Create New Paste"}
                    </h1>
                    <p className="text-gray-600">
                        {pasteId ? "Update your existing paste" : "Share your code, text, or ideas"}
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Title Input Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Paste Title
                        </label>
                        <input
                            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
                            type="text"
                            placeholder="Enter a descriptive title for your paste..."
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>

                    {/* Content Input Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Paste Content
                        </label>
                        <textarea 
                            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-vertical text-gray-800 placeholder-gray-400 font-mono text-sm leading-relaxed"
                            value={value}
                            placeholder="Paste your code, text, or any content here..."
                            onChange={(e)=>setValue(e.target.value)}
                            rows={20}
                        />
                        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                            <span>{value.length} characters</span>
                            <span>{value.split('\n').length} lines</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="text-center">
                        <button 
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]" 
                            onClick={createPaste}
                            disabled={!title.trim() || !value.trim()}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {pasteId ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Update My Paste
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        Create My Paste
                                    </>
                                )}
                            </span>
                        </button>
                    </div>

                  
                    
                </div>
            </div>
        </div>
    )
}

export default Home
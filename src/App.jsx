// import { useState } from 'react';

// function App() {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [notes, setNotes] = useState([]);
//   const [show, setShow] = useState('');
//   const [editIndex, setEditIndex] = useState(null);
  
//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleDescChange = (e) => {
//     setDesc(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim() === '' || desc.trim() === '') {
//       alert('Please enter title and description');
//       return;
//     }
//     if (editIndex !== null) {
//       const updatedNotes = notes.map((note, index) =>
//         index === editIndex ? { title, desc } : note
//       );
//       setNotes(updatedNotes);
//       setEditIndex(null);
//     } else {
//       setNotes([...notes, { title, desc }]);
//     }
//     setTitle('');
//     setDesc('');
//   };

//   const handleEdit = (index) => {
//     setTitle(notes[index].title);
//     setDesc(notes[index].desc);
//     setEditIndex(index);
//     setShow('');
//   };

//   const handleDelete = (index) => {
//     const updatedNotes = notes.filter((_, i) => i !== index);
//     setNotes(updatedNotes);
//     setShow('');
//   };

//   const showNote = (index) => {
//     setShow(notes[index].desc);
//   };

//   return (
//     <div className='h-screen'>
//       <h1 className='h-10 bg-orange-400 text-center p-1'>Notes</h1>
//       <div className='h-full flex'>
//         <div className='w-1/4 bg-gray-200 p-1'>
//           <h1 className='text-center bg-amber-300'>Titles</h1>
//           {notes.map((note, index) => (
//             <div key={index} className='bg-gray-300 m-2 p-2'>
//               <div className='m-0'>
//                 <button className='w-full text-left' onClick={() => showNote(index)}>
//                   {note.title}
//                 </button>
//                 <div className='flex justify-end'>
//                   <button className='w-14 rounded-2xl bg-green-400' onClick={() => handleEdit(index)}>
//                     Edit
//                   </button>
//                   <br />
//                   <button className='w-16 rounded-2xl bg-red-500' onClick={() => handleDelete(index)}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className='w-1/2 p-1'>
//         <h1 className='text-center bg-amber-200'>Description</h1>
//           <p>{show}</p>
//         </div>
//         <div className='w-1/4 bg-gray-200 p-2 flex flex-col'>
//           <label htmlFor='title'>Enter your title</label>
//           <input
//             className='border-1 rounded-md w-full p-1'
//             type='text'
//             name='title'
//             id='title'
//             value={title}
//             onChange={handleTitleChange}
//           />
//           <br />
//           <label htmlFor='desc'>Enter your Description</label>
//           <textarea
//             className='border-1 rounded-md w-full p-1'
//             name='desc'
//             id='desc'
//             value={desc}
//             onChange={handleDescChange}
//             rows={5}
//           />
//           <br />
//           <button className='rounded-2xl border bg-green-500 justify-center' onClick={handleSubmit}>
//             {editIndex !== null ? 'Update Note' : 'Add Note'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

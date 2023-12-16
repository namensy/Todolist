import { useEffect, useState } from "react";
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from './utils/firebase.js';
import Item from "./components/item";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('Light');

  useEffect(() => {
    // Fetch data from Firestore when the component mounts
    fetchDataFromFirestore();
  }, []);

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'todos'));
      const fetchedTodos = [];
      querySnapshot.forEach((doc) => {
        fetchedTodos.push({ id: doc.id, ...doc.data() });
      });
      setTodos(fetchedTodos);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      try {
        const docRef = doc(db, 'todos', editId); // Create a reference to the specific document
        await updateDoc(docRef, { title: title }); // Perform the update operation on the document reference
        setEditId(null);
        setTitle('');
        fetchDataFromFirestore(); 
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    } else {
      try {
        await addDoc(collection(db, 'todos'), { title }); // Add new document
        setTitle('');
        fetchDataFromFirestore(); 
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, 'todos', id);
      await deleteDoc(docRef, id); // Delete document by ID
      fetchDataFromFirestore(); 
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    const editTask = todos.find((item) => item.id === id);
    setTitle(editTask.title);
  };

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm handleSubmit={handleSubmit} title={title} editId={editId} setTitle={setTitle} />
        <section>
          {todos.map((item) => (
            <Item item={item} key={item.id} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;


// import { useEffect, useRef, useState } from "react";
// import Item from "./components/item";
// import AddForm from "./components/AddForm";
// import Header from "./components/Header";
// import { db } from './path-to-your-firebase-file';
// import "./App.css";

// function App() {
  
  
  
//   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
//   const [editId, setEditId] = useState(null)
//   const [title, setTitle] = useState('')
//   const [theme, setTheme] = useState('Light')
  
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (editId) {
//       const updated = todos.map((item) => {
//         if (item.id === editId) {
//           return { ...item, title: title}
//         }
//         return item
//       })
//       setTodos(updated)
//       setEditId(null)
//       setTitle('')
//     } else {
//       const newTask = {
//         id: Math.floor(Math.random() * 1000),
//         title: title
//       }
//       setTodos([...todos, newTask])
//       setTitle('')
//     }
//   }

//   const handleDelete = (id) => {
//     const result = todos.filter((item) => item.id !== id)
//     setTodos(result)
//   }

//   const handleEdit = (id) => {
//     setEditId(id)
//     const editTask = todos.find((item) => item.id === id)
//     setTitle(editTask.title)
//   }

//   return (
//     <div className={"App "+theme}>
//       <Header theme={theme} setTheme={setTheme} />
//       <div className="container">
//         <AddForm handleSubmit={handleSubmit} title={title} editId={editId} setTitle={setTitle}/>
//         <section>
//           {todos.map((item) => (
//             <Item item={item} key={item.id} handleDelete={handleDelete} handleEdit={handleEdit} />
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// }

// export default App;

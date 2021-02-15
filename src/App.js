import { useState, useEffect} from 'react'

const App = () => {
  let [users, setTasks] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
  
    getTasks()
  }, [])
  

  const fetchTasks = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users = await res.json()
    return users
  }



  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    users = users.filter((i) => {
      return i.name.toLowerCase().match(input.toLowerCase())
    });
  }

  
  return (
    <div className="container mt-5">
        <input className="mb-4"
        type="text"
        placeholder="Search Name"
        onChange={handleChange} 
        value={input} 
        />
    
          {users.map((user, index) => {
            return (
                <div key={user.id} className="alert alert-dismissible alert-info">
                  <p>{user.name}</p>
                </div>
            );
          })}     
    </div>
  );
};

export default App;

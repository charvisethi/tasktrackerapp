// App.js
import React, { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import app from './firebase'; // Import Firebase app

const App = () => {
  const [user, setUser] = useState(null); // State to store the authenticated user
  const [tasks, setTasks] = useState([]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Add an authentication state change listener
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const handleEditTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleStatus = (taskToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskToToggle.id
          ? { ...taskToToggle, status: taskToToggle.status === 'In Progress' ? 'Completed' : 'In Progress' }
          : task
      )
    );
  };

  const handleSignIn = async () => {
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Successfully signed in');
      // User is now authenticated, you can update UI or redirect
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleSignUp = async () => {
    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Successfully signed up');
      // User is now authenticated, you can update UI or redirect
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const handleSignOut = async () => {
    const auth = getAuth(app);
    try {
      await auth.signOut();
      console.log('Successfully signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div>
      <h1>Task Tracker App</h1>

      {user ? (
        // Render task-related components if the user is authenticated
        <>
          <TaskList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onToggleStatus={handleToggleStatus}
          />
          <TaskForm onSubmit={handleAddTask} initialTask={{ title: '', description: '', status: 'In Progress' }} />
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        // Render sign-in form if the user is not authenticated
        <div>
          <h2>Sign In / Sign Up</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default App;

import { useState } from 'react';

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  function handleAddAssignment() {
    setIsFormOpen(true);
  }
  function handleCancel() {
    setIsFormOpen(false);
  }
  return (
    <main>
      <h1>Canvas Planner</h1>
      <p>Your assignments and study plan, in one place.</p>

      <section>
        <h2>Assignments</h2>
        <p>No assignments yet. Add assignments now!</p>
        <button type="button" onClick={handleAddAssignment}>
          Add assignment
        </button>
	{isFormOpen && (
   	  <div>
    	    <label htmlFor="assignment-title">Assignment title</label>
    	    <input id="assignment-title" type="text" />
	    <button type="button" onClick={handleCancel}>
	      Cancel
            </button>
  	  </div>
        )}
      </section>
    </main>
  );
}
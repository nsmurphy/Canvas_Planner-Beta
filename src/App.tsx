import { useState } from 'react';

type Assignment = {
  id: string;
  title: string;
};

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  function handleAddAssignment() {
    setIsFormOpen(true);
  }
  function handleCancel() {
    setIsFormOpen(false);
    setAssignmentTitle('');
  }
  function saveAssignment() {
    const title = assignmentTitle.trim();

    if (title === '') {
      return;
    }
    
    const newAssignment: Assignment = {
      id: crypto.randomUUID(),
      title: title,
    };

    setAssignments((previousAssignments) => [
      ...previousAssignments,
      newAssignment,
    ]);
    setAssignmentTitle('');
    setIsFormOpen(false);
  }
  return (
    <main>
      <h1>Canvas Planner</h1>
      <p>Your assignments and study plan, in one place.</p>

      <section>
        <h2>Assignments</h2>
        {assignments.length===0 && (
          <p>No assignments yet. Add assignments now!</p>
        )}
        <ul>
	  {assignments.map((assignment) => (
            <li key={assignment.id}>{assignment.title}</li>
          ))}
        </ul>
        <button type="button" onClick={handleAddAssignment}>
          Add assignment
        </button>
	{isFormOpen && (
   	  <div>
    	    <label htmlFor="assignment-title">Assignment title</label>
    	    <input 
              id="assignment-title"
              type="text"
              value={assignmentTitle}
              onChange={(event) => setAssignmentTitle(event.target.value)} 
            />
	    <button type="button" onClick={handleCancel}>
	      Cancel
            </button>
            <button type="button" onClick={saveAssignment}>
              Save assignment
            </button>
  	  </div>
        )}
      </section>
    </main>
  );
}
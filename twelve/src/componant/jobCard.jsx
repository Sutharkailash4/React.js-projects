import { useState } from "react";

function JobCard({ job }) {

  const [isSaved, setIsSaved] = useState(job.saved);

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      
      <h2>{job.company}</h2>
      <p>Role: {job.role}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>

      {/* Conditional Rendering */}
      {
        isSaved 
        ? <button onClick={() => setIsSaved(false)}>Unsave</button>
        : <button onClick={() => setIsSaved(true)}>Save</button>
      }

    </div>
  );
}

export default JobCard;
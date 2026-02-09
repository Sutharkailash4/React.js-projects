import JobList from "./componant/jobList.jsx";

function App() {

  const jobs = [
    {
      id: 1,
      company: "Amazon",
      role: "UI/UX Designer",
      location: "Mumbai",
      salary: "$120/hr",
      saved: true
    },
    {
      id: 2,
      company: "Google",
      role: "Frontend Developer",
      location: "Bangalore",
      salary: "$150/hr",
      saved: false
    },
    {
      id: 3,
      company: "Apple",
      role: "React Developer",
      location: "Delhi",
      salary: "$200/hr",
      saved: true
    }
  ];

  return (
    <div>
      <h1>Job Listings</h1>

      {/* props drilling start */}
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
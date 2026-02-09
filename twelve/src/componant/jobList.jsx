import JobCard from "./jobCard.jsx";

function JobList({ jobs }) {
  return (
    <div>
      {
        jobs.map((job) => {
          return (
            <JobCard key={job.id} job={job} />
          );
        })
      }
    </div>
  );
}

export default JobList;
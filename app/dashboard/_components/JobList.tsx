import { Button } from '@/components/ui/button'
import React from 'react'

function JobList({job}: {job: any}) {

  return (
    <li key={job.job_id} style={{ marginBottom: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
    <h2 style={{ marginBottom: "10px" }}>{job.job_title}</h2>
    {/* <p style={{ marginBottom: "10px" }}>{job.job_description?.split('\n').slice(0, 2).join(' ')}</p> */}
    <p style={{ marginBottom: "10px" }}>Experience: {job.job_required_experience.required_experience_in_months / 12} years</p>
    {job.job_min_salary && job.job_max_salary && job.job_salary_currency && (
        <p style={{ marginBottom: "10px" }}>
            Pay: {job.job_min_salary} - {job.job_max_salary} {job.job_salary_currency}
        </p>
    )}
    <p style={{ marginBottom: "10px" }}>Location: {job.job_city}, {job.job_state}</p>
    <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>Apply Here</a>
    <Button>Mock Interview</Button>
</li>
  )
}

export default JobList
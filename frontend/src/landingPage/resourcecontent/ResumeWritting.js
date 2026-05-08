import React from "react";

function ResumeWritingMasterclass() {
  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      {/* Simple Header */}
      <div className="mb-4">
        <h1 className="mb-2">💼 Resume Writing Masterclass</h1>
        <p className="text-secondary">
          Create a standout resume that gets you hired.
        </p>
        <hr />
      </div>

      {/* Why Your Resume Matters */}
      <div className="mb-4">
        <h5>🎯 Why Your Resume Matters</h5>
        <p className="text-secondary">
          Recruiters spend an average of <strong>7 seconds</strong> looking at each resume. 
          Your resume needs to grab attention instantly and show them you're the right person for the job [citation:7].
        </p>
      </div>

      {/* Before You Start */}
      <div className="mb-4">
        <h5>📋 Before You Start Writing</h5>
        <ul className="text-secondary">
          <li>Research the company and role you're applying for</li>
          <li>Look at job descriptions to find keywords</li>
          <li>Gather your work history, achievements, and skills</li>
          <li>Choose a clean, simple format</li>
        </ul>
      </div>

      {/* Resume Sections */}
      <h5 className="mb-3">📄 What to Include</h5>
      
      <div className="mb-4">
        <p className="fw-semibold mb-1">1. Contact Information</p>
        <p className="text-secondary">Name, phone, email, LinkedIn profile, location (city, state)</p>
        
        <p className="fw-semibold mb-1 mt-3">2. Professional Summary</p>
        <p className="text-secondary">2-3 sentences about who you are and what you bring. Tailor this to each job.</p>
        <div className="bg-light p-2 rounded">
          <p className="small text-secondary mb-0">
            <span className="fw-semibold">Example:</span> Marketing graduate with internship experience in social media management. Skilled in content creation, analytics, and campaign coordination.
          </p>
        </div>
        
        <p className="fw-semibold mb-1 mt-3">3. Work Experience</p>
        <p className="text-secondary">List jobs in reverse chronological order. For each role, include:</p>
        <ul className="text-secondary">
          <li>Job title, company name, location, dates</li>
          <li>3-5 bullet points with <strong>action verbs</strong> (managed, created, led, increased) [citation:9]</li>
          <li><strong>Numbers and achievements</strong> – not just duties</li>
        </ul>
        <div className="bg-light p-2 rounded">
          <p className="small text-secondary mb-0">
            <span className="fw-semibold">Instead of:</span> "Responsible for social media"<br />
            <span className="fw-semibold">Write:</span> "Grew Instagram following by 40% in 6 months through consistent content posting"
          </p>
        </div>
        
        <p className="fw-semibold mb-1 mt-3">4. Education</p>
        <p className="text-secondary">Degree, school name, graduation year, GPA (if impressive), relevant coursework</p>
        
        <p className="fw-semibold mb-1 mt-3">5. Skills</p>
        <p className="text-secondary">Hard skills (software, languages) and soft skills (communication, leadership). Match keywords from job description [citation:6].</p>
        
        <p className="fw-semibold mb-1 mt-3">6. Optional Sections</p>
        <p className="text-secondary">Certifications, projects, volunteer work, languages, awards</p>
      </div>

      {/* ATS Keywords */}
      <div className="mb-4">
        <h5>🤖 Applicant Tracking Systems (ATS)</h5>
        <p className="text-secondary">
          Many companies use software to scan resumes before a human sees them. Your resume needs the right keywords to get through [citation:7].
        </p>
        <div className="bg-light p-3 rounded">
          <p className="fw-semibold mb-2">How to optimize for ATS:</p>
          <ul className="text-secondary mb-0">
            <li>Use keywords from the job description</li>
            <li>Avoid images, graphics, or fancy formatting</li>
            <li>Save as PDF unless asked otherwise</li>
            <li>Use standard section headings (Experience, not "My Journey")</li>
          </ul>
        </div>
      </div>

      {/* Resume Formats */}
      <div className="mb-4">
        <h5>📁 Which Resume Format to Use</h5>
        <div className="row g-2">
          <div className="col-md-4">
            <div className="bg-light p-2 rounded">
              <p className="fw-semibold mb-1">Chronological</p>
              <p className="small text-secondary mb-0">Lists work history in order. Best for traditional roles.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-2 rounded">
              <p className="fw-semibold mb-1">Functional</p>
              <p className="small text-secondary mb-0">Focuses on skills. Good for career changers or gaps.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-2 rounded">
              <p className="fw-semibold mb-1">Combination</p>
              <p className="small text-secondary mb-0">Mixes both. Popular for most roles [citation:6].</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Verbs List */}
      <div className="mb-4">
        <h5>⚡ Strong Action Verbs to Use</h5>
        <div className="row">
          <div className="col-6">
            <ul className="text-secondary">
              <li>Achieved</li>
              <li>Created</li>
              <li>Developed</li>
              <li>Improved</li>
              <li>Increased</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="text-secondary">
              <li>Launched</li>
              <li>Led</li>
              <li>Managed</li>
              <li>Organized</li>
              <li>Reduced</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-4">
        <h5>🚫 Common Resume Mistakes</h5>
        <ul className="text-secondary">
          <li>Typos or grammatical errors</li>
          <li>Too long (1 page for students, 2 pages for experienced) [citation:6]</li>
          <li>Listing duties instead of achievements</li>
          <li>Using generic objectives ("Seeking a challenging position...")</li>
          <li>Including irrelevant personal info (age, photo, hobbies) [citation:7]</li>
          <li>Bad formatting or inconsistent spacing</li>
        </ul>
      </div>

      {/* Do's and Don'ts */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="bg-success bg-opacity-10 p-3 rounded">
            <p className="fw-semibold text-success mb-2">✅ Do</p>
            <ul className="text-secondary small mb-0">
              <li>Tailor resume for each job</li>
              <li>Use numbers and metrics</li>
              <li>Keep it to 1 page if possible</li>
              <li>Use reverse chronological order</li>
              <li>Save as PDF</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-danger bg-opacity-10 p-3 rounded">
            <p className="fw-semibold text-danger mb-2">❌ Don't</p>
            <ul className="text-secondary small mb-0">
              <li>Use the same resume for every job</li>
              <li>Include "References available upon request"</li>
              <li>Use fancy fonts or colors</li>
              <li>Lie or exaggerate</li>
              <li>Forget to proofread</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resume Checklist */}
      <div className="mb-4">
        <h5>✅ Final Resume Checklist</h5>
        <div className="bg-light p-3 rounded">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-1">✓ Contact info correct</p>
              <p className="mb-1">✓ Strong summary tailored to job</p>
              <p className="mb-1">✓ Action verbs used</p>
              <p className="mb-1">✓ Achievements with numbers</p>
            </div>
            <div className="col-md-6">
              <p className="mb-1">✓ Keywords from job description</p>
              <p className="mb-1">✓ No typos or errors</p>
              <p className="mb-1">✓ Clean, consistent formatting</p>
              <p className="mb-1">✓ Saved as PDF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Helpful Resources */}
      <div className="mb-4">
        <h5>📺 Video Resources</h5>
        <ul className="text-secondary">
          <li><span className="fw-semibold">Nano Tips for Writing a Resume</span> – LinkedIn Learning (9 minutes) [citation:6]</li>
          <li><span className="fw-semibold">How to Write an Effective Resume</span> – NPTEL (29 minutes) [citation:9]</li>
          <li><span className="fw-semibold">Application 101: CV Hacks</span> – RMIT Vietnam [citation:7]</li>
        </ul>
      </div>

      {/* Simple Footer */}
      <hr />
      <div className="text-center py-3">
        <p className="text-secondary small">
          Your resume is your story. Make it one they want to read.
        </p>
      </div>
    </div>
  );
}

export default ResumeWritingMasterclass;
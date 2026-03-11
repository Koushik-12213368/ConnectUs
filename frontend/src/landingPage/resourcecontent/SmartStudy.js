import React from "react";
import "./resourcecontent.css";

function SmartStudy() {
  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-primary mb-3">📚 Smart Study Techniques</h1>
        <p className="text-secondary lead">
          Study smarter, not harder. Small changes can make big differences.
        </p>
        <hr className="opacity-50" />
      </div>

      {/* Cramming Section */}
      <div className="mb-5">
        <h3 className="text-dark">⏰ Why Cramming Doesn't Work</h3>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          Pulling an all-nighter might feel productive, but your brain needs time 
          to move information into long-term memory. Without sleep, you forget 
          80% of what you studied within 24 hours.
        </p>
        <div className="bg-light p-3 rounded">
          <p className="mb-0 text-secondary">
            <span className="fw-semibold">Better approach:</span> Study in smaller chunks over several days. 
            Your brain needs time to process and store information.
          </p>
        </div>
      </div>

      {/* Pomodoro */}
      <div className="bg-info bg-opacity-10 p-4 rounded-4 mb-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="fs-1">🍅</span>
          <h3 className="text-dark mb-0">Pomodoro Technique</h3>
        </div>
        <p className="text-secondary mb-3">
          Study in focused 25-minute blocks, then take a 5-minute break. 
          After 4 cycles, take a longer 15-30 minute break.
        </p>
        <div className="d-flex gap-4 flex-wrap mb-3">
          <div className="text-center">
            <div className="bg-white p-2 rounded shadow-sm fw-bold text-primary">25 min</div>
            <p className="small text-secondary mt-1 mb-0">Study</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-2 rounded shadow-sm fw-bold text-primary">5 min</div>
            <p className="small text-secondary mt-1 mb-0">Break</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-2 rounded shadow-sm fw-bold text-primary">15-30 min</div>
            <p className="small text-secondary mt-1 mb-0">Long break</p>
          </div>
        </div>
        <p className="fst-italic text-secondary small">Why it works: Your brain stays fresh and focused in short bursts.</p>
      </div>

      {/* Active Recall */}
      <div className="bg-purple-light p-4 rounded-4 mb-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="fs-1">🔁</span>
          <h3 className="text-dark mb-0">Active Recall</h3>
        </div>
        <p className="text-secondary mb-3">
          Instead of just re-reading notes, test yourself. Close the book and try to remember 
          what you just learned. This builds stronger memory connections.
        </p>
        <div className="bg-white p-3 rounded-3 mb-3">
          <p className="fw-semibold mb-2">Try these:</p>
          <ul className="text-secondary mb-0">
            <li>Cover your notes and explain the topic out loud</li>
            <li>Write down everything you remember from a chapter</li>
            <li>Create practice questions and answer them without looking</li>
          </ul>
        </div>
        <p className="fst-italic text-secondary small">Why it works: Retrieving information strengthens the memory pathway.</p>
      </div>

      {/* Spaced Repetition */}
      <div className="bg-warning bg-opacity-10 p-4 rounded-4 mb-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="fs-1">📅</span>
          <h3 className="text-dark mb-0">Spaced Repetition</h3>
        </div>
        <p className="text-secondary mb-3">
          Review material at increasing intervals: after 1 day, then 3 days, then 1 week, then 1 month. 
          This tells your brain "this information is important, keep it."
        </p>
        <div className="d-flex gap-2 flex-wrap mb-3">
          <span className="badge bg-white text-dark p-2">Day 1</span>
          <span className="badge bg-white text-dark p-2">Day 3</span>
          <span className="badge bg-white text-dark p-2">Week 1</span>
          <span className="badge bg-white text-dark p-2">Week 2</span>
          <span className="badge bg-white text-dark p-2">Month 1</span>
        </div>
        <p className="fst-italic text-secondary small">Why it works: Just before you forget, you review and strengthen the memory.</p>
      </div>

      {/* Feynman Technique */}
      <div className="bg-success bg-opacity-10 p-4 rounded-4 mb-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="fs-1">👨‍🏫</span>
          <h3 className="text-dark mb-0">Feynman Technique</h3>
        </div>
        <p className="text-secondary mb-3">
          Teach it to someone else. If you can't explain a concept simply, you haven't understood it well enough.
        </p>
        <div className="bg-white p-3 rounded-3">
          <p className="fw-semibold mb-2">How to do it:</p>
          <ol className="text-secondary mb-0">
            <li>Write the topic at the top of a blank page</li>
            <li>Explain it as if teaching a child (use simple words)</li>
            <li>Where you get stuck, go back to your notes</li>
            <li>Simplify and use examples</li>
          </ol>
        </div>
      </div>

      {/* Comparison */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">⚖️ What Works vs What Doesn't</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="bg-danger bg-opacity-10 p-4 rounded-4">
              <p className="fw-bold text-danger mb-3">Less Effective</p>
              <ul className="text-secondary">
                <li>Re-reading notes</li>
                <li>Highlighting everything</li>
                <li>Cramming overnight</li>
                <li>Passive listening</li>
                <li>Studying with distractions</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-success bg-opacity-10 p-4 rounded-4">
              <p className="fw-bold text-success mb-3">More Effective</p>
              <ul className="text-secondary">
                <li>Active recall</li>
                <li>Practice testing</li>
                <li>Spaced repetition</li>
                <li>Teaching others</li>
                <li>Focused 25-min blocks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Study Space */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🌿 Your Study Space Matters</h3>
        <div className="row g-3">
          <div className="col-md-3 col-6">
            <div className="border-bottom pb-2">
              <span className="fs-4 me-2">🪑</span>
              <span>Comfortable chair</span>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="border-bottom pb-2">
              <span className="fs-4 me-2">💡</span>
              <span>Good lighting</span>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="border-bottom pb-2">
              <span className="fs-4 me-2">📵</span>
              <span>Phone away</span>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="border-bottom pb-2">
              <span className="fs-4 me-2">💧</span>
              <span>Water nearby</span>
            </div>
          </div>
        </div>
      </div>

      {/* Study Schedule */}
      <div className="bg-light p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-3">📋 A Simple Study Session</h3>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold" style={{ minWidth: "100px" }}>First 5 min</span>
            <span className="text-secondary">Review what you studied last time</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold" style={{ minWidth: "100px" }}>25 min</span>
            <span className="text-secondary">Study new material (pomodoro)</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold" style={{ minWidth: "100px" }}>5 min</span>
            <span className="text-secondary">Break - stand up, stretch, water</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold" style={{ minWidth: "100px" }}>25 min</span>
            <span className="text-secondary">Test yourself on what you just learned</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold" style={{ minWidth: "100px" }}>Last 5 min</span>
            <span className="text-secondary">Write down what to review tomorrow</span>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">✨ Quick Tips</h3>
        <div className="row g-2">
          <div className="col-md-3 col-6">
            <div className="bg-light p-2 rounded text-center">
              <span className="fw-semibold">🌙</span> Sleep 7-8 hrs
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-light p-2 rounded text-center">
              <span className="fw-semibold">🏃</span> Move between
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-light p-2 rounded text-center">
              <span className="fw-semibold">🍎</span> Light snacks
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-light p-2 rounded text-center">
              <span className="fw-semibold">🎵</span> Instrumental music
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-5">
        <p className="fs-5 text-dark">
          The best technique is the one you'll actually use. 
          Start small, be consistent, and be patient with yourself.
        </p>
        <hr className="w-25 mx-auto opacity-50" />
        <p className="text-secondary small">You've got this. One page at a time.</p>
      </div>
    </div>
  );
}

export default SmartStudy;
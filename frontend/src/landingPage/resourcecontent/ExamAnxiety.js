import React from "react";
import "./resourcecontent.css";

function ExamAnxiety() {
  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      {/* Simple Header */}
      <div className="mb-5">
        <h1 className="text-primary mb-3">😌 Understanding Exam Anxiety</h1>
        <p className="text-secondary lead">
          Take a deep breath. You're not alone, and this feeling is normal.
        </p>
        <hr className="opacity-50" />
      </div>

      {/* What is Exam Anxiety */}
      <div className="mb-5">
        <h3 className="text-dark">🌿 What is Exam Anxiety?</h3>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          Exam anxiety is that feeling of nervousness before or during a test. 
          Your heart beats faster, your palms sweat, and your mind might go blank.
          It's your body's natural response to pressure - like a runner before a race.
        </p>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          The good news? A little anxiety helps you focus. Too much can freeze you.
          The goal isn't to eliminate it completely, but to calm it down so you can think clearly.
        </p>
      </div>

      {/* You Are Not Alone */}
      <div className="bg-light p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-3">💙 You Are Not Alone</h3>
        <p className="text-secondary mb-2">• Nearly every student feels exam anxiety at some point</p>
        <p className="text-secondary mb-2">• Even top performers get nervous before tests</p>
        <p className="text-secondary mb-2">• Your classmates probably feel the same way you do</p>
        <p className="text-secondary mb-0">• This feeling doesn't mean you're unprepared or incapable</p>
      </div>

      {/* What Anxiety Feels Like */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🌊 What Anxiety Might Feel Like</h3>
        <div className="row g-3">
          <div className="col-md-3 col-6">
            <div className="bg-danger bg-opacity-10 p-3 rounded-4 text-center">
              <span className="fs-1">❤️</span>
              <p className="fw-semibold mt-2 mb-0">Racing heart</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-info bg-opacity-10 p-3 rounded-4 text-center">
              <span className="fs-1">💭</span>
              <p className="fw-semibold mt-2 mb-0">Mind going blank</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-purple-light p-3 rounded-4 text-center">
              <span className="fs-1">😰</span>
              <p className="fw-semibold mt-2 mb-0">Sweaty palms</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-warning bg-opacity-10 p-3 rounded-4 text-center">
              <span className="fs-1">🔄</span>
              <p className="fw-semibold mt-2 mb-0">Negative thoughts</p>
            </div>
          </div>
        </div>
        <p className="text-secondary fst-italic mt-3">
          These are just your body's way of saying "this matters to me."
        </p>
      </div>

      {/* Gentle Reminders */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🌸 Gentle Reminders</h3>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-start gap-3">
            <span className="fs-3">☀️</span>
            <span className="text-secondary">You have prepared for this. Trust your preparation.</span>
          </div>
          <div className="d-flex align-items-start gap-3">
            <span className="fs-3">🌱</span>
            <span className="text-secondary">This exam is one moment, not your whole story.</span>
          </div>
          <div className="d-flex align-items-start gap-3">
            <span className="fs-3">💧</span>
            <span className="text-secondary">You've overcome difficult things before. You will again.</span>
          </div>
          <div className="d-flex align-items-start gap-3">
            <span className="fs-3">🌟</span>
            <span className="text-secondary">Your worth is not measured by a test score.</span>
          </div>
        </div>
      </div>

      {/* Simple Breathing Exercise */}
      <div className="bg-info bg-opacity-10 p-4 rounded-4 mb-5 text-center">
        <h3 className="text-primary mb-3">🌬️ Try This Now</h3>
        <p className="text-primary mb-4">A 60-second breathing break</p>
        
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          <div>
            <div className="fs-1">⬆️</div>
            <p className="fw-semibold mt-2 mb-1">Breathe in</p>
            <p className="text-primary fw-bold fs-5">4 seconds</p>
          </div>
          <div>
            <div className="fs-1">⏸️</div>
            <p className="fw-semibold mt-2 mb-1">Hold</p>
            <p className="text-primary fw-bold fs-5">4 seconds</p>
          </div>
          <div>
            <div className="fs-1">⬇️</div>
            <p className="fw-semibold mt-2 mb-1">Breathe out</p>
            <p className="text-primary fw-bold fs-5">6 seconds</p>
          </div>
        </div>
        
        <p className="text-primary mt-4 small">
          Repeat 3-5 times. Feel your shoulders drop.
        </p>
      </div>

      {/* Before Your Exam */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">📝 Before Your Exam</h3>
        <ul className="text-secondary" style={{ lineHeight: "2.2" }}>
          <li>Get sleep - even 6 hours helps more than all-night studying</li>
          <li>Eat something light - your brain needs fuel</li>
          <li>Arrive early - rushing increases anxiety</li>
          <li>Take a deep breath before starting</li>
          <li>Read questions carefully - you know more than you think</li>
          <li>If stuck, move on and come back</li>
        </ul>
      </div>

      {/* After the Exam */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🍃 After Your Exam</h3>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          Whatever happened, it's done. Don't replay it over and over.
          Rest. Do something you enjoy. The grade doesn't define you.
          Tomorrow is a new day.
        </p>
      </div>

      {/* Final Comforting Message */}
      <div className="bg-light p-5 rounded-4 mb-5 text-center">
        <p className="fs-3 mb-3">✨</p>
        <p className="fs-5 fst-italic text-dark mb-0" style={{ lineHeight: "1.8" }}>
          "You have survived every difficult moment so far. <br />
          You will survive this too. And you will be okay."
        </p>
      </div>

      {/* Very Simple Footer */}
      <hr className="opacity-25" />
      <p className="text-center text-secondary small py-4">
        Be kind to yourself today.
      </p>
    </div>
  );
}

export default ExamAnxiety;
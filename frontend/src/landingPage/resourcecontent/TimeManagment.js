import React from "react";
import "./resourcecontent.css";

function TimeManagement() {
  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-primary mb-3">⏰ Time Management Mastery</h1>
        <p className="text-secondary lead">
          Get more done in less time. Less stress, better grades, actual free time.
        </p>
        <hr className="opacity-50" />
      </div>

      {/* Why Time Management Matters */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🎯 Why It Matters</h3>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          Good time management doesn't mean studying every waking hour. It means using your time well so you can study effectively AND have time to relax.
        </p>
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-4 text-center">
              <span className="fs-1">📚</span>
              <p className="fw-semibold mt-2 mb-1">Better grades</p>
              <p className="small text-secondary">Focused study long hours</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-4 text-center">
              <span className="fs-1">😌</span>
              <p className="fw-semibold mt-2 mb-1">Less stress</p>
              <p className="small text-secondary">No last-minute panic</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-4 text-center">
              <span className="fs-1">🎉</span>
              <p className="fw-semibold mt-2 mb-1">Free time</p>
              <p className="small text-secondary">Guilt-free breaks</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="bg-danger bg-opacity-10 p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-3">⚠️ Common Time Management Problems</h3>
        <div className="row">
          <div className="col-md-6">
            <ul className="text-secondary">
              <li className="mb-2">📱 Scrolling phone for "just 5 minutes"</li>
              <li className="mb-2">😴 Procrastinating until deadline</li>
              <li className="mb-2">📚 Not knowing where to start</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="text-secondary">
              <li className="mb-2">⏰ Underestimating how long things take</li>
              <li className="mb-2">🤹 Trying to multitask</li>
              <li className="mb-2">🚫 Not taking breaks, then burning out</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Simple Methods */}
      <h3 className="text-dark mb-4">🛠️ Simple Methods That Work</h3>
      
      {/* Method 1: Pomodoro */}
      <div className="bg-info bg-opacity-10 p-4 rounded-4 mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="fs-1">🍅</span>
          <div>
            <h4 className="text-dark mb-1">Pomodoro Technique</h4>
            <p className="text-secondary small mb-0">Study in short bursts with breaks</p>
          </div>
        </div>
        <div className="row g-2 text-center">
          <div className="col-4">
            <div className="bg-white p-2 rounded-3">
              <span className="fw-bold">25 min</span>
              <p className="small text-secondary mb-0">Study</p>
            </div>
          </div>
          <div className="col-4">
            <div className="bg-white p-2 rounded-3">
              <span className="fw-bold">5 min</span>
              <p className="small text-secondary mb-0">Break</p>
            </div>
          </div>
          <div className="col-4">
            <div className="bg-white p-2 rounded-3">
              <span className="fw-bold">15-30 min</span>
              <p className="small text-secondary mb-0">Long break</p>
            </div>
          </div>
        </div>
        <p className="text-secondary small mt-3 mb-0">✨ After 4 pomodoros, take a longer break.</p>
      </div>

      {/* Method 2: Time Blocking */}
      <div className="bg-success bg-opacity-10 p-4 rounded-4 mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="fs-1">📅</span>
          <div>
            <h4 className="text-dark mb-1">Time Blocking</h4>
            <p className="text-secondary small mb-0">Assign specific tasks to specific hours</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-4">
          <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
            <span className="fw-semibold">9:00 - 10:30</span>
            <span className="text-secondary">Study</span>
          </div>
          <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
            <span className="fw-semibold">10:30 - 10:45</span>
            <span className="text-secondary">Break ☕</span>
          </div>
          <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
            <span className="fw-semibold">10:45 - 12:00</span>
            <span className="text-secondary">Reading Novels</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">12:00 - 1:00</span>
            <span className="text-secondary">Lunch 🍜</span>
          </div>
        </div>
      </div>

      {/* Method 3: 1-3-5 Rule */}
      <div className="bg-warning bg-opacity-10 p-4 rounded-4 mb-5">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="fs-1">📋</span>
          <div>
            <h4 className="text-dark mb-1">1-3-5 Rule</h4>
            <p className="text-secondary small mb-0">Each day, plan:</p>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">1️⃣</span>
              <p className="fw-semibold mt-2 mb-0">1 big task</p>
              <p className="small text-secondary">Must do today</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">3️⃣</span>
              <p className="fw-semibold mt-2 mb-0">3 medium tasks</p>
              <p className="small text-secondary">Should do today</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">5️⃣</span>
              <p className="fw-semibold mt-2 mb-0">5 small tasks</p>
              <p className="small text-secondary">Could do today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Matrix */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">📊 Decide What to Do First</h3>
        <div className="row g-2">
          <div className="col-6">
            <div className="bg-danger bg-opacity-10 p-3 rounded-4">
              <p className="fw-bold text-danger mb-2">Urgent + Important</p>
              <p className="small text-secondary">Do these NOW</p>
              <p className="small text-secondary mb-0">• Assignment due tomorrow</p>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-warning bg-opacity-10 p-3 rounded-4">
              <p className="fw-bold text-warning-emphasis mb-2">Important, Not Urgent</p>
              <p className="small text-secondary">Schedule these</p>
              <p className="small text-secondary mb-0">• Exam next week</p>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-info bg-opacity-10 p-3 rounded-4">
              <p className="fw-bold text-info mb-2">Urgent, Not Important</p>
              <p className="small text-secondary">Do quickly or delegate</p>
              <p className="small text-secondary mb-0">• Reply to message</p>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-light p-3 rounded-4">
              <p className="fw-bold text-secondary mb-2">Not Urgent, Not Important</p>
              <p className="small text-secondary">Do later or skip</p>
              <p className="small text-secondary mb-0">• Scroll social media</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Planner Example */}
      <div className="bg-light p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-3">🗓️ Simple Weekly Planner</h3>
        <p className="fw-bold text-secondary mb-2"> You can Plan your things according to below table</p>
        
        <div className="row g-2">
          <div className="col-md-6">
            <div className="bg-white p-3 rounded-4 mb-2">
              <p className="fw-bold text-primary mb-2">Monday</p>
              <p className="small text-secondary mb-1">• Finish math homework</p>
              <p className="small text-secondary mb-1">• Read 20 pages history</p>
              <p className="small text-secondary mb-0">• Plan week ahead</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-3 rounded-4 mb-2">
              <p className="fw-bold text-primary mb-2">Tuesday</p>
              <p className="small text-secondary mb-1">• Science lab report</p>
              <p className="small text-secondary mb-1">• Group meeting</p>
              <p className="small text-secondary mb-0">• Review notes</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-3 rounded-4 mb-2">
              <p className="fw-bold text-primary mb-2">Wednesday</p>
              <p className="small text-secondary mb-1">• Practice problems</p>
              <p className="small text-secondary mb-1">• Outline essay</p>
              <p className="small text-secondary mb-0">• Watch lecture video</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-3 rounded-4 mb-2">
              <p className="fw-bold text-primary mb-2">Thursday</p>
              <p className="small text-secondary mb-1">• Essay first draft</p>
              <p className="small text-secondary mb-1">• Study group</p>
              <p className="small text-secondary mb-0">• Prepare questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Productivity Killers */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="bg-danger bg-opacity-10 p-4 rounded-4">
            <h5 className="text-dark mb-3">📵 Avoid These</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex gap-2">
                <span>✗</span>
                <span className="text-secondary">Phone in study space</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <span>✗</span>
                <span className="text-secondary">Multitasking</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <span>✗</span>
                <span className="text-secondary">No breaks = burnout</span>
              </li>
              <li className="d-flex gap-2">
                <span>✗</span>
                <span className="text-secondary">Saying yes to everything</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="bg-success bg-opacity-10 p-4 rounded-4">
            <h5 className="text-dark mb-3">✅ Do These Instead</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex gap-2">
                <span>✓</span>
                <span className="text-secondary">Phone in another room</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <span>✓</span>
                <span className="text-secondary">One thing at a time</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <span>✓</span>
                <span className="text-secondary">Short breaks every hour</span>
              </li>
              <li className="d-flex gap-2">
                <span>✓</span>
                <span className="text-secondary">Learn to say "no" or "later"</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 7-Day Time Management Challenge */}
      <div className="bg-primary bg-opacity-10 p-4 rounded-4 mb-5">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="fs-1">🚀</span>
          <h3 className="text-dark mb-0">7-Day Time Management Challenge</h3>
        </div>
        
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 1</span>
              <p className="small text-secondary mb-0">Write to-do list</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 2</span>
              <p className="small text-secondary mb-0">Pick 3最重要 tasks</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 3</span>
              <p className="small text-secondary mb-0">Try Pomodoro</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 4</span>
              <p className="small text-secondary mb-0">Phone away while studying</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 5</span>
              <p className="small text-secondary mb-0">Plan tomorrow tonight</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 6</span>
              <p className="small text-secondary mb-0">Take real breaks</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 7</span>
              <p className="small text-secondary mb-0">Review your week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="row g-2 mb-5">
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">📝</span>
            <p className="small mb-0">Write it down</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">🎯</span>
            <p className="small mb-0">One thing at a time</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">⏱️</span>
            <p className="small mb-0">Use a timer</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">✨</span>
            <p className="small mb-0">Reward yourself</p>
          </div>
        </div>
      </div>

      {/* Final Reminder */}
      <div className="text-center py-4">
        <p className="fs-5 text-dark">
          Time is the one thing you can't get back. Use it wisely, but also rest well.
        </p>
        <hr className="w-25 mx-auto opacity-50" />
        <p className="text-secondary small">
          Work smarter, not harder. You've got this.
        </p>
      </div>
    </div>
  );
}

export default TimeManagement;
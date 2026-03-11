import React from "react";
import "./resourcecontent.css";

function SleepHygiene() {
  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-primary mb-3">😴 Sleep Hygiene for Students</h1>
        <p className="text-secondary lead">
          Small habits that help you sleep better, wake up refreshed, and perform better in exams.
        </p>
        <hr className="opacity-50" />
      </div>

      {/* What is Sleep Hygiene */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🧼 What is Sleep Hygiene?</h3>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          Sleep hygiene means healthy habits that help you fall asleep easily and stay asleep through the night. 
          It's not about being "clean" – it's about creating the right conditions for quality rest.
        </p>
        <div className="bg-light p-3 rounded-4 mt-3">
          <p className="text-secondary mb-0 fst-italic">
            "Good sleep hygiene = better focus, memory, and mood during exam season."
          </p>
        </div>
      </div>

      {/* Why Students Struggle with Sleep */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🎓 Why Students Struggle</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">📱</span>
              <div>
                <h6 className="fw-semibold">Late-night screens</h6>
                <p className="text-secondary small mb-0">Blue light tricks brain into thinking it's daytime</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">☕</span>
              <div>
                <h6 className="fw-semibold">Too much caffeine</h6>
                <p className="text-secondary small mb-0">Coffee/tea late in the day keeps you awake</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">📚</span>
              <div>
                <h6 className="fw-semibold">Studying in bed</h6>
                <p className="text-secondary small mb-0">Brain associates bed with work, not rest</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">😰</span>
              <div>
                <h6 className="fw-semibold">Exam stress</h6>
                <p className="text-secondary small mb-0">Anxiety makes it hard to switch off</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Perfect Sleep Environment */}
      <div className="bg-info bg-opacity-10 p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-4">🛏️ Create Your Perfect Sleep Space</h3>
        
        <div className="row g-4">
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="fs-1">🌑</span>
              <div>
                <h6 className="fw-semibold">Dark is best</h6>
                <p className="text-secondary small">Blackout curtains or an eye mask</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="fs-1">🌡️</span>
              <div>
                <h6 className="fw-semibold">Cool temperature</h6>
                <p className="text-secondary small">18-20°C is ideal for sleep</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="fs-1">🤫</span>
              <div>
                <h6 className="fw-semibold">Quiet space</h6>
                <p className="text-secondary small">Earplugs or white noise if needed</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="fs-1">🛏️</span>
              <div>
                <h6 className="fw-semibold">Comfortable bed</h6>
                <p className="text-secondary small">Pillow and mattress that support you</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Sleep Schedule */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">⏰ Your Ideal Sleep Schedule</h3>
        <p className="text-secondary mb-3">Most students need 7-9 hours. Count backwards from when you wake up:</p>
        
        <div className="row g-3 text-center">
          <div className="col-md-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded-4">
              <p className="fw-bold text-primary mb-1">Wake up at 7 AM</p>
              <p className="small text-secondary mb-0">Sleep by 10:30 PM - 12 AM</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded-4">
              <p className="fw-bold text-primary mb-1">Wake up at 8 AM</p>
              <p className="small text-secondary mb-0">Sleep by 11:30 PM - 1 AM</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded-4">
              <p className="fw-bold text-primary mb-1">Wake up at 9 AM</p>
              <p className="small text-secondary mb-0">Sleep by 12:30 AM - 2 AM</p>
            </div>
          </div>
        </div>
        
        <p className="text-secondary small mt-3 text-center">
          💡 Aim for 5-6 complete sleep cycles (each cycle is 90 minutes)
        </p>
      </div>

      {/* What to Do Before Bed */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="bg-success bg-opacity-10 p-4 rounded-4 h-100">
            <h5 className="text-dark mb-3">✅ Do This Before Bed</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex gap-2">
                <span className="text-success">✓</span>
                <span className="text-secondary">Read a book (physical, not screen)</span>
              </li>
              <li className="mb-3 d-flex gap-2">
                <span className="text-success">✓</span>
                <span className="text-secondary">Write down tomorrow's tasks</span>
              </li>
              <li className="mb-3 d-flex gap-2">
                <span className="text-success">✓</span>
                <span className="text-secondary">Dim lights 1 hour before</span>
              </li>
              <li className="mb-3 d-flex gap-2">
                <span className="text-success">✓</span>
                <span className="text-secondary">Light stretching or deep breathing</span>
              </li>
              <li className="d-flex gap-2">
                <span className="text-success">✓</span>
                <span className="text-secondary">Warm (not hot) shower</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="bg-danger bg-opacity-10 p-4 rounded-4 h-100">
            <h5 className="text-dark mb-3">🚫 Avoid Before Bed</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex gap-2">
                <span className="text-danger">✗</span>
                <span className="text-secondary">Phone, laptop, TV (blue light)</span>
              </li>
              <li className="mb-3 d-flex gap-2">
                <span className="text-danger">✗</span>
                <span className="text-secondary">Caffeine after 2 PM</span>
              </li>
              <li className="mb-3 d-flex gap-2">
                <span className="text-danger">✗</span>
                <span className="text-secondary">Heavy meals within 2 hours</span>
              </li>
              <li className="mb-3 d-flex gap-2">
                <span className="text-danger">✗</span>
                <span className="text-secondary">Intense exercise late at night</span>
              </li>
              <li className="d-flex gap-2">
                <span className="text-danger">✗</span>
                <span className="text-secondary">Studying in bed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Relaxation Techniques */}
      <div className="bg-light p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-4">🧘 5-Minute Relaxation Before Sleep</h3>
        
        <div className="row g-3">
          <div className="col-md-4">
            <div className="text-center">
              <span className="fs-1">4-7-8</span>
              <p className="fw-semibold mt-2 mb-1">Breathing</p>
              <p className="small text-secondary">Inhale 4, hold 7, exhale 8</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <span className="fs-1">🔊</span>
              <p className="fw-semibold mt-2 mb-1">White Noise</p>
              <p className="small text-secondary">Rain, ocean, or fan sounds</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <span className="fs-1">📝</span>
              <p className="fw-semibold mt-2 mb-1">Brain Dump</p>
              <p className="small text-secondary">Write worries down, let them go</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sleep Routine for Exam Week */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">📅 Sleep Routine During Exam Week</h3>
        
        <div className="timeline">
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "100px" }}>6-8 PM</div>
            <div className="bg-light p-2 rounded-end w-100">Finish studying. No new heavy topics.</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "100px" }}>8-9 PM</div>
            <div className="bg-light p-2 rounded-end w-100">Light dinner. Avoid caffeine.</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "100px" }}>9-10 PM</div>
            <div className="bg-light p-2 rounded-end w-100">Relax – walk, music, talk to family.</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "100px" }}>10-10:30 PM</div>
            <div className="bg-light p-2 rounded-end w-100">No screens. Read or journal.</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "100px" }}>10:30 PM</div>
            <div className="bg-light p-2 rounded-end w-100">Lights out. Same time every night.</div>
          </div>
        </div>
      </div>

      {/* Common Sleep Myths */}
      <div className="bg-warning bg-opacity-10 p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-3">🚫 Sleep Myths Debunked</h3>
        
        <div className="row">
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "I can catch up on weekends"</p>
            <p className="small text-secondary">Irregular sleep confuses your body clock. Consistency matters more.</p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "5 hours is enough for me"</p>
            <p className="small text-secondary">Most people need 7-9 hours. Less affects memory and focus.</p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "Alcohol helps me sleep"</p>
            <p className="small text-secondary">It disrupts REM sleep. You wake up tired.</p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "Studying in bed is fine"</p>
            <p className="small text-secondary">Your brain associates bed with work, making sleep harder.</p>
          </div>
        </div>
      </div>

      {/* 7-Day Sleep Challenge */}
      <div className="bg-primary bg-opacity-10 p-4 rounded-4 mb-5">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="fs-1">🏆</span>
          <h3 className="text-dark mb-0">7-Day Sleep Challenge</h3>
        </div>
        
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 1</span>
              <p className="small text-secondary mb-0">No phone 1hr before</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 2</span>
              <p className="small text-secondary mb-0">Same bedtime</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 3</span>
              <p className="small text-secondary mb-0">No caffeine after 2pm</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 4</span>
              <p className="small text-secondary mb-0">Dark room</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 5</span>
              <p className="small text-secondary mb-0">Cool temperature</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 6</span>
              <p className="small text-secondary mb-0">Read before bed</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 7</span>
              <p className="small text-secondary mb-0">Wake up naturally</p>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-4 mb-0 small text-secondary">
          Try one habit each day. By day 7, you'll sleep like a pro.
        </p>
      </div>

      {/* Quick Tips */}
      <div className="row g-2 mb-5">
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">🌙</span>
            <p className="small mb-0">Dark room</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">⏰</span>
            <p className="small mb-0">Consistent time</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">📵</span>
            <p className="small mb-0">No screens</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">🧘</span>
            <p className="small mb-0">Relax before bed</p>
          </div>
        </div>
      </div>

      {/* Final Reminder */}
      <div className="text-center py-4">
        <p className="fs-5 text-dark">
          Good sleep isn't a luxury – it's part of studying.
        </p>
        <hr className="w-25 mx-auto opacity-50" />
        <p className="text-secondary small">
          Your brain works while you sleep. Give it the rest it deserves.
        </p>
      </div>
    </div>
  );
}

export default SleepHygiene;
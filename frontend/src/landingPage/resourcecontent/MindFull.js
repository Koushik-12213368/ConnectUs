import React from "react";
import "./resourcecontent.css";

function MindfulnessBasics() {
  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-primary mb-3">🧘 Mindfulness Basics</h1>
        <p className="text-secondary lead">
          Being present in the moment, without judgment. Simple practices for calmer, focused students.
        </p>
        <hr className="opacity-50" />
      </div>

      {/* What is Mindfulness */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🌿 What is Mindfulness?</h3>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          Mindfulness is paying attention to the present moment – on purpose, without judgment. 
          It's noticing what's happening right now, instead of worrying about the future or regretting the past.
        </p>
        <div className="bg-light p-4 rounded-4 mt-3">
          <p className="text-secondary fst-italic mb-0">
            "Mindfulness isn't about emptying your mind. It's about noticing what's already there."
          </p>
        </div>
      </div>

      {/* Why Students Need Mindfulness */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">🎓 Why Students Need Mindfulness</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="d-flex gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">😰</span>
              <div>
                <h6 className="fw-semibold">Less Exam Anxiety</h6>
                <p className="text-secondary small mb-0">Calms the racing mind before tests</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">📚</span>
              <div>
                <h6 className="fw-semibold">Better Focus</h6>
                <p className="text-secondary small mb-0">Stay concentrated while studying</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">😴</span>
              <div>
                <h6 className="fw-semibold">Improves Sleep</h6>
                <p className="text-secondary small mb-0">Quiet the mind before bed</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 p-3 bg-light rounded-4">
              <span className="fs-2">😌</span>
              <div>
                <h6 className="fw-semibold">Less Stress</h6>
                <p className="text-secondary small mb-0">Respond calmly to pressure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Minute Breathing Exercise */}
      <div className="bg-info bg-opacity-10 p-4 rounded-4 mb-5">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="fs-1">🌬️</span>
          <h3 className="text-dark mb-0">3-Minute Breathing Space</h3>
        </div>
        
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: "60px", height: "60px" }}>
                <span className="fs-2">1️⃣</span>
              </div>
              <h6 className="fw-semibold">Minute 1</h6>
              <p className="small text-secondary">Just notice. How does your body feel? Don't change anything.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: "60px", height: "60px" }}>
                <span className="fs-2">2️⃣</span>
              </div>
              <h6 className="fw-semibold">Minute 2</h6>
              <p className="small text-secondary">Focus on your breath. Feel air moving in and out.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: "60px", height: "60px" }}>
                <span className="fs-2">3️⃣</span>
              </div>
              <h6 className="fw-semibold">Minute 3</h6>
              <p className="small text-secondary">Expand awareness to your whole body. Sit with it all.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary btn-sm" onClick={() => alert("Take 3 deep breaths right now. Feel your shoulders relax.")}>
            Try It Now
          </button>
        </div>
      </div>

      {/* Simple Mindfulness Techniques */}
      <h3 className="text-dark mb-4">🧂 Simple Techniques for Busy Students</h3>
      
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="bg-success bg-opacity-10 p-4 rounded-4 h-100">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="fs-1">🍇</span>
              <h5 className="text-dark mb-0">Mindful Eating</h5>
            </div>
            <p className="text-secondary small">Eat one meal without phone or laptop. Notice the taste, texture, smell.</p>
            <p className="fw-semibold text-success small mt-3">Try: Your next snack – just eat, nothing else.</p>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="bg-warning bg-opacity-10 p-4 rounded-4 h-100">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="fs-1">🚶</span>
              <h5 className="text-dark mb-0">Mindful Walking</h5>
            </div>
            <p className="text-secondary small">Walk to class without headphones. Feel your feet, notice the air, look around.</p>
            <p className="fw-semibold text-warning-emphasis small mt-3">Try: 5-minute walk, fully present.</p>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="bg-primary bg-opacity-10 p-4 rounded-4 h-100">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="fs-1">👂</span>
              <h5 className="text-dark mb-0">Mindful Listening</h5>
            </div>
            <p className="text-secondary small">Listen to music or a friend without thinking about what to say next.</p>
            <p className="fw-semibold text-primary small mt-3">Try: One song, just listen.</p>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="bg-purple-light p-4 rounded-4 h-100">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="fs-1">✍️</span>
              <h5 className="text-dark mb-0">Mindful Journaling</h5>
            </div>
            <p className="text-secondary small">Write for 5 minutes without stopping. Just thoughts on paper.</p>
            <p className="fw-semibold text-purple small mt-3">Try: "Right now I'm feeling..."</p>
          </div>
        </div>
      </div>

      {/* 5 Senses Exercise */}
      <div className="bg-light p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-4">🔍 5-4-3-2-1 Grounding Exercise</h3>
        <p className="text-secondary mb-4">When anxiety hits, use this to come back to the present:</p>
        
        <div className="row g-3">
          <div className="col-6 col-md-2">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">👁️</span>
              <p className="fw-semibold mb-1">5</p>
              <p className="small text-secondary">See</p>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">👐</span>
              <p className="fw-semibold mb-1">4</p>
              <p className="small text-secondary">Touch</p>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">👂</span>
              <p className="fw-semibold mb-1">3</p>
              <p className="small text-secondary">Hear</p>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">👃</span>
              <p className="fw-semibold mb-1">2</p>
              <p className="small text-secondary">Smell</p>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="bg-white p-3 rounded-4 text-center">
              <span className="fs-2">👅</span>
              <p className="fw-semibold mb-1">1</p>
              <p className="small text-secondary">Taste</p>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-4 mb-0 small text-secondary">
          Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.
        </p>
      </div>

      {/* Mindfulness in Daily Life */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">📅 Mindfulness in Your Day</h3>
        
        <div className="timeline">
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "90px" }}>Morning</div>
            <div className="bg-light p-2 rounded-end w-100">3 deep breaths before checking phone</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "90px" }}>Studying</div>
            <div className="bg-light p-2 rounded-end w-100">Notice when mind wanders, gently bring it back</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "90px" }}>Meals</div>
            <div className="bg-light p-2 rounded-end w-100">First 3 bites without distraction</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "90px" }}>Walking</div>
            <div className="bg-light p-2 rounded-end w-100">Feel feet on ground for 1 minute</div>
          </div>
          <div className="d-flex mb-3">
            <div className="bg-primary text-white px-3 py-2 rounded-start" style={{ minWidth: "90px" }}>Before bed</div>
            <div className="bg-light p-2 rounded-end w-100">Scan body from head to toe, relaxing each part</div>
          </div>
        </div>
      </div>

      {/* Common Myths */}
      <div className="bg-warning bg-opacity-10 p-4 rounded-4 mb-5">
        <h3 className="text-dark mb-3">🤔 Common Mindfulness Myths</h3>
        
        <div className="row">
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "I have to empty my mind"</p>
            <p className="small text-secondary">Not true. Thoughts will come. Just notice them and let them pass.</p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "I need 30 minutes daily"</p>
            <p className="small text-secondary">Even 1 minute counts. Consistency matters more than duration.</p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "It's religious/spiritual"</p>
            <p className="small text-secondary">Mindfulness is secular. It's just attention training.</p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="fw-semibold mb-1">❌ "I'm not good at it"</p>
            <p className="small text-secondary">Every time you notice you're distracted, you're being mindful.</p>
          </div>
        </div>
      </div>

      {/* 7-Day Mindfulness Challenge */}
      <div className="bg-success bg-opacity-10 p-4 rounded-4 mb-5">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="fs-1">🌱</span>
          <h3 className="text-dark mb-0">7-Day Mindfulness Challenge</h3>
        </div>
        
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 1</span>
              <p className="small text-secondary mb-0">3 deep breaths</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 2</span>
              <p className="small text-secondary mb-0">Mindful tea/coffee</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 3</span>
              <p className="small text-secondary mb-0">5-min walk</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 4</span>
              <p className="small text-secondary mb-0">Body scan</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 5</span>
              <p className="small text-secondary mb-0">Notice 5 things</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 6</span>
              <p className="small text-secondary mb-0">Mindful eating</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-white p-2 rounded-3 text-center">
              <span className="fw-bold">Day 7</span>
              <p className="small text-secondary mb-0">10-min meditation</p>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-4 mb-0 small text-secondary">
          Start with 1 minute. Build the habit. Be kind to yourself.
        </p>
      </div>

      {/* Recommended Apps */}
      <div className="mb-5">
        <h3 className="text-dark mb-3">📱 Free Mindfulness Apps</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-4 text-center">
              <span className="fs-1">🧘</span>
              <p className="fw-semibold mt-2 mb-1">Smiling Mind</p>
              <p className="small text-secondary">Free, made for students</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-4 text-center">
              <span className="fs-1">🌿</span>
              <p className="fw-semibold mt-2 mb-1">Insight Timer</p>
              <p className="small text-secondary">Thousands of free meditations</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-4 text-center">
              <span className="fs-1">🎧</span>
              <p className="fw-semibold mt-2 mb-1">UCLA Mindful</p>
              <p className="small text-secondary">Free guided practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="row g-2 mb-5">
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">👃</span>
            <p className="small mb-0">Breathe</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">👀</span>
            <p className="small mb-0">Notice</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">🤲</span>
            <p className="small mb-0">Accept</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="bg-light p-2 rounded-3 text-center">
            <span className="fs-4">🙏</span>
            <p className="small mb-0">Return</p>
          </div>
        </div>
      </div>

      {/* Final Reminder */}
      <div className="text-center py-4">
        <p className="fs-5 text-dark">
          You don't have to be good at mindfulness. You just have to show up.
        </p>
        <hr className="w-25 mx-auto opacity-50" />
        <p className="text-secondary small">
          One breath at a time. One moment at a time.
        </p>
      </div>
    </div>
  );
}

export default MindfulnessBasics;
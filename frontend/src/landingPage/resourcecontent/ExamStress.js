import React, { useState } from "react";
import "./resourcecontent.css";

function ExamStress() {
  const [stressLevel, setStressLevel] = useState(5);
  const [studyHours, setStudyHours] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [breaksTaken, setBreaksTaken] = useState("");
  const [stressResult, setStressResult] = useState(null);
  
  // Stress relief tasks
  const [stressTasks, setStressTasks] = useState([
    { id: 1, text: "Take 5 deep breaths", completed: false, category: "immediate" },
    { id: 2, text: "Drink a glass of water", completed: false, category: "immediate" },
    { id: 3, text: "10-minute walk outside", completed: false, category: "active" },
    { id: 4, text: "Write down 3 things you're grateful for", completed: false, category: "mindfulness" },
    { id: 5, text: "Listen to calming music (5 mins)", completed: false, category: "relaxation" },
    { id: 6, text: "Stretch your neck and shoulders", completed: false, category: "physical" },
    { id: 7, text: "Talk to a friend or family member", completed: false, category: "social" },
    { id: 8, text: "Review what you've already studied (not what's left)", completed: false, category: "study" },
  ]);

  // Daily affirmations
  const affirmations = [
    "I am prepared and capable",
    "This exam does not define my worth",
    "I have studied and I am ready",
    "I will do my best and that is enough",
    "Stress is temporary, my knowledge is permanent",
    "I am calm, focused, and confident",
    "One step at a time, I will succeed"
  ];

  // Calculate stress score
  const calculateStress = () => {
    let score = 0;
    let recommendations = [];
    
    // Check study hours
    if (studyHours) {
      if (studyHours > 8) {
        score += 3;
        recommendations.push("⚠️ Studying more than 8 hours can lead to burnout. Take more breaks.");
      } else if (studyHours < 3) {
        score += 2;
        recommendations.push("📚 Try to increase study time gradually with proper breaks.");
      }
    }
    
    // Check sleep
    if (sleepHours) {
      if (sleepHours < 6) {
        score += 4;
        recommendations.push("😴 Sleep deprivation increases stress by 40%. Aim for 7-8 hours.");
      } else if (sleepHours >= 7) {
        score -= 2;
        recommendations.push("✅ Great job getting enough sleep! This helps memory and focus.");
      }
    }
    
    // Check breaks
    if (breaksTaken) {
      if (breaksTaken < 2) {
        score += 3;
        recommendations.push("⏰ Take a 10-minute break every hour. Your brain needs rest to absorb information.");
      } else {
        score -= 1;
        recommendations.push("👍 Good job taking breaks! This prevents mental fatigue.");
      }
    }
    
    // Add stress level
    score += parseInt(stressLevel);
    
    let stressCategory = "";
    let advice = "";
    
    if (score <= 5) {
      stressCategory = "Low Stress 😊";
      advice = "You're managing well! Keep up your healthy habits.";
    } else if (score <= 10) {
      stressCategory = "Moderate Stress 😐";
      advice = "Some stress is normal. Try the techniques below to stay balanced.";
    } else if (score <= 15) {
      stressCategory = "High Stress 😰";
      advice = "Your stress levels are high. Focus on self-care and use the stress relief tasks.";
    } else {
      stressCategory = "Severe Stress ⚠️";
      advice = "Please prioritize your mental health. Talk to someone and take a break if needed.";
    }
    
    setStressResult({
      score: score,
      category: stressCategory,
      advice: advice,
      recommendations: recommendations
    });
  };

  // Toggle stress relief task
  const toggleTask = (id) => {
    setStressTasks(stressTasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Get task progress
  const getTaskProgress = () => {
    const completed = stressTasks.filter(t => t.completed).length;
    return (completed / stressTasks.length) * 100;
  };

  // Get random affirmation
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);
  
  const newAffirmation = () => {
    const random = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[random]);
  };

  // Study techniques data
  const studyTechniques = [
    { name: "Pomodoro Technique", desc: "25 min study + 5 min break", benefit: "Maintains focus, prevents burnout" },
    { name: "Active Recall", desc: "Test yourself instead of re-reading", benefit: "60% better retention" },
    { name: "Feynman Technique", desc: "Teach it to someone else", benefit: "Identifies knowledge gaps" },
    { name: "Spaced Repetition", desc: "Review at increasing intervals", benefit: "Moves info to long-term memory" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">
        <span className="me-2">📚</span> 
        Managing Exam Stress & Academic Anxiety
      </h1>

      {/* Stress Assessment Tool */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">📊</span> Exam Stress Self-Assessment
          </h3>
          
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-bold">😰 How stressed do you feel right now? (1-10)</label>
              <div className="d-flex align-items-center gap-3">
                <span>Low</span>
                <input 
                  type="range" 
                  className="form-range" 
                  min="1" 
                  max="10" 
                  value={stressLevel}
                  onChange={(e) => setStressLevel(e.target.value)}
                />
                <span>High</span>
                <span className="badge bg-primary p-2">{stressLevel}/10</span>
              </div>
            </div>
            
            <div className="col-md-6">
              <label className="form-label fw-bold">📖 Hours studying today?</label>
              <input 
                type="number" 
                className="form-control" 
                placeholder="e.g., 6"
                value={studyHours}
                onChange={(e) => setStudyHours(e.target.value)}
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label fw-bold">😴 Hours of sleep last night?</label>
              <input 
                type="number" 
                className="form-control" 
                placeholder="e.g., 7"
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label fw-bold">⏰ Breaks taken today?</label>
              <input 
                type="number" 
                className="form-control" 
                placeholder="e.g., 3"
                value={breaksTaken}
                onChange={(e) => setBreaksTaken(e.target.value)}
              />
            </div>
            
            <div className="col-12">
              <button className="btn btn-primary" onClick={calculateStress}>
                Analyze My Stress
              </button>
            </div>
          </div>

          {/* Stress Results */}
          {stressResult && (
            <div className="mt-4 p-4 bg-light rounded-3">
              <h5 className="mb-3">📋 Your Stress Analysis</h5>
              <div className="row">
                <div className="col-md-4">
                  <p><strong>Stress Score:</strong> <span className="badge bg-primary p-2">{stressResult.score}</span></p>
                </div>
                <div className="col-md-4">
                  <p><strong>Category:</strong> {stressResult.category}</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Advice:</strong> {stressResult.advice}</p>
                </div>
              </div>
              
              {stressResult.recommendations.length > 0 && (
                <div className="mt-3">
                  <p className="fw-bold mb-2">📌 Personalized Recommendations:</p>
                  <ul className="list-group">
                    {stressResult.recommendations.map((rec, index) => (
                      <li key={index} className="list-group-item bg-white">{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Why Exam Stress Happens */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">🧠</span> Why Exam Stress Happens
          </h3>
          
          <div className="row">
            <div className="col-md-6">
              <h5>The Science of Stress</h5>
              <p>When you're stressed, your body releases cortisol and adrenaline. In small doses, this helps you focus. But chronic stress:</p>
              <ul>
                <li><strong>Impairs memory:</strong> High cortisol damages hippocampus cells</li>
                <li><strong>Reduces focus:</strong> Your brain is in "survival mode" not "learning mode"</li>
                <li><strong>Causes physical symptoms:</strong> Headaches, fatigue, insomnia</li>
                <li><strong>Leads to burnout:</strong> Complete mental and physical exhaustion</li>
              </ul>
            </div>
            
            <div className="col-md-6">
              <h5>Common Triggers for Students</h5>
              <div className="row">
                <div className="col-6 mb-2">
                  <div className="p-2 border rounded-3 text-center">
                    <span className="fs-3">⏰</span>
                    <p className="small mb-0">Time pressure</p>
                  </div>
                </div>
                <div className="col-6 mb-2">
                  <div className="p-2 border rounded-3 text-center">
                    <span className="fs-3">📊</span>
                    <p className="small mb-0">Fear of failure</p>
                  </div>
                </div>
                <div className="col-6 mb-2">
                  <div className="p-2 border rounded-3 text-center">
                    <span className="fs-3">📚</span>
                    <p className="small mb-0">Information overload</p>
                  </div>
                </div>
                <div className="col-6 mb-2">
                  <div className="p-2 border rounded-3 text-center">
                    <span className="fs-3">😴</span>
                    <p className="small mb-0">Sleep deprivation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stress Relief Toolkit */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">🧰</span> Stress Relief Toolkit
          </h3>
          
          <div className="progress mb-4" style={{ height: '25px' }}>
            <div 
              className="progress-bar bg-success" 
              style={{ width: `${getTaskProgress()}%` }}
            >
              {Math.round(getTaskProgress())}% Stress Relief Progress
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <h6 className="mb-3">✅ Try these techniques (check off as you do them):</h6>
              
              <div className="row">
                <div className="col-md-6">
                  <p className="fw-bold small text-primary mb-2">IMMEDIATE RELIEF</p>
                  {stressTasks.filter(t => t.category === "immediate" || t.category === "mindfulness").map(task => (
                    <div className="form-check mb-2" key={task.id}>
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id={`task${task.id}`}
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                      />
                      <label className={`form-check-label small ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`} htmlFor={`task${task.id}`}>
                        {task.text}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="col-md-6">
                  <p className="fw-bold small text-primary mb-2">ACTIVE COPING</p>
                  {stressTasks.filter(t => t.category === "active" || t.category === "physical" || t.category === "social" || t.category === "relaxation").map(task => (
                    <div className="form-check mb-2" key={task.id}>
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id={`task${task.id}`}
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                      />
                      <label className={`form-check-label small ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`} htmlFor={`task${task.id}`}>
                        {task.text}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                <h6 className="mb-2">⚡ 5-Minute Stress Reset</h6>
                <p className="small mb-2">1. Breathe in for 4 seconds</p>
                <p className="small mb-2">2. Hold for 4 seconds</p>
                <p className="small mb-2">3. Exhale for 6 seconds</p>
                <p className="small mb-2">4. Repeat 5 times</p>
                <p className="small mb-0">5. Drink cold water</p>
              </div>
              
              <button className="btn btn-outline-primary w-100 mt-3" onClick={() => {
                alert("🧘 Take 5 deep breaths right now. Feel the stress leaving your body.");
              }}>
                Do 5-Minute Reset Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Effective Study Techniques */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">📖</span> Study Smarter, Not Harder
          </h3>
          
          <div className="row g-3">
            {studyTechniques.map((tech, index) => (
              <div className="col-md-3" key={index}>
                <div className="p-3 border rounded-3 h-100">
                  <h6 className="fw-bold">{tech.name}</h6>
                  <p className="small text-secondary mb-2">{tech.desc}</p>
                  <p className="small text-success mb-0">✓ {tech.benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="bg-warning bg-opacity-10 p-3 rounded-3">
                <h6>⏰ Recommended Study Schedule</h6>
                <p className="small mb-1">• 25 min study → 5 min break (repeat 4x)</p>
                <p className="small mb-1">• After 4 sessions → 30 min long break</p>
                <p className="small mb-0">• Max 8 hours of focused study per day</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-danger bg-opacity-10 p-3 rounded-3">
                <h6>🚫 What NOT to do</h6>
                <p className="small mb-1">• Cramming all night (forgetting 80% in 24hrs)</p>
                <p className="small mb-1">• Multitasking (reduces efficiency by 40%)</p>
                <p className="small mb-0">• Skipping meals (brain needs fuel)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Positive Affirmations */}
      <div className="card shadow mb-4">
        <div className="card-body p-4 text-center">
          <h3 className="text-primary mb-4">
            <span className="me-2">💭</span> Daily Positive Affirmations
          </h3>
          
          <div className="p-4 bg-light rounded-3 mb-3">
            <p className="fs-4 fst-italic mb-0">"{currentAffirmation}"</p>
          </div>
          
          <button className="btn btn-outline-primary" onClick={newAffirmation}>
            New Affirmation
          </button>
        </div>
      </div>

      {/* When to Seek Help */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">🆘</span> When to Seek Professional Help
          </h3>
          
          <div className="row">
            <div className="col-md-8">
              <p>If you experience any of these for more than 2 weeks, please talk to a counselor:</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent">⚠️ Can't sleep or sleeping too much</li>
                <li className="list-group-item bg-transparent">⚠️ Loss of appetite or overeating</li>
                <li className="list-group-item bg-transparent">⚠️ Feeling hopeless or worthless</li>
                <li className="list-group-item bg-transparent">⚠️ Panic attacks (racing heart, difficulty breathing)</li>
                <li className="list-group-item bg-transparent">⚠️ Unable to study despite trying</li>
              </ul>
            </div>
            
           <div className="col-md-4">
                <div className="bg-info bg-opacity-25 text-dark p-3 rounded-3 border border-info">
                    <h6 className="mb-3 text-info">📞 Crisis Support</h6>
                    <p className="small mb-2">National Suicide Prevention Lifeline:</p>
                    <p className="fw-bold">988</p>
                    <p className="small mb-2">Crisis Text Line:</p>
                    <p className="fw-bold">Text HOME to : 741741</p>
                    <p className="fw-bold">Text CAMPUS ON : (555) 123-4567</p>
                    <p className="small mb-0 mt-3">Your school counseling center is free and confidential.</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">📰</span> Recommended Reading
          </h3>
          
          <div className="row g-3">
            <div className="col-md-6">
              <div className="d-flex align-items-start p-3 border rounded-3">
                <span className="fs-2 me-3">📄</span>
                <div>
                  <h6 className="mb-1">Test Anxiety: Causes and Coping Strategies</h6>
                  <p className="small text-secondary mb-1">American Psychological Association • 6 min read</p>
                  <a href="#" className="small text-primary">Read →</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start p-3 border rounded-3">
                <span className="fs-2 me-3">📄</span>
                <div>
                  <h6 className="mb-1">The Student's Guide to Managing Stress</h6>
                  <p className="small text-secondary mb-1">Harvard Health • 8 min read</p>
                  <a href="#" className="small text-primary">Read →</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start p-3 border rounded-3">
                <span className="fs-2 me-3">📄</span>
                <div>
                  <h6 className="mb-1">Mindfulness Techniques for Exam Season</h6>
                  <p className="small text-secondary mb-1">Mindful.org • 5 min read</p>
                  <a href="#" className="small text-primary">Read →</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start p-3 border rounded-3">
                <span className="fs-2 me-3">📄</span>
                <div>
                  <h6 className="mb-1">Sleep, Stress, and Academic Performance</h6>
                  <p className="small text-secondary mb-1">Sleep Foundation • 7 min read</p>
                  <a href="#" className="small text-primary">Read →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips Footer */}
      <div className="bg-light p-4 rounded-3 text-center mb-5">
        <h5>✨ Quick Stress Relief Tips</h5>
        <div className="row mt-3">
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">💧</span>
            <small>Drink water</small>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">🚶</span>
            <small>Walk 10 mins</small>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">🧘</span>
            <small>Deep breaths</small>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">📵</span>
            <small>Phone off 1hr</small>
          </div>
        </div>
        <p className="small text-secondary mt-3 mb-0">Remember: This too shall pass. You are more than your exam scores.</p>
      </div>
    </div>
  );
}

export default ExamStress;
import React, { useState } from "react";
import "./resourcecontent.css";

function ImposterSyndrome() {
  const [activeTab, setActiveTab] = useState("what");
  const [showTip, setShowTip] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  
  // Self-assessment questions
  const [quizAnswers, setQuizAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null
  });
  
  const [quizResult, setQuizResult] = useState(null);

  // Common symptoms
  const symptoms = [
    { id: 1, name: "Attributing success to luck", desc: "You believe your achievements are just 'lucky breaks'" },
    { id: 2, name: "Fear of being 'found out'", desc: "Worried others will discover you're not as capable as they think" },
    { id: 3, name: "Downplaying achievements", desc: "You say 'it was nothing' or 'anyone could have done it'" },
    { id: 4, name: "Overpreparing", desc: "You work much harder than needed to feel 'safe'" },
    { id: 5, name: "Can't accept praise", desc: "Compliments make you uncomfortable or feel undeserved" },
    { id: 6, name: "Comparing to others", desc: "You feel everyone else is smarter/more talented" }
  ];

  // Daily affirmations
  const affirmations = [
    "I deserve to be here",
    "My hard work got me where I am",
    "I don't have to be perfect to be worthy",
    "Mistakes are how I learn and grow",
    "My unique perspective has value",
    "I am allowed to take up space",
    "Comparison is the thief of joy"
  ];

  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);

  // Handle quiz answers
  const handleQuizAnswer = (question, value) => {
    setQuizAnswers({
      ...quizAnswers,
      [question]: value
    });
  };

  // Calculate quiz result
  const calculateQuizResult = () => {
    const answeredCount = Object.values(quizAnswers).filter(v => v !== null).length;
    
    if (answeredCount < 5) {
      alert("Please answer all questions");
      return;
    }
    
    const yesCount = Object.values(quizAnswers).filter(v => v === "yes").length;
    
    let result = "";
    let advice = "";
    
    if (yesCount <= 1) {
      result = "Low Imposter Syndrome 😊";
      advice = "You rarely experience imposter feelings. Keep recognizing your worth!";
    } else if (yesCount <= 3) {
      result = "Moderate Imposter Syndrome 😐";
      advice = "You sometimes doubt yourself. Practice acknowledging your achievements.";
    } else {
      result = "Significant Imposter Syndrome 😟";
      advice = "You often feel like a fraud. Remember: your feelings aren't facts. You've earned your place.";
    }
    
    setQuizResult({
      result: result,
      advice: advice,
      yesCount: yesCount
    });
  };

  // Reset quiz
  const resetQuiz = () => {
    setQuizAnswers({
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null
    });
    setQuizResult(null);
  };

  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary">
          <span className="me-2">🎭</span> 
          Overcoming Imposter Syndrome
        </h1>
        <p className="lead text-secondary">
          You're not alone. 70% of people experience imposter syndrome at some point.
        </p>
        <div className="d-flex justify-content-center gap-2">
          <span className="badge bg-light text-dark p-2">Students</span>
          <span className="badge bg-light text-dark p-2">Professionals</span>
          <span className="badge bg-light text-dark p-2">Creators</span>
          <span className="badge bg-light text-dark p-2">Everyone</span>
        </div>
      </div>

      {/* Quick Fact */}
      <div 
        className="alert alert-info text-center mb-4" 
        style={{ cursor: 'pointer' }}
        onClick={() => setShowTip(!showTip)}
      >
        <span className="fw-bold">💡 Quick Fact:</span> The term "Imposter Syndrome" was coined in 1978 by psychologists Clance and Imes.
        {showTip && (
          <div className="mt-2 small">
            They initially studied high-achieving women, but now we know it affects people of all genders and backgrounds.
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'what' ? 'active' : ''}`}
            onClick={() => setActiveTab('what')}
          >
            ❓ What Is It
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'check' ? 'active' : ''}`}
            onClick={() => setActiveTab('check')}
          >
            ✅ Self-Check
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveTab('tips')}
          >
            💪 How to Overcome
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'affirm' ? 'active' : ''}`}
            onClick={() => setActiveTab('affirm')}
          >
            💭 Daily Affirmations
          </button>
        </li>
      </ul>

      {/* WHAT IS IT TAB */}
      {activeTab === 'what' && (
        <>
          {/* Simple Explanation */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="text-primary mb-3">❓ What is Imposter Syndrome?</h3>
              <p className="fs-5">
                Imposter syndrome is when you doubt your skills and feel like a fraud, 
                even when you're actually successful. You think your achievements are due to luck, 
                not your own ability.
              </p>
              <div className="bg-light p-3 rounded-3 mt-3">
                <p className="mb-0 fst-italic">
                  "I feel like I fooled everyone into thinking I'm smart, and soon they'll discover the truth."
                </p>
              </div>
            </div>
          </div>

          {/* Common Signs */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="text-primary mb-4">🚩 Common Signs</h3>
              <div className="row">
                {symptoms.map(symptom => (
                  <div className="col-md-6 mb-3" key={symptom.id}>
                    <div 
                      className={`p-3 border rounded-3 ${selectedSymptom === symptom.id ? 'bg-primary bg-opacity-10 border-primary' : ''}`}
                      onClick={() => setSelectedSymptom(selectedSymptom === symptom.id ? null : symptom.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <p className="fw-bold mb-1">{symptom.name}</p>
                      <p className="small text-secondary mb-0">{symptom.desc}</p>
                      {selectedSymptom === symptom.id && (
                        <div className="mt-2 small text-primary">
                          ✓ This is very common. You're not alone in feeling this way.
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Who Gets It */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm text-center p-3">
                <span className="display-4">🎓</span>
                <h6>Students</h6>
                <p className="small text-secondary">82% of students feel like frauds</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm text-center p-3">
                <span className="display-4">💼</span>
                <h6>New Employees</h6>
                <p className="small text-secondary">First 6 months are toughest</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm text-center p-3">
                <span className="display-4">🏆</span>
                <h6>High Achievers</h6>
                <p className="small text-secondary">Perfectionists feel it most</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* SELF-CHECK TAB */}
      {activeTab === 'check' && (
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h3 className="text-primary mb-4">✅ Quick Self-Assessment</h3>
            <p className="mb-4">Answer these 5 questions honestly:</p>

            <div className="mb-4">
              <p className="fw-bold">1. When you succeed, do you think it was just luck?</p>
              <div className="d-flex gap-3">
                <button 
                  className={`btn ${quizAnswers.q1 === 'yes' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q1', 'yes')}
                >Yes</button>
                <button 
                  className={`btn ${quizAnswers.q1 === 'no' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q1', 'no')}
                >No</button>
              </div>
            </div>

            <div className="mb-4">
              <p className="fw-bold">2. Are you afraid people will find out you're not as smart as they think?</p>
              <div className="d-flex gap-3">
                <button 
                  className={`btn ${quizAnswers.q2 === 'yes' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q2', 'yes')}
                >Yes</button>
                <button 
                  className={`btn ${quizAnswers.q2 === 'no' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q2', 'no')}
                >No</button>
              </div>
            </div>

            <div className="mb-4">
              <p className="fw-bold">3. Do you downplay your achievements when people compliment you?</p>
              <div className="d-flex gap-3">
                <button 
                  className={`btn ${quizAnswers.q3 === 'yes' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q3', 'yes')}
                >Yes</button>
                <button 
                  className={`btn ${quizAnswers.q3 === 'no' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q3', 'no')}
                >No</button>
              </div>
            </div>

            <div className="mb-4">
              <p className="fw-bold">4. Do you work much harder than others just to feel adequate?</p>
              <div className="d-flex gap-3">
                <button 
                  className={`btn ${quizAnswers.q4 === 'yes' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q4', 'yes')}
                >Yes</button>
                <button 
                  className={`btn ${quizAnswers.q4 === 'no' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q4', 'no')}
                >No</button>
              </div>
            </div>

            <div className="mb-4">
              <p className="fw-bold">5. Do you compare yourself to others and feel you don't measure up?</p>
              <div className="d-flex gap-3">
                <button 
                  className={`btn ${quizAnswers.q5 === 'yes' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q5', 'yes')}
                >Yes</button>
                <button 
                  className={`btn ${quizAnswers.q5 === 'no' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleQuizAnswer('q5', 'no')}
                >No</button>
              </div>
            </div>

            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary" onClick={calculateQuizResult}>
                See Results
              </button>
              <button className="btn btn-outline-secondary" onClick={resetQuiz}>
                Reset
              </button>
            </div>

            {quizResult && (
              <div className="mt-4 p-4 bg-light rounded-3">
                <h5 className="mb-3">📋 Your Result:</h5>
                <p><strong>{quizResult.result}</strong></p>
                <p>{quizResult.advice}</p>
                <p className="small text-secondary mt-2">
                  You answered "Yes" to {quizResult.yesCount} out of 5 questions.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* HOW TO OVERCOME TAB */}
      {activeTab === 'tips' && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="text-primary mb-4">💪 5 Ways to Overcome Imposter Syndrome</h3>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <span className="badge bg-primary rounded-circle me-3" style={{ width: '30px', height: '30px', lineHeight: '30px' }}>1</span>
                  <div>
                    <h6>Name It</h6>
                    <p className="text-secondary">Simply recognizing "this is imposter syndrome talking" takes away its power.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <span className="badge bg-primary rounded-circle me-3" style={{ width: '30px', height: '30px', lineHeight: '30px' }}>2</span>
                  <div>
                    <h6>Track Your Wins</h6>
                    <p className="text-secondary">Keep a "brag file" of compliments, achievements, and positive feedback.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <span className="badge bg-primary rounded-circle me-3" style={{ width: '30px', height: '30px', lineHeight: '30px' }}>3</span>
                  <div>
                    <h6>Talk About It</h6>
                    <p className="text-secondary">Share with friends or mentors. You'll likely hear "me too!"</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <span className="badge bg-primary rounded-circle me-3" style={{ width: '30px', height: '30px', lineHeight: '30px' }}>4</span>
                  <div>
                    <h6>Stop Comparing</h6>
                    <p className="text-secondary">Compare yourself to who you were yesterday, not to others today.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <span className="badge bg-primary rounded-circle me-3" style={{ width: '30px', height: '30px', lineHeight: '30px' }}>5</span>
                  <div>
                    <h6>Embrace "Good Enough"</h6>
                    <p className="text-secondary">Perfection is impossible. Done is better than perfect.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="text-primary mb-3">🚫 What NOT to Do</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">✗ Don't compare your beginning to someone else's middle</li>
                    <li className="mb-2">✗ Don't dismiss compliments - just say "thank you"</li>
                    <li className="mb-2">✗ Don't work twice as hard to prove yourself</li>
                    <li className="mb-2">✗ Don't keep these feelings to yourself</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card shadow-sm h-100" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-4">
                  <h5 className="text-primary mb-3">✅ What TO Do</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Keep a success journal</li>
                    <li className="mb-2">✓ Ask for feedback (it's usually better than you think)</li>
                    <li className="mb-2">✓ Remember: you were chosen/selected/admitted for a reason</li>
                    <li className="mb-2">✓ Help others - it proves your knowledge</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* AFFIRMATIONS TAB */}
      {activeTab === 'affirm' && (
        <div className="card shadow-sm mb-4">
          <div className="card-body p-5 text-center">
            <h3 className="text-primary mb-4">💭 Daily Affirmations</h3>
            
            <div className="p-5 bg-light rounded-4 mb-4">
              <p className="fs-3 fst-italic mb-0">"{currentAffirmation}"</p>
            </div>
            
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-primary" onClick={() => {
                const random = Math.floor(Math.random() * affirmations.length);
                setCurrentAffirmation(affirmations[random]);
              }}>
                New Affirmation
              </button>
              
              <button className="btn btn-outline-secondary" onClick={() => {
                alert("Repeat this to yourself: I am worthy. I belong here. My feelings are valid but they aren't facts.");
              }}>
                Save for Later
              </button>
            </div>

            <div className="mt-4">
              <p className="small text-secondary">
                Say this to yourself every morning. It helps rewire your brain over time.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Resources Section - Shows on all tabs */}
      <div className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">📚 Helpful Resources</h3>
          
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-start p-3 border-bottom">
                <span className="fs-4 me-3">📄</span>
                <div>
                  <h6 className="mb-1">The Secret Thoughts of Successful Women</h6>
                  <p className="small text-secondary mb-1">by Dr. Valerie Young</p>
                </div>
              </div>
              <div className="d-flex align-items-start p-3 border-bottom">
                <span className="fs-4 me-3">📄</span>
                <div>
                  <h6 className="mb-1">Feel like a fraud? You're not alone</h6>
                  <p className="small text-secondary mb-1">TED Talk • 15 min</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-start p-3 border-bottom">
                <span className="fs-4 me-3">📄</span>
                <div>
                  <h6 className="mb-1">Overcoming Imposter Syndrome at University</h6>
                  <p className="small text-secondary mb-1">Student Guide • 5 min read</p>
                </div>
              </div>
              <div className="d-flex align-items-start p-3">
                <span className="fs-4 me-3">📄</span>
                <div>
                  <h6 className="mb-1">10 Affirmations for Imposter Syndrome</h6>
                  <p className="small text-secondary mb-1">Printable worksheet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <div className="bg-light p-4 rounded-3 text-center mb-5">
        <p className="mb-2">✨ Remember:</p>
        <p className="fw-bold mb-0">You earned your place. You belong here. Your feelings are valid, but they don't define your reality.</p>
      </div>
    </div>
  );
}

export default ImposterSyndrome;
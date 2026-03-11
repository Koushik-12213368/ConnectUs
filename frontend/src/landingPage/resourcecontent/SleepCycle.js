import React, { useState } from "react";
import "./resourcecontent.css";

function SleepCycle() {
  const [sleepTime, setSleepTime] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [sleepPeriod, setSleepPeriod] = useState("PM");
  const [wakePeriod, setWakePeriod] = useState("AM");
  const [sleepResult, setSleepResult] = useState(null);
  const [detoxTasks, setDetoxTasks] = useState([
    { id: 1, text: "No phone 1 hour before bed", completed: false },
    { id: 2, text: "No coffee after 2 PM", completed: false },
    { id: 3, text: "Dim lights 30 mins before sleep", completed: false },
    { id: 4, text: "Read a book (not on screen)", completed: false },
    { id: 5, text: "Meditate for 5 minutes", completed: false },
    { id: 6, text: "Room temperature below 22°C", completed: false },
  ]);

  // Calculate sleep cycles
  const calculateSleep = () => {
    if (!sleepTime || !wakeTime) {
      alert("Please enter both sleep and wake times");
      return;
    }

    // Convert to 24-hour format
    let sleepHour = parseInt(sleepTime.split(":")[0]);
    const sleepMin = parseInt(sleepTime.split(":")[1]);
    
    let wakeHour = parseInt(wakeTime.split(":")[0]);
    const wakeMin = parseInt(wakeTime.split(":")[1]);

    // Adjust for AM/PM
    if (sleepPeriod === "PM" && sleepHour !== 12) sleepHour += 12;
    if (sleepPeriod === "AM" && sleepHour === 12) sleepHour = 0;
    
    if (wakePeriod === "PM" && wakeHour !== 12) wakeHour += 12;
    if (wakePeriod === "AM" && wakeHour === 12) wakeHour = 0;

    const sleepDate = new Date();
    sleepDate.setHours(sleepHour, sleepMin, 0);
    
    const wakeDate = new Date();
    wakeDate.setHours(wakeHour, wakeMin, 0);

    // If wake time is earlier than sleep time, assume next day
    if (wakeDate < sleepDate) {
      wakeDate.setDate(wakeDate.getDate() + 1);
    }

    const diffMs = wakeDate - sleepDate;
    const diffHours = diffMs / (1000 * 60 * 60);
    const cycles = diffHours / 1.5;
    const fullCycles = Math.floor(cycles);

    let quality = "";
    let advice = "";

    if (fullCycles >= 5 && fullCycles <= 6) {
      quality = "Excellent! 😊";
      advice = "You're getting optimal sleep cycles. You'll wake up feeling refreshed!";
    } else if (fullCycles === 4) {
      quality = "Good 👍";
      advice = "Try to get one more cycle (add 1.5 hours) for optimal rest.";
    } else if (fullCycles >= 7) {
      quality = "Too much sleep 😴";
      advice = "You might feel groggy. Try to reduce by one cycle.";
    } else {
      quality = "Not enough 💪";
      advice = "You need at least 4-5 cycles. Try to sleep earlier or wake up later.";
    }

    setSleepResult({
      hours: diffHours.toFixed(1),
      cycles: fullCycles,
      quality: quality,
      advice: advice,
      bedTime: sleepTime + " " + sleepPeriod,
      wakeUpTime: wakeTime + " " + wakePeriod
    });
  };

  // Toggle detox task
  const toggleTask = (id) => {
    setDetoxTasks(detoxTasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Get detox progress
  const detoxProgress = () => {
    const completed = detoxTasks.filter(t => t.completed).length;
    return (completed / detoxTasks.length) * 100;
  };

  // Popular articles data
  const articles = [
    {
      id: 1,
      title: "Why Your Sleep Cycle Matters More Than Hours Slept",
      source: "Sleep Foundation",
      url: "#",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The 90-Minute Rule: How to Wake Up Refreshed Every Time",
      source: "Psychology Today",
      url: "#",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Student Sleep Guide: Balancing Studies and Rest",
      source: "Harvard Health",
      url: "#",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Digital Detox: Reclaiming Your Sleep from Blue Light",
      source: "Healthline",
      url: "#",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">
        <span className="me-2">😴</span> 
        Sleep Cycle Optimizer
      </h1>

      {/* Sleep Calculator */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">🧮</span> Sleep Cycle Calculator
          </h3>
          
          <div className="row g-4">
            <div className="col-md-5">
              <label className="form-label fw-bold">😴 I go to sleep at:</label>
              <div className="d-flex gap-2">
                <input 
                  type="time" 
                  className="form-control"
                  value={sleepTime}
                  onChange={(e) => setSleepTime(e.target.value)}
                />
                <select 
                  className="form-select w-auto"
                  value={sleepPeriod}
                  onChange={(e) => setSleepPeriod(e.target.value)}
                >
                  <option>PM</option>
                  <option>AM</option>
                </select>
              </div>
            </div>
            
            <div className="col-md-5">
              <label className="form-label fw-bold">⏰ I wake up at:</label>
              <div className="d-flex gap-2">
                <input 
                  type="time" 
                  className="form-control"
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                />
                <select 
                  className="form-select w-auto"
                  value={wakePeriod}
                  onChange={(e) => setWakePeriod(e.target.value)}
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
            
            <div className="col-md-2 d-flex align-items-end">
              <button className="btn btn-primary w-100" onClick={calculateSleep}>
                Calculate
              </button>
            </div>
          </div>

          {/* Results */}
          {sleepResult && (
            <div className="mt-4 p-4 bg-light rounded-3">
              <h5 className="mb-3">📊 Your Sleep Analysis</h5>
              <div className="row">
                <div className="col-md-4">
                  <p><strong>Bed time:</strong> {sleepResult.bedTime}</p>
                  <p><strong>Wake time:</strong> {sleepResult.wakeUpTime}</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Total sleep:</strong> {sleepResult.hours} hours</p>
                  <p><strong>Sleep cycles:</strong> {sleepResult.cycles} cycles</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Quality:</strong> <span className="text-primary fw-bold">{sleepResult.quality}</span></p>
                </div>
              </div>
              <div className="alert alert-info mt-2">
                💡 {sleepResult.advice}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Why Sleep Matters */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">❓</span> Why Sleep Cycles Matter
          </h3>
          
          <div className="row">
            <div className="col-md-6">
              <h5>🧠 Brain Function</h5>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Memory:</strong> Sleep cycles consolidate learning</li>
                <li className="mb-2">✓ <strong>Focus:</strong> 7-9 hours improves concentration by 30%</li>
                <li className="mb-2">✓ <strong>Creativity:</strong> REM sleep boosts problem-solving</li>
              </ul>
              
              <h5 className="mt-4">❤️ Physical Health</h5>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Immunity:</strong> Sleep deprivation weakens immune system</li>
                <li className="mb-2">✓ <strong>Heart:</strong> Quality sleep reduces heart disease risk</li>
                <li className="mb-2">✓ <strong>Weight:</strong> Poor sleep increases hunger hormones</li>
              </ul>
            </div>
            
            <div className="col-md-6">
              <h5>📚 Academic Performance</h5>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Grades:</strong> Students with 8+ hours score 20% higher</li>
                <li className="mb-2">✓ <strong>Recall:</strong> Sleep before exam improves memory by 40%</li>
                <li className="mb-2">✓ <strong>Stress:</strong> Good sleep reduces anxiety by 50%</li>
              </ul>
              
              <div className="bg-primary bg-opacity-10 p-3 rounded-3 mt-4">
                <p className="mb-0 fw-bold">🔬 Science Fact:</p>
                <p className="mb-0 small">Each sleep cycle (90 min) has different functions. Waking up mid-cycle causes "sleep inertia" - that groggy feeling that lasts 2-4 hours!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems It Fixes */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">🛠️</span> Problems Fixed by Better Sleep
          </h3>
          
          <div className="row g-3">
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <span className="display-6">😫</span>
                <h6 className="mt-2">Morning Grogginess</h6>
                <p className="small text-secondary">Waking up mid-cycle causes 2-4 hours of brain fog. Proper cycle timing = instant alertness.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <span className="display-6">😰</span>
                <h6 className="mt-2">Anxiety & Stress</h6>
                <p className="small text-secondary">REM sleep processes emotions. Poor REM = higher anxiety, mood swings, irritability.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <span className="display-6">📵</span>
                <h6 className="mt-2">Poor Memory</h6>
                <p className="small text-secondary">Deep sleep consolidates memories. Without it, you forget 40% of what you learned.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <span className="display-6">🍔</span>
                <h6 className="mt-2">Weight Gain</h6>
                <p className="small text-secondary">Sleep deprivation increases ghrelin (hunger hormone) by 30% and decreases leptin.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <span className="display-6">🤒</span>
                <h6 className="mt-2">Weak Immunity</h6>
                <p className="small text-secondary">Less than 7 hours makes you 3x more likely to catch a cold.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <span className="display-6">🎯</span>
                <h6 className="mt-2">Poor Focus</h6>
                <p className="small text-secondary">Attention span drops 50% after poor sleep. Reaction time equals drunk driving.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Things to Avoid */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">🚫</span> Things to Avoid for Better Sleep
          </h3>
          
          <div className="row">
            <div className="col-md-6">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Avoid</th>
                    <th>Why</th>
                    <th>Instead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>☕ Caffeine after 2 PM</td>
                    <td>Stays in system 6+ hours</td>
                    <td>Herbal tea</td>
                  </tr>
                  <tr>
                    <td>📱 Screens before bed</td>
                    <td>Blue light blocks melatonin</td>
                    <td>Read a book</td>
                  </tr>
                  <tr>
                    <td>🍔 Heavy meals late</td>
                    <td>Digestion disrupts sleep</td>
                    <td>Light snack if hungry</td>
                  </tr>
                  <tr>
                    <td>💪 Late exercise</td>
                    <td>Raises body temperature</td>
                    <td>Morning workout</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="col-md-6">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Avoid</th>
                    <th>Why</th>
                    <th>Instead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🌡️ Hot room</td>
                    <td>Body needs cool to sleep</td>
                    <td>18-20°C temperature</td>
                  </tr>
                  <tr>
                    <td>💡 Bright lights</td>
                    <td>Suppresses melatonin</td>
                    <td>Dim lights 1hr before</td>
                  </tr>
                  <tr>
                    <td>😴 Irregular schedule</td>
                    <td>Confuses body clock</td>
                    <td>Same time ±30 min</td>
                  </tr>
                  <tr>
                    <td>💧 Alcohol</td>
                    <td>Disrupts REM sleep</td>
                    <td>Water or herbal tea</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Digital Detox Planner */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">📵</span> 7-Day Digital Detox Challenge
          </h3>
          
          <div className="progress mb-4" style={{ height: '25px' }}>
            <div 
              className="progress-bar bg-success" 
              style={{ width: `${detoxProgress()}%` }}
            >
              {Math.round(detoxProgress())}% Complete
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <h6 className="mb-3">Tonight's Detox Tasks:</h6>
              {detoxTasks.map(task => (
                <div className="form-check mb-2" key={task.id}>
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={`task${task.id}`}
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <label className={`form-check-label ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`} htmlFor={`task${task.id}`}>
                    {task.text}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="col-md-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                <h6 className="mb-2">✨ Challenge Benefits</h6>
                <p className="small mb-2">✓ Melatonin increases 50%</p>
                <p className="small mb-2">✓ Fall asleep 15 min faster</p>
                <p className="small mb-2">✓ Deep sleep increases 20%</p>
                <p className="small mb-0">✓ Wake up more refreshed</p>
              </div>
              
              <button className="btn btn-outline-primary w-100 mt-3" onClick={() => {
                if (detoxProgress() === 100) {
                  alert("🎉 Congratulations! You completed tonight's detox!");
                } else {
                  alert("Complete all tasks to finish tonight's challenge!");
                }
              }}>
                Complete Challenge
              </button>
            </div>
          </div>

          <div className="mt-4 bg-warning bg-opacity-10 p-3 rounded-3">
            <p className="mb-0 small">
              <strong>📅 7-Day Plan:</strong> Day 1: No screens 1hr before • Day 2: Add reading • Day 3: No caffeine after 2pm • 
              Day 4: Cool room • Day 5: Meditation • Day 6: Consistent schedule • Day 7: Full detox
            </p>
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="card shadow mb-4">
        <div className="card-body p-4">
          <h3 className="text-primary mb-4">
            <span className="me-2">📰</span> Popular Articles on Sleep
          </h3>
          
          <div className="row g-3">
            {articles.map(article => (
              <div className="col-md-6" key={article.id}>
                <div className="d-flex align-items-start p-3 border rounded-3">
                  <div className="me-3">
                    <span className="fs-2">📄</span>
                  </div>
                  <div>
                    <h6 className="mb-1">{article.title}</h6>
                    <p className="small text-secondary mb-1">{article.source} • {article.readTime}</p>
                    <a href={article.url} className="small text-primary text-decoration-none">Read Article →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Tips Footer */}
      <div className="bg-light p-4 rounded-3 text-center">
        <h5>✨ Quick Sleep Tips</h5>
        <div className="row mt-3">
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">⏰</span>
            <small>Same time daily</small>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">🌡️</span>
            <small>Cool room (18-20°C)</small>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">📵</span>
            <small>No screens 1hr before</small>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <span className="d-block fs-2">🧘</span>
            <small>5 min meditation</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SleepCycle;
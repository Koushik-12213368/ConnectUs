import React from "react";

function DailyMindfulness() {
  // Podcast data with real links
  const podcasts = [
    {
      id: 1,
      title: "Mindful In Minutes Meditation",
      host: "Kelly Smith",
      description: "Short, weekly guided meditations to help you stress less, sleep better, and live more mindfully. Episodes are 20 minutes or less and cover meditation for anxiety, stress relief, sleep, and morning routines.",
      duration: "5-20 min",
      platform: "Apple Podcasts",
      url: "https://podcasts.apple.com/us/podcast/mindful-in-minutes-meditation/id1295718287"
    },
    {
      id: 2,
      title: "Use This Meditation Before Your Exam",
      host: "FairyFrens",
      description: "Specifically designed for students – this guided meditation helps you stay calm, focused, and confident during tests and study sessions. Quiet racing thoughts and release anxiety.",
      duration: "10 min",
      platform: "podm8",
      url: "https://podm8.com/episodes/fairyfrens-guided-sleep-meditations/use-this-meditation-before-your-exam-it-works-uLV9DJgy1"
    },
    {
      id: 3,
      title: "The Music & Meditation Podcast",
      host: "Izzy Judd (BBC Radio 3)",
      description: "Features music and meditation designed to combat daily challenges. Episodes cover work/life balance, managing fears, and exam season stress with 10-minute guided meditations.",
      duration: "10 min",
      platform: "BBC",
      url: "https://www.bbc.co.uk/programmes/p0kwv0zb"
    },
    {
      id: 4,
      title: "Spoken Wordplay Podcast",
      host: "Tonya Michelle Wilkerson",
      description: "Daily 'I Am' affirmations with relaxing meditation music. Designed for students to take a 15-minute break, practice deep breathing, and improve self-esteem and focus.",
      duration: "15 min",
      platform: "Apple Podcasts",
      url: "https://podcasts.apple.com/us/podcast/spoken-wordplay-podcast-daily-i-am-affirmations-with/id1592624392"
    },
    {
      id: 5,
      title: "Tara Brach Podcast",
      host: "Tara Brach",
      description: "Weekly talks and guided meditations on mindfulness, compassion, and radical acceptance. Perfect for students seeking emotional balance and stress reduction.",
      duration: "Varies",
      platform: "Multiple Platforms",
      url: "https://www.tarabrach.com/podcast/"
    },
    {
      id: 6,
      title: "SAT YOGA: Breathing Techniques for Test Stress",
      host: "#PREPPED Podcast",
      description: "Learn breathing and relaxation techniques to ease test stress. Includes two quick guided practices you can do before testing.",
      duration: "30 min",
      platform: "radio.net",
      url: "https://au.radio.net/podcast/prepped-the-test-prep-podcast"
    },
    {
      id: 7,
      title: "Awareness Explorers",
      host: "Jonathan Robinson & Brian Tom O'Connor",
      description: "Explores ways to quiet the mind and tap into stillness. Each episode includes a guided meditation.",
      duration: "45-60 min",
      platform: "Google Podcasts",
      url: "https://podcasts.google.com/feed/aHR0cDovL2F3YXJlbmVzc2V4cGxvcmVycy5saWJzeW4uY29tL3Jzcw=="
    },
    {
      id: 8,
      title: "Jon Kabat-Zinn Talks",
      host: "Jon Kabat-Zinn",
      description: "Mindfulness-based stress reduction (MBSR) pioneer. His talks at Google and Dartmouth introduce mindfulness in a scientific, evidence-based way.",
      duration: "60-120 min",
      platform: "YouTube",
      url: "https://www.youtube.com/results?search_query=jon+kabat+zinn+mindfulness"
    }
  ];

  // Function to open podcast link
  const listenToPodcast = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      {/* Simple Header */}
      <div className="mb-4">
        <h1 className="mb-2">🧘 Daily Mindfulness Guide</h1>
        <p className="text-secondary">
          5-minute mindfulness exercises for busy students.
        </p>
        <hr />
      </div>

      {/* What is Mindfulness */}
      <div className="mb-4">
        <h5>🌿 What is Mindfulness?</h5>
        <p className="text-secondary">
          Paying attention to the present moment, without judgment. Just noticing what's happening right now.
        </p>
      </div>

      {/* Why Practice */}
      <div className="mb-4">
        <h5>🎓 Why Practice?</h5>
        <ul className="text-secondary">
          <li>Less stress and anxiety</li>
          <li>Better focus while studying</li>
          <li>Sleep better at night</li>
          <li>Feel calmer during exams</li>
        </ul>
      </div>

      {/* 5-Minute Morning Exercise */}
      <div className="mb-4">
        <h5>🌅 5-Minute Morning Exercise</h5>
        <p className="fw-semibold mb-2">Before you check your phone:</p>
        <ol className="text-secondary">
          <li>Sit comfortably and close your eyes</li>
          <li>Take 3 deep breaths – in through nose, out through mouth</li>
          <li>Notice how your body feels right now</li>
          <li>Set an intention for the day (eg: "I will stay calm")</li>
          <li>Open your eyes slowly</li>
        </ol>
      </div>

      {/* 5-Minute Study Break Exercise */}
      <div className="mb-4">
        <h5>📚 5-Minute Study Break</h5>
        <p className="fw-semibold mb-2">Between study sessions:</p>
        <ol className="text-secondary">
          <li>Step away from your desk</li>
          <li>Stand and stretch your arms overhead</li>
          <li>Roll your shoulders back 5 times</li>
          <li>Look out the window – focus on something far away</li>
          <li>Drink a glass of water slowly</li>
        </ol>
      </div>

      {/* 5-Minute Before Bed Exercise */}
      <div className="mb-4">
        <h5>🌙 5-Minute Bedtime Exercise</h5>
        <p className="fw-semibold mb-2">To help you fall asleep:</p>
        <ol className="text-secondary">
          <li>Lie on your back, arms by your side</li>
          <li>Close your eyes and take 3 deep breaths</li>
          <li>Notice your feet – relax them completely</li>
          <li>Move attention up – legs, stomach, chest, hands, face</li>
          <li>Relax each part as you go</li>
        </ol>
      </div>

      {/* 5-4-3-2-1 Grounding Exercise */}
      <div className="mb-4">
        <h5>🔍 When You Feel Anxious (5-4-3-2-1)</h5>
        <p className="fw-semibold mb-2">Use this anytime, anywhere:</p>
        <ul className="text-secondary">
          <li><strong>5</strong> things you can see</li>
          <li><strong>4</strong> things you can touch</li>
          <li><strong>3</strong> things you can hear</li>
          <li><strong>2</strong> things you can smell</li>
          <li><strong>1</strong> thing you can taste</li>
        </ul>
      </div>

      {/* Simple Breathing Exercise */}
      <div className="mb-4">
        <h5>🌬️ 1-Minute Breathing</h5>
        <p className="fw-semibold mb-2">Too busy for 5 minutes? Try this:</p>
        <p className="text-secondary">
          Inhale for 4 seconds → Hold for 4 seconds → Exhale for 6 seconds.
          Repeat 3 times.
        </p>
      </div>

      {/* Daily Reminder */}
      <div className="mb-4">
        <h5>📅 Make It a Habit</h5>
        <p className="text-secondary">
          Pick one time each day – morning, study break, or bedtime – and do just 5 minutes.
          Consistency matters more than length.
        </p>
      </div>

      {/* Podcasts Section */}
      <div className="mb-5 mt-5">
        <h3 className="mb-4">🎧 Mindfulness Podcasts for Students</h3>
        <p className="text-secondary mb-4">
          Listen to these podcasts during breaks, while commuting, or before sleep.
        </p>
        
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="card mb-3 border-0 bg-light">
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1">
                  <h6 className="mb-1">{podcast.title}</h6>
                  <p className="small text-secondary mb-1">{podcast.description}</p>
                  <div className="d-flex gap-3 flex-wrap">
                    <span className="small text-secondary">🎤 {podcast.host}</span>
                    <span className="small text-secondary">⏱️ {podcast.duration}</span>
                    <span className="small text-secondary">📱 {podcast.platform}</span>
                  </div>
                </div>
                <div>
                  <span 
                    className="badge bg-primary" 
                    style={{ cursor: "pointer", padding: "8px 12px" }}
                    onClick={() => listenToPodcast(podcast.url)}
                  >
                    Listen
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Podcast Tips */}
      <div className="mb-4">
        <div className="bg-info bg-opacity-10 p-3 rounded">
          <p className="mb-0 text-secondary small">
            <span className="fw-semibold">💡 Tip:</span> Try listening to one podcast episode this week. Pick a time when you usually feel stressed – before studying, during a break, or before sleep.
          </p>
        </div>
      </div>

      {/* Simple Footer */}
      <hr />
      <p className="text-center text-secondary small py-3">
        One breath at a time. You're doing great.
      </p>
    </div>
  );
}

export default DailyMindfulness;
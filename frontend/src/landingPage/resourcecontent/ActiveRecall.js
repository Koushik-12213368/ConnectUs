import React from "react";

function ActiveRecallTechniques() {
  // Sample video data with real YouTube links
  const videos = [
    {
      id: 1,
      title: "How to study for exams - Evidence-based revision tips",
      duration: "15:00",
      description: "Learn why active recall beats passive studying and how to apply it today.",
      channel: "Ali Abdaal",
      url: "https://youtu.be/ukLnPbIffxE"
    },
    {
      id: 2,
      title: "How to do ACTIVE RECALL Effectively? (4 Techniques worked for me)",
      duration: "12:00",
      description: "Practical demonstration of blurting method and question techniques.",
      channel: "Med School Insider",
      url: "https://www.voicetube.com/videos/178558"
    },
    {
      id: 3,
      title: "Active Recall: The Secret to Learning 3X Faster",
      duration: "6:00",
      description: "Neuroscience behind why testing yourself works better.",
      channel: "Brain Boost",
      url: "https://music.youtube.com/watch?v=4ae8i9WMSgY"
    },
    {
      id: 4,
      title: "Learn Faster with These 3 Proven Techniques",
      duration: "60:00",
      description: "How to use digital flashcards with active recall for maximum retention.",
      channel: "Learning Skills",
      url: "https://music.youtube.com/watch?v=4ae8i9WMSgY"
    },
    {
      id: 5,
      title: "How To Remember EVERYTHING Like The Japanese Students",
      duration: "7:00",
      description: "Techniques used by top students to memorize large amounts of information.",
      channel: "easyway, actually",
      url: "#" // Placeholder – search on YouTube
    },
    {
      id: 6,
      title: "Dr. Cal Newport & Dr. Andrew Huberman on Active Recall",
      duration: "15:00",
      description: "Common errors students make when trying active recall.",
      channel: "Huberman Lab Clips",
      url: "#" // Placeholder – search on YouTube
    }
  ];

  // Function to open video link
  const watchVideo = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    } else {
      alert("Please search for this video on YouTube");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      {/* Simple Header */}
      <div className="mb-4">
        <h1 className="mb-2">📝 Active Recall Techniques</h1>
        <p className="text-secondary">
          How to use active recall to memorize faster and retain longer.
        </p>
        <hr />
      </div>

      {/* Introduction */}
      <div className="mb-4">
        <p className="text-secondary">
          Active recall is one of the most powerful study techniques. These videos will show you exactly how to use it.
        </p>
      </div>

      {/* Videos List */}
      <div className="mb-5">
        <h5 className="mb-3">🎥 Recommended Videos</h5>
        
        {videos.map((video) => (
          <div key={video.id} className="card mb-3 border-0 bg-light">
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1">
                  <h6 className="mb-1">{video.title}</h6>
                  <p className="small text-secondary mb-1">{video.description}</p>
                  <div className="d-flex gap-3">
                    <span className="small text-secondary">{video.channel}</span>
                    <span className="small text-secondary">{video.duration}</span>
                  </div>
                </div>
                <div>
                  <span 
                    className="badge bg-primary" 
                    style={{ cursor: "pointer" }}
                    onClick={() => watchVideo(video.url)}
                  >
                    Watch
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Watch Tips */}
      <div className="mb-4">
        <div className="bg-info bg-opacity-10 p-3 rounded">
          <p className="mb-0 text-secondary small">
            <span className="fw-semibold">💡 Tip:</span> Click "Watch" to open any video in a new tab. Take notes while watching!
          </p>
        </div>
      </div>

      {/* Key Takeaways Section */}
      <div className="mb-4">
        <h5 className="mb-3">📌 Key Takeaways from These Videos</h5>
        <ul className="text-secondary">
          <li className="mb-2">Active recall means testing yourself, not just re-reading</li>
          <li className="mb-2">The "blurting method" – write everything you remember, then check</li>
          <li className="mb-2">Flashcards work best when you actively try to answer before flipping</li>
          <li className="mb-2">Combine active recall with spaced repetition for best results</li>
          <li className="mb-2">Teaching someone else forces active recall</li>
          <li className="mb-2">Practice problems are active recall for math and science</li>
        </ul>
      </div>

      {/* Quick Techniques Summary */}
      <div className="mb-4">
        <h5 className="mb-3">⚡ Quick Techniques to Try</h5>
        <div className="row g-2">
          <div className="col-md-4">
            <div className="bg-light p-2 rounded text-center">
              <span className="fw-semibold">Blurting</span>
              <p className="small text-secondary mb-0">Close book, write all you remember</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-2 rounded text-center">
              <span className="fw-semibold">Flashcards</span>
              <p className="small text-secondary mb-0">Question on front, answer on back</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-2 rounded text-center">
              <span className="fw-semibold">Teach it</span>
              <p className="small text-secondary mb-0">Explain to someone (or yourself)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Tools */}
      <div className="mb-4">
        <h5 className="mb-3">🛠️ Tools Mentioned in Videos</h5>
        <div className="row g-2">
          <div className="col-md-4">
            <div className="bg-light p-2 rounded">
              <span className="fw-semibold">Anki</span>
              <p className="small text-secondary mb-0">Free flashcard app</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-2 rounded">
              <span className="fw-semibold">Quizlet</span>
              <p className="small text-secondary mb-0">Digital flashcards</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-2 rounded">
              <span className="fw-semibold">Blackblue.xyz</span>
              <p className="small text-secondary mb-0">AI for flashcards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Videos Note */}
      <div className="mb-4">
        <div className="bg-light p-3 rounded">
          <p className="mb-0 text-secondary">
            <span className="fw-semibold">🔗 More videos like this:</span> Check our Study Skills playlist for more techniques like spaced repetition, Pomodoro, and Feynman technique.
          </p>
        </div>
      </div>

      {/* Simple Footer */}
      <hr />
      <div className="text-center py-3">
        <p className="text-secondary small">
          Watch one video today. Try one technique tomorrow. You'll remember more.
        </p>
      </div>
    </div>
  );
}

export default ActiveRecallTechniques;
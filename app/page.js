'use client';

import { useMemo, useState } from 'react';

const starterMessages = [
  {
    role: 'assistant',
    content:
      'Welcome back, student! I can break down difficult concepts, create study plans, and walk you through exam-style problems step by step.',
  },
];

const dashboardStats = [
  { label: 'Active streak', value: '18 days' },
  { label: 'Practice score', value: '94%' },
  { label: 'Topics covered', value: '24' },
  { label: 'Saved notes', value: '12' },
];

const subjectCards = [
  { title: 'Mathematics', tag: 'Algebra & Geometry', progress: '78%' },
  { title: 'Physics', tag: 'Mechanics', progress: '65%' },
  { title: 'Economics', tag: 'Microeconomics', progress: '88%' },
  { title: 'Biology', tag: 'Genetics', progress: '72%' },
];

const quickQuestions = [
  'Explain the quadratic formula with an example.',
  'How do I solve rate of change in physics?',
  'Break down the concept of photosynthesis.',
  'Teach me a quick trick for probability questions.',
];

export default function HomePage() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState(starterMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const completionMessage = useMemo(() => {
    return messages.length > 1 ? messages[messages.length - 1].content : null;
  }, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) {
      setError('Please enter a question before asking Nexa AI.');
      return;
    }

    setError('');
    setIsLoading(true);

    const currentMessages = [
      ...messages,
      { role: 'user', content: trimmedQuestion },
    ];

    setMessages(currentMessages);
    setQuestion('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmedQuestion }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong while generating a response.');
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: result.text,
        },
      ]);
    } catch (requestError) {
      setError(requestError.message || 'There was a problem getting your answer.');
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I could not answer that question right now. Please check your API key and try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <div className="background-glow glow-left" />
      <div className="background-glow glow-right" />

      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">N</div>
          <div>
            <p className="brand-name">Nexa AI</p>
            <span className="brand-tag">Student companion</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#dashboard">Dashboard</a>
          <a href="#subjects">Subjects</a>
          <a href="#tutor">Tutor</a>
        </nav>

        <button className="primary-btn small-btn" type="button">
          Upgrade plan
        </button>
      </header>

      <section className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Study smarter</span>
          <h1>Turn every question into a clear next step.</h1>
          <p>
            Nexa AI helps students understand concepts faster with guided explanations,
            practice support, and personalized revision routines.
          </p>

          <div className="cta-row">
            <button className="primary-btn" type="button">
              Start learning
            </button>
            <button className="secondary-btn" type="button">
              View progress
            </button>
          </div>

          <div className="mini-metrics">
            <div>
              <strong>12k+</strong>
              <span>Problems solved</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Student rating</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-header">
            <span>Today&apos;s focus</span>
            <span className="status-pill">On track</span>
          </div>

          <h3>Mock exam sprint</h3>
          <ul className="focus-list">
            <li>Algebra mastery drill</li>
            <li>Essay planning review</li>
            <li>Physics formulas recap</li>
          </ul>

          <div className="progress-block">
            <div className="row-between">
              <span>Progress</span>
              <strong>68%</strong>
            </div>
            <div className="progress-rail">
              <span className="progress-bar" />
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-panel" id="dashboard">
        <div className="panel-heading">
          <div>
            <p className="muted-label">Dashboard</p>
            <h2>Academic overview</h2>
          </div>
          <span className="badge">Updated today</span>
        </div>

        <div className="stats-grid">
          {dashboardStats.map((item) => (
            <div key={item.label} className="stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="subjects-panel" id="subjects">
        <div className="panel-heading">
          <div>
            <p className="muted-label">Subjects</p>
            <h2>Ongoing learning</h2>
          </div>
          <a href="#tutor">Open tutor</a>
        </div>

        <div className="subjects-grid">
          {subjectCards.map((subject) => (
            <article key={subject.title} className="subject-card">
              <div className="subject-topline">
                <h3>{subject.title}</h3>
                <span>{subject.tag}</span>
              </div>

              <div className="progress-meta">
                <span>Mastery</span>
                <strong>{subject.progress}</strong>
              </div>

              <div className="progress-rail small">
                <span className="progress-bar" style={{ width: subject.progress }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tutor-panel" id="tutor">
        <div className="panel-heading">
          <div>
            <p className="muted-label">AI Tutor</p>
            <h2>Ask Nexa</h2>
          </div>
        </div>

        <div className="tutor-layout">
          <div className="question-rail">
            <p className="rail-label">Popular prompts</p>
            <div className="quick-list">
              {quickQuestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="quick-question"
                  onClick={() => setQuestion(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-card">
            <div className="chat-header">
              <div className="online-dot" />
              <span>Nexa AI Tutor</span>
            </div>

            <div className="chat-window">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`message-row ${message.role === 'user' ? 'user' : 'assistant'}`}
                >
                  <div className="bubble">
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="message-row assistant">
                  <div className="bubble typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="chat-form">
              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask about any topic, concept, or exam question..."
                rows={4}
              />

              <div className="form-actions">
                <span className="hint">Step-by-step explanations • concise • exam-ready</span>
                <button type="submit" className="primary-btn" disabled={isLoading}>
                  {isLoading ? 'Thinking...' : 'Ask Nexa'}
                </button>
              </div>
            </form>

            {error && <p className="error-message">{error}</p>}
            {completionMessage && !error && !isLoading && (
              <p className="success-message">Latest answer ready.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

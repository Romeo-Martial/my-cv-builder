import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="container">
          <div className="landing-hero-content">
            <div className="landing-hero-text">
              <h1 className="it-page-title role-orientation">
                Create Your Professional CV in Minutes
              </h1>
              <p className="landing-hero-subtitle role-instruction">
                Step-by-step wizard guides you through building a stunning,
                professional resume that stands out to employers.
              </p>
              <Link to="/app/dataCollection/header">
                <button className="btn btn--primary role-action">
                  Start Building My CV
                </button>
              </Link>
            </div>
            <div className="landing-hero-visual">
              <div className="cv-preview-mockup">
                <div className="cv-mockup-header">
                  <div className="cv-mockup-avatar"></div>
                  <div className="cv-mockup-info">
                    <div className="cv-mockup-name"></div>
                    <div className="cv-mockup-title"></div>
                    <div className="cv-mockup-contact"></div>
                  </div>
                </div>
                <div className="cv-mockup-section">
                  <div className="cv-mockup-section-title"></div>
                  <div className="cv-mockup-content"></div>
                  <div className="cv-mockup-content"></div>
                </div>
                <div className="cv-mockup-section">
                  <div className="cv-mockup-section-title"></div>
                  <div className="cv-mockup-content cv-mockup-content--wide"></div>
                  <div className="cv-mockup-content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features">
        <div className="container">
          <h2 className="it-section-title role-orientation">
            Why Choose Our CV Builder?
          </h2>
          <div className="landing-features-grid">
            <div className="landing-feature-card">
              <div className="landing-feature-icon">✨</div>
              <h3 className="it-section-subtitle role-orientation">
                Easy Step-by-Step Process
              </h3>
              <p className="role-instruction">
                Guided wizard breaks down CV creation into simple, manageable
                steps.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">📱</div>
              <h3 className="it-section-subtitle role-orientation">
                Mobile-Friendly Design
              </h3>
              <p className="role-instruction">
                Create your CV on any device with our responsive, mobile-first
                design.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">📄</div>
              <h3 className="it-section-subtitle role-orientation">
                Professional PDF Output
              </h3>
              <p className="role-instruction">
                Generate clean, ATS-friendly PDF resumes ready for job
                applications.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">🎯</div>
              <h3 className="it-section-subtitle role-orientation">
                Smart Validation
              </h3>
              <p className="role-instruction">
                Built-in validation ensures your CV is complete and error-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="landing-steps">
        <div className="container">
          <h2 className="it-section-title role-orientation">How It Works</h2>
          <div className="landing-steps-grid">
            <div className="landing-step-card">
              <div className="landing-step-number">1</div>
              <h3 className="it-section-subtitle role-orientation">
                Fill Your Information
              </h3>
              <p className="role-instruction">
                Enter your personal details, work experience, education, and
                skills through our intuitive forms.
              </p>
            </div>

            <div className="landing-step-connector"></div>

            <div className="landing-step-card">
              <div className="landing-step-number">2</div>
              <h3 className="it-section-subtitle role-orientation">
                Review & Preview
              </h3>
              <p className="role-instruction">
                Preview your CV to ensure everything looks perfect before
                generating the final document.
              </p>
            </div>

            <div className="landing-step-connector"></div>

            <div className="landing-step-card">
              <div className="landing-step-number">3</div>
              <h3 className="it-section-subtitle role-orientation">
                Generate PDF
              </h3>
              <p className="role-instruction">
                Download your professional CV as a PDF, ready to send to
                employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="landing-cta">
        <div className="container">
          <div className="landing-cta-content">
            <h2 className="it-section-title role-orientation">
              Ready to Build Your Perfect CV?
            </h2>
            <p className="landing-cta-subtitle role-instruction">
              Join thousands of job seekers who've created winning resumes with
              our builder.
            </p>
            <Link to="/app/dataCollection/header">
              <button className="btn btn--primary role-action">
                Get Started Now - It's Free!
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

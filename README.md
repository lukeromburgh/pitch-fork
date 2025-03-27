# Pitchfork: A Crowdsourced Validation Platform for Startup Founders and Developers

## Table of Contents

<ul>
  <li><a href="#target-audience">Target Audience</a>
    <ul>
      <li><a href="#1-startup-founders">1. Startup Founders</a></li>
      <li><a href="#2-developers-and-innovators">2. Developers and Innovators</a></li>
    </ul>
  </li>
  <li><a href="#challenges-solved-by-pitchfork">Challenges Solved by Pitchfork</a>
    <ul>
      <li><a href="#for-startup-founders">For Startup Founders</a></li>
      <li><a href="#for-developers-and-innovators">For Developers and Innovators</a></li>
      <li><a href="#how-pitchfork-addresses-these-challenges">How Pitchfork Addresses These Challenges</a></li>
    </ul>
  </li>
  <li><a href="#goals-and-features">Goals and Features</a>
    <ul>
      <li><a href="#1-idea-posting-and-validation">1. Idea Posting and Validation</a></li>
      <li><a href="#2-discussion-and-commenting">2. Discussion and Commenting</a></li>
      <li><a href="#3-user-profiles">3. User Profiles</a></li>
      <li><a href="#4-future-goals-voting-system--analytics">4. Future Goals: Voting System & Analytics</a></li>
    </ul>
  </li>
  <li><a href="#technology-stack">Technology Stack</a>
    <ul>
      <li><a href="#1-frontend-technologies">1. Frontend Technologies</a></li>
      <li><a href="#2-backend-technologies">2. Backend Technologies</a></li>
      <li><a href="#3-database">3. Database</a></li>
      <li><a href="#4-deployment">4. Deployment</a></li>
    </ul>
  </li>
  <li><a href="#api-usage">API Usage</a>
    <ul>
      <li><a href="#1-current-external-apis">1. Current External APIs</a></li>
      <li><a href="#2-future-api-integration">2. Future API Integration</a></li>
    </ul>
  </li>
  <li><a href="#challenges-and-solutions">Challenges and Solutions</a>
    <ul>
      <li><a href="#1-development-challenges">1. Development Challenges</a></li>
      <li><a href="#2-database-design">2. Database Design</a></li>
      <li><a href="#3-user-experience">3. User Experience</a></li>
      <li><a href="#4-future-improvements">4. Future Improvements</a></li>
    </ul>
  </li>
  <li><a href="#design-decisions">Design Decisions</a>
    <ul>
      <li><a href="#sitemap-and-wireframes">Sitemap and Wireframes</a></li>
      <li><a href="#color-scheme">Color Scheme</a></li>
      <li><a href="#typography">Typography</a></li>
      <li><a href="#favicon">Favicon</a></li>
      <li><a href="#accessibility-features">Accessibility Features</a></li>
    </ul>
  </li>
  <li><a href="#goals-in-development">Goals in Development</a>
    <ul>
      <li><a href="#project-goals">Project Goals</a></li>
      <li><a href="#user-goals">User Goals</a></li>
      <li><a href="#site-owner-goals">Site Owner Goals</a></li>
      <li><a href="#developer-goals">Developer Goals</a></li>
    </ul>
  </li>
  <li><a href="#user-stories">User Stories</a>
    <ul>
      <li><a href="#first-time-visitor-goals">First-Time Visitor Goals</a></li>
      <li><a href="#returning-visitor-goals">Returning Visitor Goals</a></li>
      <li><a href="#frequent-visitor-goals">Frequent Visitor Goals</a></li>
    </ul>
  </li>
  <li><a href="#five-planes-of-ux">Five Planes of UX</a>
    <ul>
      <li><a href="#strategy">Strategy</a></li>
      <li><a href="#scope">Scope</a></li>
      <li><a href="#structure">Structure</a></li>
      <li><a href="#skeleton">Skeleton</a></li>
      <li><a href="#surface">Surface</a></li>
    </ul>
  </li>
  <li><a href="#viability-and-feasibility">Viability and Feasibility</a>
    <ul>
      <li><a href="#technical-feasibility">Technical Feasibility</a></li>
      <li><a href="#business-feasibility">Business Feasibility</a></li>
    </ul>
  </li>
  <li><a href="#content-requirements">Content Requirements</a>
    <ul>
      <li><a href="#navigation-bar">Navigation Bar</a></li>
      <li><a href="#footer">Footer</a></li>
      <li><a href="#homepage">Homepage</a></li>
    </ul>
  </li>
  <li><a href="#structure">Structure</a>
    <ul>
      <li><a href="#overall-structure">Overall Structure</a></li>
      <li><a href="#information-architecture">Information Architecture</a></li>
      <li><a href="#interactive-experience">Interactive Experience</a></li>
    </ul>
  </li>
  <li><a href="#changes-during-development">Changes During Development</a></li>
  <li><a href="#testing">Testing</a>
    <ul>
      <li><a href="#responsiveness">Responsiveness</a></li>
      <li><a href="#lighthouse-testing">Lighthouse Testing</a></li>
      <li><a href="#bugs">Bugs</a></li>
      <li><a href="#mistakes">Mistakes</a></li>
    </ul>
  </li>
  <li><a href="#deployment">Deployment</a>
    <ul>
      <li><a href="#deployment-to-render">Deployment to Render</a></li>
      <li><a href="#steps-for-local-deployment">Steps for Local Deployment</a></li>
      <li><a href="#forking-the-repository">Forking the Repository</a></li>
    </ul>
  </li>
  <li><a href="#credits">Credits</a>
    <ul>
      <li><a href="#documentation">Documentation</a></li>
      <li><a href="#media">Media</a></li>
      <li><a href="#code">Code</a></li>
    </ul>
  </li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
</ul>

---

<h2 id="target-audience">Target Audience</h2>
<h3 id="1-startup-founders">1. Startup Founders</h3>
<p>Pitchfork targets startup founders of all kinds—tech entrepreneurs, solo creators, and beyond—who want to build in public and seek early market feedback or collaborators for their ideas.</p>

<h3 id="2-developers-and-innovators">2. Developers and Innovators</h3>
<p>This includes software developers, hardware innovators, and other creators looking to share projects, gain pre-development insights, and connect with potential collaborators in a startup-focused community.</p>

---

<h2 id="challenges-solved-by-pitchfork">Challenges Solved by Pitchfork</h2>
<h3 id="for-startup-founders">For Startup Founders</h3>
<ul>
  <li>Struggling to validate ideas pre-development with actionable market feedback.</li>
  <li>Finding collaborators to turn concepts into reality.</li>
</ul>

<h3 id="for-developers-and-innovators">For Developers and Innovators</h3>
<ul>
  <li>Lack of platforms combining startup context with technical feedback.</li>
  <li>Difficulty connecting with founders for collaboration opportunities.</li>
</ul>

<h3 id="how-pitchfork-addresses-these-challenges">How Pitchfork Addresses These Challenges</h3>
<ul>
  <li>Offers a simple posting process with comments and upvotes for market validation.</li>
  <li>Encourages collaboration through user profiles and plans for future direct messaging.</li>
</ul>

---

<h2 id="goals-and-features">Goals and Features</h2>
<h3 id="1-idea-posting-and-validation">1. Idea Posting and Validation</h3>
<p>Users post ideas using a simple form with a title, subtitle, rich text editor for details, and a large collection of tags for categorization. An upvote system gauges community interest.</p>

<h3 id="2-discussion-and-commenting">2. Discussion and Commenting</h3>
<p>A threaded commenting system enables detailed discussions, with admin roles allowing post and user deletion for moderation.</p>

<h3 id="3-user-profiles">3. User Profiles</h3>
<p>Profiles feature custom profile pictures, banners, and bios, with plans to add post history and analytics (e.g., comment count, total likes received).</p>

<h3 id="4-future-goals-voting-system--analytics">4. Future Goals: Voting System & Analytics</h3>
<p>The upvote system is live, with future enhancements including detailed user analytics and direct messaging for collaboration.</p>

---

<h2 id="technology-stack">Technology Stack</h2>
<h3 id="1-frontend-technologies">1. Frontend Technologies</h3>
<ul>
  <li><strong>HTML</strong>: Core structure of the web app.</li>
  <li><strong>Custom CSS/SCSS</strong>: Fully custom styling with SCSS for modularity and responsiveness.</li>
  <li><strong>Angular</strong>: Framework for dynamic frontend interactivity and data binding.</li>
</ul>

<h3 id="2-backend-technologies">2. Backend Technologies</h3>
<ul>
  <li><strong>Python + Flask</strong>: Handles routing and server-side logic.</li>
  <li><strong>Flask-SQLAlchemy</strong>: ORM for database interactions.</li>
</ul>

<h3 id="3-database">3. Database</h3>
<ul>
  <li><strong>SQLite</strong>: Used initially for testing and development.</li>
  <li><strong>PostgreSQL</strong>: Live relational database for storing users, posts, and comments, chosen for its robustness and scalability.</li>
</ul>

<h3 id="4-deployment">4. Deployment</h3>
<ul>
  <li><strong>Render.com</strong>: Free hosting platform for deploying the live application.</li>
</ul>

---

<h2 id="api-usage">API Usage</h2>
<h3 id="1-current-external-apis">1. Current External APIs</h3>
<p>JWT (JSON Web Tokens) integrated manually for user authentication. All other API calls are custom-built for Pitchfork’s functionality.</p>

<h3 id="2-future-api-integration">2. Future API Integration</h3>
<p>Potential integration of messaging APIs (e.g., Twilio) or analytics tools (e.g., Google Analytics) to enhance collaboration and insights.</p>

---

<h2 id="challenges-and-solutions">Challenges and Solutions</h2>
<h3 id="1-development-challenges">1. Development Challenges</h3>
<p>Frontend-database integration and HTTP calls with complex data (e.g., profile edits) were difficult, requiring careful Angular-Flask synchronization.</p>

<h3 id="2-database-design">2. Database Design</h3>
<p>Structured with tables for users, posts, comments, and tags. Transitioning from SQLite to PostgreSQL required schema adjustments for production readiness.</p>

<h3 id="3-user-experience">3. User Experience</h3>
<p>Ensuring smooth profile editing and responsive design across devices posed challenges, resolved with Angular’s two-way data binding and SCSS media queries.</p>

<h3 id="4-future-improvements">4. Future Improvements</h3>
<p>Adding direct messaging would enhance collaboration, requiring a real-time communication system (e.g., WebSockets).</p>

---

<h2 id="design-decisions">Design Decisions</h2>
<h3 id="sitemap-and-wireframes">Sitemap and Wireframes</h3>
<p>[Placeholder for your sitemap or wireframe description.]</p>

<h3 id="color-scheme">Color Scheme</h3>
<p>[Placeholder for your color choices.]</p>

<h3 id="typography">Typography</h3>
<p>[Placeholder for font choices.]</p>

<h3 id="favicon">Favicon</h3>
<p>[Placeholder for favicon description.]</p>

<h3 id="error-404-page">Error 404 Page</h3>
<p>[Placeholder for your 404 page design.]</p>

<h3 id="accessibility-features">Accessibility Features</h3>
<p>[Placeholder for accessibility considerations.]</p>

---

<h2 id="goals-in-development">Goals in Development</h2>
<h3 id="project-goals">Project Goals</h3>
<p>[Placeholder for overall project objectives.]</p>

<h3 id="user-goals">User Goals</h3>
<p>[Placeholder for what users aim to achieve.]</p>

<h3 id="site-owner-goals">Site Owner Goals</h3>
<p>[Placeholder for your goals as the site owner.]</p>

<h3 id="developer-goals">Developer Goals</h3>
<p>[Placeholder for your personal learning goals.]</p>

---

<h2 id="user-stories">User Stories</h2>
<h3 id="first-time-visitor-goals">First-Time Visitor Goals</h3>
<p>[Placeholder for first-time user objectives.]</p>

<h3 id="returning-visitor-goals">Returning Visitor Goals</h3>
<p>[Placeholder for returning user objectives.]</p>

<h3 id="frequent-visitor-goals">Frequent Visitor Goals</h3>
<p>[Placeholder for frequent user objectives.]</p>

---

<h2 id="five-planes-of-ux">Five Planes of UX</h2>
<h3 id="strategy">Strategy</h3>
<p>[Placeholder for strategic planning.]</p>

<h3 id="scope">Scope</h3>
<p>[Placeholder for project scope.]</p>

<h3 id="structure">Structure</h3>
<p>[Placeholder for structural design.]</p>

<h3 id="skeleton">Skeleton</h3>
<p>[Placeholder for wireframe-level design.]</p>

<h3 id="surface">Surface</h3>
<p>[Placeholder for visual design.]</p>

---

<h2 id="viability-and-feasibility">Viability and Feasibility</h2>
<h3 id="technical-feasibility">Technical Feasibility</h3>
<p>[Placeholder for technical viability.]</p>

<h3 id="business-feasibility">Business Feasibility</h3>
<p>[Placeholder for business potential.]</p>

---

<h2 id="content-requirements">Content Requirements</h2>
<h3 id="navigation-bar">Navigation Bar</h3>
<p>[Placeholder for nav bar description.]</p>

<h3 id="footer">Footer</h3>
<p>[Placeholder for footer description.]</p>

<h3 id="homepage">Homepage</h3>
<p>[Placeholder for homepage description.]</p>

---

<h2 id="structure">Structure</h2>
<h3 id="overall-structure">Overall Structure</h3>
<p>[Placeholder for app structure.]</p>

<h3 id="information-architecture">Information Architecture</h3>
<p>[Placeholder for IA description.]</p>

<h3 id="interactive-experience">Interactive Experience</h3>
<p>[Placeholder for interactivity details.]</p>

---

<h2 id="changes-during-development">Changes During Development</h2>
<p>[Placeholder for changes made during the process.]</p>

---

<h2 id="testing">Testing</h2>
<h3 id="responsiveness">Responsiveness</h3>
<p>[Placeholder for responsiveness testing.]</p>

<h3 id="lighthouse-testing">Lighthouse Testing</h3>
<p>[Placeholder for Lighthouse results.]</p>

<h3 id="bugs">Bugs</h3>
<p>[Placeholder for bugs encountered.]</p>

<h3 id="mistakes">Mistakes</h3>
<p>[Placeholder for lessons learned.]</p>

---

<h2 id="deployment">Deployment</h2>
<h3 id="deployment-to-render">Deployment to Render</h3>
<p>Pitchfork is deployed on Render.com, a free hosting platform, with PostgreSQL configured for production use.</p>

<h3 id="steps-for-local-deployment">Steps for Local Deployment</h3>
<p>[Placeholder for local setup instructions.]</p>

<h3 id="forking-the-repository">Forking the Repository</h3>
<p>[Placeholder for forking instructions.]</p>

---

<h2 id="credits">Credits</h2>
<h3 id="documentation">Documentation</h3>
<p>[Placeholder for documentation sources.]</p>

<h3 id="media">Media</h3>
<p>[Placeholder for media credits.]</p>

<h3 id="code">Code</h3>
<p>[Placeholder for code attributions.]</p>

---

<h2 id="acknowledgements">Acknowledgements</h2>
<p>[Placeholder for thanks and acknowledgements.]</p>

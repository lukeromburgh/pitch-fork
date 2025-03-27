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
      <li><a href="#error-404-page">Error 404 Page</a></li>
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
      <li><a href="#how-to-use">How to Use</a></li>
      <li><a href="#404-page">404 Page</a></li>
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

<h2 id="introduction">Introduction</h2>
<p>Pitchfork is a community-driven platform designed to help startup founders and developers validate their ideas through crowdsourced feedback. Users can sign up, create profiles, customize them, post ideas, interact with others, and build a network of like-minded innovators.</p>

<h2 id="key-features">Key Features</h2>
<ul>
  <li><strong>User Profiles:</strong> Customizable profiles with images, bios, and banners.</li>
  <li><strong>Idea Posting:</strong> Users can submit ideas with detailed descriptions and categories.</li>
  <li><strong>Community Interaction:</strong> Upvoting, commenting, and discussions to engage with ideas.</li>
  <li><strong>Moderation:</strong> Admin tools for managing content and users.</li>
  <li><strong>Future Enhancements:</strong> Planned features include premium analytics, direct messaging, and collaboration tools.</li>
</ul>

<h2 id="monetization">Monetization Strategy</h2>
<ul>
  <li><strong>Advertisements:</strong> Potential integration of ads for revenue generation.</li>
  <li><strong>Paid Idea Audits:</strong> Offering premium services for detailed feedback.</li>
  <li><strong>Sponsorships:</strong> Partnering with relevant startups and investors.</li>
</ul>

<h2 id="scalability">Scalability Challenges</h2>
<p>The platform is currently hosted on a free-tier service, limiting database, CPU, and RAM usage. Future scalability plans include:</p>
<ul>
  <li>Upgrading hosting services for better performance.</li>
  <li>Implementing database optimizations for efficient data management.</li>
  <li>Exploring cloud-based solutions for high availability.</li>
</ul>

<h2 id="technology-stack">Technology Stack</h2>
<h3 id="frontend">Frontend</h3>
<ul>
  <li>HTML, CSS (SCSS for modular styling)</li>
  <li>Angular for dynamic UI</li>
</ul>

<h3 id="backend">Backend</h3>
<ul>
  <li>Python (Flask) for API and server logic</li>
  <li>Flask-SQLAlchemy for database interactions</li>
</ul>

<h3 id="database">Database</h3>
<ul>
  <li>SQLite for development</li>
  <li>PostgreSQL for production</li>
</ul>

<h3 id="deployment">Deployment</h3>
<ul>
  <li>Hosted on Render.com (Free-tier limitations)</li>
</ul>

<h2 id="testing">Testing</h2>
<ul>
  <li><strong>Automated Testing:</strong> Karma and Jasmine for Angular testing.</li>
  <li><strong>Manual Testing:</strong> HTML validation with W3C and linting tools.</li>
</ul>

<h2 id="user-feedback">User Feedback</h2>
<p>Currently awaiting feedback from initial testers to refine user experience and address potential pain points.</p>

<h2 id="future-plans">Future Plans</h2>
<ul>
  <li>Introducing direct messaging for networking.</li>
  <li>Enhancing analytics for user engagement tracking.</li>
  <li>Developing a subscription-based model for premium features.</li>
</ul>

<h2 id="conclusion">Conclusion</h2>
<p>Pitchfork aims to be the go-to platform for early-stage idea validation, fostering a collaborative environment where innovators can refine and develop their projects with real-time community feedback.</p>

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

<h3 id="how-to-use">How to Use</h3>
<p>[Placeholder for usage instructions.]</p>

<h3 id="404-page">404 Page</h3>
<p>[Placeholder for 404 page content.]</p>

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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pitchfork: A Crowdsourced Validation Platform</title>
</head>
<body>

<h1>Pitchfork: A Crowdsourced Validation Platform for Startup Founders and Developers</h1>

<h2 id="introduction">Introduction</h2>
<p>Pitchfork is a community-driven platform designed to help startup founders and developers validate their ideas through crowdsourced feedback. Users can sign up, create customizable profiles, post ideas, interact with others, and build a network of like-minded innovators.</p>

<h2 id="table-of-contents">Table of Contents</h2>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#target-audience">Target Audience</a>
    <ul>
      <li><a href="#startup-founders">Startup Founders</a></li>
      <li><a href="#developers-and-innovators">Developers and Innovators</a></li>
    </ul>
  </li>
  <li><a href="#challenges-and-solutions">Challenges and Solutions</a>
    <ul>
      <li><a href="#for-startup-founders">For Startup Founders</a></li>
      <li><a href="#for-developers-and-innovators">For Developers and Innovators</a></li>
      <li><a href="#how-pitchfork-addresses-these">How Pitchfork Addresses These</a></li>
    </ul>
  </li>
  <li><a href="#key-features">Key Features</a>
    <ul>
      <li><a href="#idea-posting-and-validation">Idea Posting and Validation</a></li>
      <li><a href="#discussion-and-commenting">Discussion and Commenting</a></li>
      <li><a href="#user-profiles">User Profiles</a></li>
      <li><a href="#moderation">Moderation</a></li>
    </ul>
  </li>
  <li><a href="#design-and-ux">Design and User Experience</a>
    <ul>
      <li><a href="#five-planes-of-ux">Five Planes of UX</a></li>
      <li><a href="#design-decisions">Design Decisions</a></li>
      <li><a href="#content-requirements">Content Requirements</a></li>
      <li><a href="#structure">Structure</a></li>
    </ul>
  </li>
  <li><a href="#technology-stack">Technology Stack</a>
    <ul>
      <li><a href="#frontend">Frontend</a></li>
      <li><a href="#backend">Backend</a></li>
      <li><a href="#database">Database</a></li>
      <li><a href="#deployment">Deployment</a></li>
      <li><a href="#api-usage">API Usage</a></li>
    </ul>
  </li>
  <li><a href="#development-process">Development Process</a>
    <ul>
      <li><a href="#goals-in-development">Goals in Development</a></li>
      <li><a href="#user-stories">User Stories</a></li>
      <li><a href="#challenges-during-development">Challenges During Development</a></li>
      <li><a href="#changes-during-development">Changes During Development</a></li>
      <li><a href="#testing">Testing</a></li>
    </ul>
  </li>
  <li><a href="#viability-and-future-plans">Viability and Future Plans</a>
    <ul>
      <li><a href="#technical-and-business-feasibility">Technical and Business Feasibility</a></li>
      <li><a href="#monetization-strategy">Monetization Strategy</a></li>
      <li><a href="#scalability-challenges">Scalability Challenges</a></li>
      <li><a href="#future-enhancements">Future Enhancements</a></li>
    </ul>
  </li>
  <li><a href="#deployment-instructions">Deployment Instructions</a>
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

<h2 id="target-audience">Target Audience</h2>
<h3 id="startup-founders">Startup Founders</h3>
<p>Pitchfork targets startup founders of all kinds—tech entrepreneurs, solo creators, and beyond—who want to build in public and seek early market feedback or collaborators for their ideas.</p>

<h3 id="developers-and-innovators">Developers and Innovators</h3>
<p>This includes software developers, hardware innovators, and other creators looking to share projects, gain pre-development insights, and connect with potential collaborators in a startup-focused community.</p>

<h2 id="challenges-and-solutions">Challenges and Solutions</h2>
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

<h3 id="how-pitchfork-addresses-these">How Pitchfork Addresses These</h3>
<ul>
  <li>Offers a simple posting process with comments and upvotes for market validation.</li>
  <li>Encourages collaboration through user profiles and plans for future direct messaging.</li>
</ul>

<h2 id="key-features">Key Features</h2>
<h3 id="idea-posting-and-validation">Idea Posting and Validation</h3>
<p>Users post ideas using a simple form with a title, subtitle, rich text editor for details, and a large collection of tags for categorization. An upvote system gauges community interest.</p>

<h3 id="discussion-and-commenting">Discussion and Commenting</h3>
<p>A threaded commenting system enables detailed discussions, fostering engagement and feedback.</p>

<h3 id="user-profiles">User Profiles</h3>
<p>Profiles feature custom profile pictures, banners, and bios, with plans to add post history and analytics (e.g., comment count, total likes received).</p>

<h3 id="moderation">Moderation</h3>
<p>Admin roles allow post and user deletion for effective content management.</p>

<h2 id="design-and-ux">Design and User Experience</h2>
<h3 id="five-planes-of-ux">Five Planes of UX</h3>
<ul>
  <li><strong>Strategy</strong>: [Placeholder for strategic planning.]</li>
  <li><strong>Scope</strong>: [Placeholder for project scope.]</li>
  <li><strong>Structure</strong>: [Placeholder for structural design.]</li>
  <li><strong>Skeleton</strong>: [Placeholder for wireframe-level design.]</li>
  <li><strong>Surface</strong>: [Placeholder for visual design.]</li>
</ul>

<h3 id="design-decisions">Design Decisions</h3>
<ul>
  <li><strong>Sitemap and Wireframes</strong>: [Placeholder for your sitemap or wireframe description.]</li>
  <li><strong>Color Scheme</strong>: [Placeholder for your color choices.]</li>
  <li><strong>Typography</strong>: [Placeholder for font choices.]</li>
  <li><strong>Favicon</strong>: [Placeholder for favicon description.]</li>
  <li><strong>Error 404 Page</strong>: [Placeholder for your 404 page design.]</li>
  <li><strong>Accessibility Features</strong>: [Placeholder for accessibility considerations.]</li>
</ul>

<h3 id="content-requirements">Content Requirements</h3>
<ul>
  <li><strong>Navigation Bar</strong>: [Placeholder for nav bar description.]</li>
  <li><strong>Footer</strong>: [Placeholder for footer description.]</li>
  <li><strong>Homepage</strong>: [Placeholder for homepage description.]</li>
  <li><strong>How to Use</strong>: [Placeholder for usage instructions.]</li>
  <li><strong>404 Page</strong>: [Placeholder for 404 page content.]</li>
</ul>

<h3 id="structure">Structure</h3>
<ul>
  <li><strong>Overall Structure</strong>: [Placeholder for app structure.]</li>
  <li><strong>Information Architecture</strong>: [Placeholder for IA description.]</li>
  <li><strong>Interactive Experience</strong>: [Placeholder for interactivity details.]</li>
</ul>

<h2 id="technology-stack">Technology Stack</h2>
<h3 id="frontend">Frontend</h3>
<ul>
  <li><strong>HTML</strong>: Core structure of the web app.</li>
  <li><strong>Custom CSS/SCSS</strong>: Fully custom styling with SCSS for modularity and responsiveness.</li>
  <li><strong>Angular</strong>: Framework for dynamic frontend interactivity and data binding.</li>
</ul>

<h3 id="backend">Backend</h3>
<ul>
  <li><strong>Python + Flask</strong>: Handles routing and server-side logic.</li>
  <li><strong>Flask-SQLAlchemy</strong>: ORM for database interactions.</li>
</ul>

<h3 id="database">Database</h3>
<ul>
  <li><strong>SQLite</strong>: Used initially for testing and development.</li>
  <li><strong>PostgreSQL</strong>: Live relational database for storing users, posts, and comments, chosen for robustness and scalability.</li>
</ul>

<h3 id="deployment">Deployment</h3>
<ul>
  <li><strong>Render.com</strong>: Free hosting platform for deploying the live application.</li>
</ul>

<h3 id="api-usage">API Usage</h3>
<ul>
  <li><strong>Current External APIs</strong>: JWT (JSON Web Tokens) integrated manually for user authentication. All other API calls are custom-built for Pitchfork’s functionality.</li>
  <li><strong>Future API Integration</strong>: Potential integration of messaging APIs (e.g., Twilio) or analytics tools (e.g., Google Analytics) to enhance collaboration and insights.</li>
</ul>

<h2 id="development-process">Development Process</h2>
<h3 id="goals-in-development">Goals in Development</h3>
<ul>
  <li><strong>Project Goals</strong>: [Placeholder for overall project objectives.]</li>
  <li><strong>User Goals</strong>: [Placeholder for what users aim to achieve.]</li>
  <li><strong>Site Owner Goals</strong>: [Placeholder for your goals as the site owner.]</li>
  <li><strong>Developer Goals</strong>: [Placeholder for your personal learning goals.]</li>
</ul>

<h3 id="user-stories">User Stories</h3>
<ul>
  <li><strong>First-Time Visitor Goals</strong>: [Placeholder for first-time user objectives.]</li>
  <li><strong>Returning Visitor Goals</strong>: [Placeholder for returning user objectives.]</li>
  <li><strong>Frequent Visitor Goals</strong>: [Placeholder for frequent user objectives.]</li>
</ul>

<h3 id="challenges-during-development">Challenges During Development</h3>
<ul>
  <li><strong>Development Challenges</strong>: Frontend-database integration and HTTP calls with complex data (e.g., profile edits) required careful Angular-Flask synchronization.</li>
  <li><strong>Database Design</strong>: Structured with tables for users, posts, comments, and tags. Transitioning from SQLite to PostgreSQL required schema adjustments.</li>
  <li><strong>User Experience</strong>: Smooth profile editing and responsive design resolved with Angular’s two-way data binding and SCSS media queries.</li>
</ul>

<h3 id="changes-during-development">Changes During Development</h3>
<p>[Placeholder for changes made during the process.]</p>

<h3 id="testing">Testing</h3>
<ul>
  <li><strong>Automated Testing</strong>: Karma and Jasmine for Angular testing.</li>
  <li><strong>Manual Testing</strong>: HTML validation with W3C and linting tools.</li>
  <li><strong>Responsiveness</strong>: [Placeholder for responsiveness testing.]</li>
  <li><strong>Lighthouse Testing</strong>: [Placeholder for Lighthouse results.]</li>
  <li><strong>Bugs</strong>: [Placeholder for bugs encountered.]</li>
  <li><strong>Mistakes</strong>: [Placeholder for lessons learned.]</li>
</ul>

<h2 id="viability-and-future-plans">Viability and Future Plans</h2>
<h3 id="technical-and-business-feasibility">Technical and Business Feasibility</h3>
<ul>
  <li><strong>Technical Feasibility</strong>: [Placeholder for technical viability.]</li>
  <li><strong>Business Feasibility</strong>: [Placeholder for business potential.]</li>
</ul>

<h3 id="monetization-strategy">Monetization Strategy</h3>
<ul>
  <li><strong>Advertisements</strong>: Potential integration of ads for revenue generation.</li>
  <li><strong>Paid Idea Audits</strong>: Offering premium services for detailed feedback.</li>
  <li><strong>Sponsorships</strong>: Partnering with relevant startups and investors.</li>
</ul>

<h3 id="scalability-challenges">Scalability Challenges</h3>
<p>The platform is currently hosted on a free-tier service, limiting database, CPU, and RAM usage. Future scalability plans include:</p>
<ul>
  <li>Upgrading hosting services for better performance.</li>
  <li>Implementing database optimizations for efficient data management.</li>
  <li>Exploring cloud-based solutions for high availability.</li>
</ul>

<h3 id="future-enhancements">Future Enhancements</h3>
<ul>
  <li>Introducing direct messaging for networking.</li>
  <li>Enhancing analytics for user engagement tracking.</li>
  <li>Developing a subscription-based model for premium features (e.g., detailed user analytics).</li>
</ul>

<h2 id="deployment-instructions">Deployment Instructions</h2>
<h3 id="deployment-to-render">Deployment to Render</h3>
<p>Pitchfork is deployed on Render.com, a free hosting platform, with PostgreSQL configured for production use.</p>

<h3 id="steps-for-local-deployment">Steps for Local Deployment</h3>
<p>[Placeholder for local setup instructions.]</p>

<h3 id="forking-the-repository">Forking the Repository</h3>
<p>[Placeholder for forking instructions.]</p>

<h2 id="credits">Credits</h2>
<h3 id="documentation">Documentation</h3>
<p>[Placeholder for documentation sources.]</p>

<h3 id="media">Media</h3>
<p>[Placeholder for media credits.]</p>

<h3 id="code">Code</h3>
<p>[Placeholder for code attributions.]</p>

<h2 id="acknowledgements">Acknowledgements</h2>
<p>[Placeholder for thanks and acknowledgments.]</p>

</body>
</html>

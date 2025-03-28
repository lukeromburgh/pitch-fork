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
  <li><strong>Python + Flask</strong>: Handles server-side logic and API calls.</li>
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

<h2 id="monetization">Monetization Strategy</h2>
<ul>
  <li><strong>Advertisements:</strong> Potential integration of ads for revenue generation.</li>
  <li><strong>Paid Idea Audits:</strong> Offering premium services for detailed feedback.</li>
  <li><strong>Sponsorships:</strong> Partnering with relevant startups and investors.</li>
</ul>

<h2 id="testing">Testing</h2>
<ul>
  <li><strong>Automated Testing:</strong> Karma and Jasmine for Angular testing.</li>
  <li><strong>Manual Testing:</strong> HTML validation with W3C and linting tools.</li>
</ul>

<h2 id="user-feedback">User Feedback</h2>
<p>Currently awaiting feedback from initial testers to refine user experience and address potential pain points.</p>

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
# PitchFork

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


<h2 id="credits">Credits</h2>

<h3 id="media">Media</h3>
<p>Screenshots from various stages of development:</p>
<p>This was the first screenshot I took of my app, I think at this stage I started developing with React and later started over with Angular on this repo.</p>

![Vite _ React _ TS](https://github.com/user-attachments/assets/13bc8247-ecb2-4b3b-8b2b-c5edc88b7145)

![Screenshot 2025-02-05 at 12 58 19](https://github.com/user-attachments/assets/5bb9764b-78c4-42a6-9e51-50bed80608e6)
![Visual Selection from Napkin AI](https://github.com/user-attachments/assets/bef29697-54eb-4e19-9ca3-a6816de192c6)
![Visual Selection from Napkin AI (1)](https://github.com/user-attachments/assets/cdeffa46-6fa1-43de-836a-20ff74ee5d79)
![Visual Selection from Napkin AI (2)](https://github.com/user-attachments/assets/5a32f627-a269-4ef6-b829-741263bb699b)
https://github.com/user-attachments/assets/eccd8b75-e880-49ee-a994-99fa6b042633

![Posts](htt![Posts · 4 30pm · 02-18](https://github.com/user-attachments/assets/5673fb51-20ba-4112-8ef7-a626487481cc)
ps://github.com/user-attachments/assets/b60e08d8-541f-421a-b751-aeefe026aae3)
![Posts · 4 30pm · 02-18 (1)](https://github.com/user-attachments/assets/686dc7fc-866a-4db8-bf1a-008b25727522)

![Posts · 4 31pm · 02-18](https://github.com/user-attachments/assets/60edc87c-d672-4ba1-970d-d1d2e0337da0)

![Posts · 4 32pm · 02-18](https://github.com/user-attachments/assets/c8b3600c-4f44-47b9-b6dc-0a88ed448664)

![Posts · 5 13pm · 02-20](https://github.com/user-attachments/assets/1068ec64-30ef-4341-abd0-1508a49993bf)

![Posts · 5 14pm · 02-20](https://github.com/user-attachments/assets/1e1b4e83-7a8f-48a1-9c89-d4a87b3c264b)

![Home](https://github.com/user-attachments/assets/de966f6b-3919-4843-a4e0-2d0d0e5f2a04)

![Pitchfork _ Your Profile](https://github.com/user-attachments/assets/abf9a233-33b7-4870-befd-673b00c6b5d0)
![Screenshot 2025-02-21 at 11 35 34](https://github.com/user-attachments/assets/5b79c2d2-8f0d-4829-b99f-4dcd936984c2)

![Screenshot 2025-02-20 at 10 54 27](https://github.com/user-attachments/assets/ccc4a419-c0f0-42aa-bd71-a77ce4664fa9)

<img width="496" alt="Screenshot 2025-02-19 at 09 12 08" src="https://github.com/user-attachments/assets/b7a2c9f7-d43c-4667-b154-024dbb84f18c" />

<img width="1433" alt="Screenshot 2025-03-26 at 12 16 59" src="https://github.com/user-attachments/assets/74ff30d3-bb5b-4df6-ad1e-19c92b41f459" />

![Uploading Screenshot 2025-03-22 at 07.44.11.png…]()



<h3 id="code">Code</h3>
<p>https://wweb.dev/resources/animated-css-background-generator</p>

<h2 id="acknowledgements">Acknowledgements</h2>
<p>Many thanks to Tech with Tim and Programming with Mosh for their extensive youtube series covering Angular, Flask and python.</p>

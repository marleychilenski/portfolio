import "./App.css";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/next";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_f3px3ek",
    "template_5xlqktv",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    "0ffLVBZraKPR21jkB"
  )
  .then(() => {
    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.log("EmailJS error:", error);
    alert("Failed to send message.");
  });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="name">Marley Chilenski</div>

        <ul className="nav-links">
          <li><a href="#about-section">About</a></li>
          <li><a href="#project-section">Projects</a></li>
          <li><a href="#skills-section">Skills</a></li>
          <li><a href="#contact-section">Message Me!</a></li>
        </ul>
      </nav>

      <div className="wrapper-main">

      {/* ABOUT */}
<section id="about-section" className="aboutme">
  <h1>Hey World, I'm Marley.</h1>
  <hr />

  <img
    className="headshot"
    src="images/headshot.jpeg"
    alt="An image of Marley Chilenski"
  />

  <p className="aboutme-p">
    Hey! I’m a third-year Information Technology student at the University of Cincinnati
    with a passion for creativity and problem-solving. I enjoy bringing ideas to life
    through real, hands-on projects and continuously building my technical skills along
    the way. Thank you so much for checking out my site. :)
  </p>

  <a
    href="https://www.linkedin.com/in/marley-chilenski-23a520335/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      className="abouticons"
      id="linkedin"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#e18aaa"
        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.93 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
      />
    </svg>
  </a>

  <a
    href="https://github.com/marleychilenski"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      className="abouticons"
      id="github-link"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#e18aaa"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 19.9-3.4 25.6-6.7 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37.1-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
      />
    </svg>
  </a>
</section>
{/* PROJECTS */}
<section id="project-section" className="projects">
  <h2>Projects</h2>
  <hr />

  <div className="card-container">

    <a
      href="https://marleychilenski.github.io/Business-Card/"
      className="card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card">
        <img
          className="projectImg"
          src="images/businesscard-project.jpg"
          alt="Business Card Project"
        />

        <div className="card-content">
          <h3>Business Card</h3>
          <p className="project-lang">HTML | CSS</p>
          <p className="project-description">
            An interactive digital business card that features a two-sided layout and a smooth flipping animation.
          </p>
        </div>
      </div>
    </a>

    <a
      href="https://marleychilenski.github.io/score_counter/"
      className="card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card">
        <img
          className="projectImg"
          src="images/scoreCounter-project.jpg"
          alt="Interactive Score Counter"
        />

        <div className="card-content">
          <h3>Interactive Score Counter</h3>
          <p className="project-lang">HTML | CSS | JAVASCRIPT</p>
          <p className="project-description">
            A simple game score counter built to practice DOM manipulation, functions, variables, and event handling.
          </p>
        </div>
      </div>
    </a>

  </div>
</section>
        {/* SKILLS */}
        <section id="skills-section" className="skills">
          <h2 className="skills-p">Skills</h2>
          <hr />

  <svg className="techicons" id="html" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path fill="#e18aaa" d="M128 96L162.9 491.8L319.5 544L477.1 491.8L512 96L128 96zM436.2 223.9L252.4 223.9L256.5 273.3L432.1 273.3L418.5 421.7L320.6 448.7L320.6 449L319.5 449L220.8 421.7L214.8 345.9L262.5 345.9L266 384L319.5 398.5L373.2 384L379.2 321.8L212.3 321.8L199.5 176.2L440.6 176.2L436.2 223.9z"/>
  </svg>

  <svg className="techicons" id="css" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path fill="#e18aaa" d="M128 96L162.9 491.8L320 544L477.1 491.8L512 96L128 96zM441.1 176L436.3 223.3L321 272.6L320.7 272.7L432.2 272.7L419.4 419.3L321.2 448L222.4 418.8L216 344.9L264.9 344.9L268.1 383.2L320.7 396.5L375.4 381.1L379.1 319.5L212.8 319L212.8 318.9L212.6 319L209 272.7L321.1 226L327.6 223.3L204.7 223.3L198.9 176L441.1 176z"/>
  </svg>

  <svg className="techicons" id="github-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path fill="#e18aaa" d="M266.1 392.7C266.1 413.6 255.2 447.8 229.4 447.8C203.6 447.8 192.7 413.6 192.7 392.7C192.7 371.8 203.6 337.6 229.4 337.6C255.2 337.6 266.1 371.8 266.1 392.7zM560 342.2C560 374.1 556.8 407.9 542.5 437.2C504.6 513.8 400.4 512 325.8 512C250 512 139.6 514.7 100.2 437.2C85.6 408.2 80 374.1 80 342.2C80 300.3 93.9 260.7 121.5 228.6C116.3 212.8 113.8 196.2 113.8 179.8C113.8 158.3 118.7 147.5 128.4 128C173.7 128 202.7 137 237.2 164C266.2 157.1 296 154 325.9 154C352.9 154 380.1 156.9 406.3 163.2C440.3 136.5 469.3 128 514.1 128C523.9 147.5 528.7 158.3 528.7 179.8C528.7 196.2 526.1 212.5 521 228C548.5 260.4 560 300.3 560 342.2zM495.7 392.7C495.7 348.8 469 310.1 422.2 310.1C403.3 310.1 385.2 313.5 366.2 316.1C351.3 318.4 336.4 319.3 321.1 319.3C305.9 319.3 291 318.4 276 316.1C257.3 313.5 239 310.1 220 310.1C173.2 310.1 146.5 348.8 146.5 392.7C146.5 480.5 226.9 494 296.9 494L345.1 494C415.4 494 495.7 480.6 495.7 392.7zM413.1 337.6C387.3 337.6 376.4 371.8 376.4 392.7C376.4 413.6 387.3 447.8 413.1 447.8C438.9 447.8 449.8 413.6 449.8 392.7C449.8 371.8 438.9 337.6 413.1 337.6z"/>
  </svg>

  <svg className="techicons" id="git" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path fill="#e18aaa" d="M535.6 300.1L340 104.5C334.6 99 327.2 96 319.6 96C312 96 304.6 99 299.2 104.4L258.5 145L310 196.5C337.1 187.4 362.7 213.3 353.4 240.2L403.1 289.9C437.3 278.1 464.3 320.9 438.6 346.6C412.1 373.1 368.4 343.7 382.6 309.3L336.3 263L336.3 384.9C361.6 397.4 358.6 426.7 345.4 439.9C339 446.3 330.2 450 321.1 450C312 450 303.3 446.4 296.8 439.9C279.2 422.3 285.7 393 308 383.9L308 260.9C287.2 252.4 283.4 230.2 289.4 215.9L238.6 165L104.5 299.1C99 304.6 96 311.9 96 319.5C96 327.1 99 334.5 104.5 339.9L300.1 535.6C305.5 541 312.8 544 320.5 544C328.2 544 335.5 541 340.9 535.6L535.6 340.9C541 335.5 544 328.1 544 320.5C544 312.9 541 305.5 535.6 300.1z"/>
  </svg>

  <svg className="techicons" id="js" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path fill="hsl(338, 59%, 71%)" d="M96 96L96 544L544 544L544 96L96 96zM339.8 445.4C339.8 489 314.2 508.9 276.9 508.9C243.2 508.9 223.7 491.5 213.7 470.4L248 449.7C254.6 461.4 260.6 471.3 275.1 471.3C288.9 471.3 297.7 465.9 297.7 444.8L297.7 301.7L339.8 301.7L339.8 445.4zM439.4 508.9C400.3 508.9 375 490.3 362.7 465.9L397 446.1C406 460.8 417.8 471.7 438.5 471.7C455.9 471.7 467.1 463 467.1 450.9C467.1 436.5 455.7 431.4 436.4 422.9L425.9 418.4C395.5 405.5 375.4 389.2 375.4 354.9C375.4 323.3 399.5 299.3 437 299.3C463.8 299.3 483 308.6 496.8 333L464 354C456.8 341.1 449 336 436.9 336C424.6 336 416.8 343.8 416.8 354C416.8 366.6 424.6 371.7 442.7 379.6L453.2 384.1C489 399.4 509.1 415.1 509.1 450.3C509.1 488.1 479.3 508.9 439.4 508.9z"/>
  </svg>

  <svg className="techicons" id="sql" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path fill="rgb(225, 138, 170)" d="M544 269.8C529.2 279.6 512.2 287.5 494.5 293.8C447.5 310.6 385.8 320 320 320C254.2 320 192.4 310.5 145.5 293.8C127.9 287.5 110.8 279.6 96 269.8L96 352C96 396.2 196.3 432 320 432C443.7 432 544 396.2 544 352L544 269.8zM544 192L544 144C544 99.8 443.7 64 320 64C196.3 64 96 99.8 96 144L96 192C96 236.2 196.3 272 320 272C443.7 272 544 236.2 544 192zM494.5 453.8C447.6 470.5 385.9 480 320 480C254.1 480 192.4 470.5 145.5 453.8C127.9 447.5 110.8 439.6 96 429.8L96 496C96 540.2 196.3 576 320 576C443.7 576 544 540.2 544 496L544 429.8C529.2 439.6 512.2 447.5 494.5 453.8z"/>
  </svg>
</section>

        {/* CONTACT */}
        <section id="contact-section" className="contactme">
          <h2>Send a Message!</h2>
          <hr />

          <form id="messageForm" className="messageForm" onSubmit={handleSubmit}>
  <input
    type="text"
    id="name"
    placeholder="Your Full Name"
    required
    value={formData.name}
    onChange={handleChange}
  />

  <input
    type="email"
    id="email"
    placeholder="Your Email"
    required
    value={formData.email}
    onChange={handleChange}
  />

  <textarea
    id="message"
    placeholder="Type your message..."
    required
    value={formData.message}
    onChange={handleChange}
  />

  <button type="submit" className="submit">
    Send Message
  </button>
</form>
<div className={`custom-alert ${showAlert ? "show" : ""}`}>
    <p>Message sent to Marley</p>
    <button onClick={() => setShowAlert(false)}>OK</button>
  </div>

  <div
    className={`alert-overlay ${showAlert ? "show" : ""}`}
    onClick={() => setShowAlert(false)}
  />
        </section>

        {/* FOOTER */}
        <footer>
          <p>&copy; 2025 Marley Chilenski</p>
        </footer>

      </div>
    </>
  );

}

export default App;
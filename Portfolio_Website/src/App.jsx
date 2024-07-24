import './App.css'
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   const sections = document.querySelectorAll('section');
  //   const navLinks = document.querySelectorAll('.nav_bar a');

  //   const options = {
  //     threshold: 0.5, // Trigger when 50% of the section is visible
  //   };

  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       const id = entry.target.id;
  //       const navLink = document.querySelector(`.nav_bar a[href="#${id}"]`);
        
  //       if (entry.isIntersecting) {
  //         navLinks.forEach(link => link.classList.remove('active'));
  //         navLink.classList.add('active');
  //       }
  //     });
  //   }, options);

  //   sections.forEach(section => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sections.forEach(section => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);


  return (
    <>
      <div className='entire_container'>
        <div className='left_container'>
          <div>
            <h1><a href="/">Daniel Bird</a></h1>
            <h2>Fullstack Software Engineer</h2>
            <p>I create seamless, robust, and innovative web solutions from front to back.</p>
            <div className='nav_bar'>
              <a href="#about"><span></span>⎯⎯⎯ About</a>
              <a href="#experience"><span></span>⎯⎯⎯ Experience</a>
              <a href="#projects"><span></span>⎯⎯⎯ Projects</a>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://github.com/danielbirdjr" target='_blank' rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github" className='icon'>
                    <path fill='currentColor' d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/danielbirdjr/" target='_blank' rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="linkedin" className='icon'>
                    <path fill='currentColor' d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:danielbirdwork@gmail.com" target='_blank' rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" id="mail" class="icon">
                    <path fill="currentColor" d="M0,94V26A25.94821,25.94821,0,0,1,26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A26.012,26.012,0,0,1,0,94Z"></path>
                    <path fill="#121212" d="M99,86.2a6.10894,6.10894,0,0,1-3,.8H24a5.83049,5.83049,0,0,1-3-.8l24-24,5.9,5.9A12.219,12.219,0,0,0,60,71.5a12.37426,12.37426,0,0,0,9.1-3.4L75,62.2Zm2.1-2.2-24-24,24-24a6.10893,6.10893,0,0,1,.8,3V81A4.55088,4.55088,0,0,1,101.1,84ZM18.8,84a6.10894,6.10894,0,0,1-.8-3V39a5.83049,5.83049,0,0,1,.8-3l24,24ZM99,33.8,66.9,65.9A9.353,9.353,0,0,1,60,68.5a9.353,9.353,0,0,1-6.9-2.6L21,33.8a6.10894,6.10894,0,0,1,3-.8H96A6.10862,6.10862,0,0,1,99,33.8Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='right_container'>
          <div id='about' className='about_container'>
            <p>Lorem ipsum odor amet, consectetuer <b>adipiscing</b> elit. Nibh vehicula luctus eros, dignissim eu egestas fringilla morbi netus? Sagittis vestibulum faucibus eros et imperdiet vulputate elit. Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh vehicula luctus eros, dignissim eu egestas fringilla morbi netus?</p>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh vehicula luctus eros, dignissim eu egestas fringilla morbi netus? Sagittis vestibulum faucibus eros et imperdiet vulputate elit. Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas per condimentum ante egestas fermentum tincidunt. Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
          </div>
          <div id='experience' className='experience_section'>
            <div className='experice_container'>
              <div className='timeline'>2024 — PRESENT</div>
              <div className='experience_details'>
                <h3>Artificial Intelligence & Software Engineer @ Headstarter</h3>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor metus sodales class molestie dui faucibus. Nulla efficitur primis scelerisque; quam hendrerit eu imperdiet.</p>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor metus sodales class molestie dui faucibus. Nulla efficitur primis scelerisque; quam hendrerit eu imperdiet.</p>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor metus sodales class molestie dui faucibus. Nulla efficitur primis scelerisque; quam hendrerit eu imperdiet.</p> 
                <ul className='languages_used'>
                  <li><div className='languages_used_container'>Javascript</div></li>
                  <li><div className='languages_used_container'>Python</div></li>
                  <li><div className='languages_used_container'>Java</div></li>
                </ul>
              </div>
            </div>
            <div className='experice_container'>
              <div className='timeline'>JUNE 2024 — PRESENT</div>
              <div className='experience_details'>
                <h3>Software Engineer Mentor @ BCAMP</h3>
                <p>Conceptualized and led development of TicketChain, a decentralized ticketing platform on Mode Network blockchain, addressing industry issues.</p>
                <p>Mentored a cross-functional team of 4 developers, guiding implementation of React, Node.js/Python, and Solidity tech stack.</p>
                <p>Oversaw key feature development including decentralized event management, user dashboards, and secure ticket transfer system.</p>
                <ul className='languages_used'>
                  <li><div className='languages_used_container'>React</div></li>
                  <li><div className='languages_used_container'>Node.js</div></li>
                  <li><div className='languages_used_container'>Python</div></li>
                  <li><div className='languages_used_container'>thirdweb</div></li>
                  <li><div className='languages_used_container'>Solidity</div></li>
                </ul>
              </div>
            </div>
            <div className='experice_container'>
              <div className='timeline'>ARIL — MAY 2024</div>
              <div className='experience_details'>
                <h3>Artificial Intelligience & Software Engineer Intern @ BCAMP</h3>
                <p>Developed a Next.js frontend application with TypeScript for interactive attorney productivity and client data analysis dashboards.</p>
                <p>Implemented user authentication using Auth0 and SSO with SAML 2.0, ensuring secure access to Domo Dashboards.</p>
                <p>Optimized attorney workflow by creating an intuitive UI showcasing key metrics on client projects, efficiency, and bandwidth.</p>
                <ul className='languages_used'>
                  <li><div className='languages_used_container'>Javascript</div></li>
                  <li><div className='languages_used_container'>Python</div></li>
                  <li><div className='languages_used_container'>Java</div></li>
                </ul>
              </div>
            </div>
            <div className='experice_container'>
              <div className='timeline'>JAN — FEB 2024</div>
              <div className='experience_details'>
                <h3>Software Engineer Intern @ BCAMP</h3>
                <p>Developed a Telegram crypto trading bot in Python, integrating Moon API for cryptocurrency payments.</p>
                <p>Utilized Azure cloud services and MySQL database for effective management of user data and active crypto alerts.</p>
                <p>Enhanced bot functionality by integrating Dune API to fetch real-time on-chain data for active notifications.</p>
                <ul className='languages_used'>
                  <li><div className='languages_used_container'>Python</div></li>
                  <li><div className='languages_used_container'>SQL</div></li>
                  <li><div className='languages_used_container'>JavaScript</div></li>
                  <li><div className='languages_used_container'>HTML</div></li>
                  <li><div className='languages_used_container'>CSS</div></li>
                  <li><div className='languages_used_container'>React</div></li>
                </ul>
              </div>
            </div>
            <div className='resume_container'>
              <a href="https://docs.google.com/document/d/1ChM2u16f4U3MLGuHp-Eb6d5ELqWw0IG0/edit" target='_blank'>
                View Full Résumé
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="arrow" className="arrow_icon">
                  <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className='arrow_icon'><path d="M1 13 13 1M4 1h9v9"></path></g>
                </svg>
              </a>
            </div>
          </div>
          <div id='projects' className='project_section'>
            <div className='project_container'>
              <div className='project_image_container'></div>
              <div className='project_info_container'>
                <h3>ProgressAI</h3>
                <p>Web app for ...</p>
                <ul className='languages_used'>
                  <li>Javascript</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

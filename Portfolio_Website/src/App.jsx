import './App.css'
import ProgressAIImage from './assets/ProgressAI3.png';
import ComingSoonImage from './assets/coming_soon.jpg';
import CapstoneProject from './assets/CapstoneProject.jpg'
import BarbellProject from './assets/BarbellCalculator.png'
import React, { useState } from 'react';

function App() {

  const [isLightMode, setIsLightMode] = useState(false);
  
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  function copyToClipboard(email) {
    navigator.clipboard.writeText(email).then(() => {
      const mailIconCopy = document.querySelector('.mail-icon-copy');
      mailIconCopy.classList.add('clicked');
  
      setTimeout(() => {
        mailIconCopy.classList.remove('clicked');
      }, 1000); // Hide the message after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text to clipboard:', err);
    });
  }
  
  return (
    <>
      <div className={`entire_container ${isLightMode ? 'light-mode' : ''}`}>
        <div className='left_container'>
          <div className='left_container_text'>
            <h1><a href="/">Daniel Bird</a></h1>
            <h2>Fullstack Software Engineer</h2>
            <p>I create seamless, robust, and innovative web solutions from front to back.</p>
            <div className='nav_bar'>
              <a href="#about"><span></span>⎯⎯⎯ About</a>
              <a href="#experience"><span></span>⎯⎯⎯ Experience</a>
              <a href="#projects"><span></span>⎯⎯⎯ Projects</a>
            </div>
          </div>
          <div className='platforms_icon_container'>
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


              {/* <li>
                <a href="mailto:danielbirdwork@gmail.com" target='_blank' rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" id="mail" className="icon">
                    <path fill="currentColor" d="M0,94V26A25.94821,25.94821,0,0,1,26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A26.012,26.012,0,0,1,0,94Z"></path>
                    <path fill="#121212" d="M99,86.2a6.10894,6.10894,0,0,1-3,.8H24a5.83049,5.83049,0,0,1-3-.8l24-24,5.9,5.9A12.219,12.219,0,0,0,60,71.5a12.37426,12.37426,0,0,0,9.1-3.4L75,62.2Zm2.1-2.2-24-24,24-24a6.10893,6.10893,0,0,1,.8,3V81A4.55088,4.55088,0,0,1,101.1,84ZM18.8,84a6.10894,6.10894,0,0,1-.8-3V39a5.83049,5.83049,0,0,1,.8-3l24,24ZM99,33.8,66.9,65.9A9.353,9.353,0,0,1,60,68.5a9.353,9.353,0,0,1-6.9-2.6L21,33.8a6.10894,6.10894,0,0,1,3-.8H96A6.10862,6.10862,0,0,1,99,33.8Z"></path>
                  </svg>
                </a>
              </li> */}

              {/* <li>
                <a href="mailto:danielbirdwork@gmail.com" target='_blank' rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='32' height='32' className='icon'>
                    <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144l256 0c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4 384 336c0 17.7-14.3 32-32 32L96 368c-17.7 0-32-14.3-32-32l0-125.6 136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"/>
                  </svg>
                </a>
              </li> */}

              <li className='mail-icon-copy' onClick={() => copyToClipboard('danielbirdwork@gmail.com')}>
                <div className='icon-wrapper'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icon mail-icon'>
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='icon copy-icon'>
                    <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/>
                  </svg> */}
                </div>
                <span className='copy-message'>Copied to clipboard!</span>
              </li>
              
              {/* <li>
                <a href="mailto:danielbirdwork@gmail.com" target='_blank' rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="32" height="32" viewBox="0 0 50 50">
                    <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
                  </svg>
                </a>
              </li> */}

              {/* <li>
                <a href="mailto:danielbirdwork@gmail.com" target='_blank' rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 122.88 122.88">
                    <path d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Zm4.1,37.59L62,64.26,93.33,37.59ZM27.19,82.48l23.3-23.37-23.3-19V82.48ZM53.06,61.21,29,85.29H93.65l-23-24.08-7.57,6.45h0a1.66,1.66,0,0,1-2.12,0l-7.94-6.48ZM73.2,59.07,95.69,82.66V39.9L73.2,59.07Z"/>
                  </svg>
                </a>
              </li> */}

              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icon' onClick={toggleTheme}>
                  <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className='right_container'>
          <div id='about' className='about_container section'>
            <h2 className='section_header'>About</h2>
            <p>I'm Daniel Bird, a recent graduate with a Bachelor's degree in <b>Computer Science</b>. My passion lies in problem-solving and creating innovative solutions that make people's lives easier.</p>
            <p>Throughout my internships, I have gained valuable experience in developing web applications and exploring the potential of <b>Artificial Intelligence</b> and machine learning. I am particularly excited about how these technologies can shape the future and improve everyday experiences.</p>
            <p>When I'm not coding, I enjoy spending time working towards my <b>fitness goals</b> and with family and friends.</p>
          </div>
          <div id='experience' className='experience_section section'>
            <h2 className='section_header'>Experience</h2>
            <div className='experice_container'>
              <div className='timeline'>JULY — AUG 2024</div>
              <div className='experience_details'>
                <h3>Software Engineer & Artificial Intelligence Intern @ Headstarter</h3>
                <p>Built an accountability web app using React for users to track goals and compete with friends, increasing productivity.</p>
                <p>Developed secure user authentication with Node.js, ensuring safe access to goal-tracking features to protect user data.</p>
                <ul className='languages_used'>
                  <li><div className='languages_used_container'>React</div></li>
                  <li><div className='languages_used_container'>Next.js</div></li>
                  <li><div className='languages_used_container'>Tailwind</div></li>
                  <li><div className='languages_used_container'>JavaScript</div></li>
                  <li><div className='languages_used_container'>Python</div></li>
                </ul>
              </div>
            </div>
            <div className='experice_container'>
              <div className='timeline'>JUNE — AUG 2024</div>
              <div className='experience_details'>
                <h3>Software Engineer Team Lead @ BCAMP</h3>
                <p>Led team of 4 engineers to build a decentralized ticket platform using Mode Network to reduce fees and prevent fraud.</p>
                <p>Designed project architecture using a tech stack of React, Node.js, Python, Solidity, to ensure secure and scalable blockchain ticket transactions.</p>
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
              <div className='timeline'>APRIL — MAY 2024</div>
              <div className='experience_details'>
                <h3>Software Engineer & Data Science Intern @ FENIX.AI</h3>
                <p>Optimized attorney workflow by designing an intuitive UI to display key metrics on client projects and attorney efficiency, increasing productivity for legal professionals.</p>
                <p>Implemented SSO authentication with Auth0, ensuring access to attorney efficiency dashboards, protecting legal data.</p>
                <ul className='languages_used'>
                  <li><div className='languages_used_container'>Javascript</div></li>
                  <li><div className='languages_used_container'>Python</div></li>
                  <li><div className='languages_used_container'>Next.js</div></li>
                  <li><div className='languages_used_container'>HTML</div></li>
                  <li><div className='languages_used_container'>CSS</div></li>
                </ul>
              </div>
            </div>
            <div className='experice_container'>
              <div className='timeline'>JAN — FEB 2024</div>
              <div className='experience_details'>
                <h3>Software Engineer Intern @ BCAMP</h3>
                <p>Developed a Telegram bot using Python, delivering crypto alerts every 10 minutes, improving user decision-making.</p>
                <p>Implemented MySQL to store and retrieve user data for crypto alerts, ensuring secure storage and efficient access.</p>
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
              <a href="https://docs.google.com/document/d/1ChM2u16f4U3MLGuHp-Eb6d5ELqWw0IG0/edit?usp=sharing&ouid=112333732365816330836&rtpof=true&sd=true" target='_blank'>
                View Full Résumé
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="arrow" className="arrow_icon">
                  <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className='arrow_icon'><path d="M1 13 13 1M4 1h9v9"></path></g>
                </svg>
              </a>
            </div>
          </div>
          <div id='projects' className='project_section section'>
            <h2 className='section_header'>Projects</h2>

            <a href="https://progressai.vercel.app/" target='_blank'>
              <div className='project_container'>
                <div className='project_image_container'>
                  <img src={ProgressAIImage} alt="ProgressAI Daniel Bird" />
                </div>
                <div className='project_info_container'>
                  <h3>
                    ProgressAI
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="arrow" className="arrow_icon">
                      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className='arrow_icon'><path d="M1 13 13 1M4 1h9v9"></path></g>
                    </svg>
                  </h3>
                  <p>Built an interactive platform using React.js, Firebase, Firestore, Next.js, and JavaScript for users to design, customize, and save workout programs and log workout data (weight, reps, sets) to track progress toward fitness goals.</p>
                  <ul className='languages_used'>
                    <li><div className='languages_used_container'>React</div></li>
                    <li><div className='languages_used_container'>Next.js</div></li>
                    <li><div className='languages_used_container'>JavaScript</div></li>
                    <li><div className='languages_used_container'>HTML</div></li>
                    <li><div className='languages_used_container'>CSS</div></li>
                    <li><div className='languages_used_container'>Firebase</div></li>
                    <li><div className='languages_used_container'>AI</div></li>
                    <li><div className='languages_used_container'>ML</div></li>
                  </ul>
                </div>
              </div>
            </a>
            <a href="https://colab.research.google.com/drive/1l6k-Ft2QRBPT-By70hZsjrFa6oV9wggb?usp=sharing" target='_blank'>
              <div className='project_container'>
                <div className='project_image_container'>
                  <img src={CapstoneProject} alt="Machine Learning City Recommendation Daniel Bird" />
                </div>
                <div className='project_info_container'>
                  <h3>
                    Machine Learning City Recommendation
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="arrow" className="arrow_icon">
                      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className='arrow_icon'><path d="M1 13 13 1M4 1h9v9"></path></g>
                    </svg>
                  </h3>
                  <p>Built an interactive machine learning project using Python and Logistic Regression that recommends cities to users based on their preferred search criteria.</p>
                  <p><a className='machine_learning_project_pdf' href="https://drive.google.com/file/d/1Pr0a3tdZgCOCEJ13Q_DOK3t_TeUNzRcX/view?usp=sharing" target='blank'>Project instructions and documentation</a></p>
                  <ul className='languages_used'>
                    <li><div className='languages_used_container'>Python</div></li>
                    <li><div className='languages_used_container'>Google Colab</div></li>
                    <li><div className='languages_used_container'>Jupyter Notebook</div></li>
                    <li><div className='languages_used_container'>Machine Learning</div></li>
                    <li><div className='languages_used_container'>Datasets</div></li>
                  </ul>
                </div>
              </div>
            </a>
            <a href="https://barbell-calculator-two.vercel.app/" target='_blank'>
              <div className='project_container'>
                <div className='project_image_container'>
                  <img src={BarbellProject} alt="Barbell Calculator Web Application Daniel Bird" />
                </div>
                <div className='project_info_container'>
                  <h3>
                    Barbell Calculator
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="arrow" className="arrow_icon">
                      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className='arrow_icon'><path d="M1 13 13 1M4 1h9v9"></path></g>
                    </svg>
                  </h3>
                  <p>Developed a web app that visually calculates and displays plates for a desired weight, removing the guesswork between sets.</p>
                  <ul className='languages_used'>
                    <li><div className='languages_used_container'>JavaScript</div></li>
                    <li><div className='languages_used_container'>Next.js</div></li>
                    <li><div className='languages_used_container'>React</div></li>
                    <li><div className='languages_used_container'>HTML</div></li>
                    <li><div className='languages_used_container'>CSS</div></li>
                  </ul>
                </div>
              </div>
            </a>
            {/* <a href="#projects">
              <div className='project_container'>
                <div className='project_image_container'>
                  <img src={ComingSoonImage} alt="Coming Soon Daniel Bird" />
                </div>
                <div className='project_info_container'>
                  <h3>
                    Headstarter AI Project
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="arrow" className="arrow_icon">
                      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className='arrow_icon'><path d="M1 13 13 1M4 1h9v9"></path></g>
                    </svg>
                  </h3>
                  <p>Artificial Intelligence project made during the Headstarter Internship to get 1000 people on our waitlist and generate $1000 in revenue.</p>
                  <ul className='languages_used'>
                    <li><div className='languages_used_container'>React</div></li>
                    <li><div className='languages_used_container'>JavaScript</div></li>
                    <li><div className='languages_used_container'>Python</div></li>
                    <li><div className='languages_used_container'>HTML</div></li>
                    <li><div className='languages_used_container'>CSS</div></li>
                    <li><div className='languages_used_container'>SQL</div></li>
                    <li><div className='languages_used_container'>LLM's</div></li>
                    <li><div className='languages_used_container'>AI</div></li>
                    <li><div className='languages_used_container'>ML</div></li>
                  </ul>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <p>Hi, my name is </p>
        <h1>Andy Nguyen</h1>
        <h2>Software Engineer</h2>
        <p>Hi, my name is Andy and I am a Software Engineer.</p>
        <Image src="/profile.jpg" width="400" height="300" />
      </div>

      <div className={styles.about}>
        <h1 className={styles.title}>About Me</h1>
        <h2>Hi, I'm Andy! 👋</h2>
        <p>
          I am currently a Software Engineer at Microchip Technology and a
          recent graduate from UC Davis (go ags!!!). My primary work is
          full-stack and am currently building and updating our GUI and backend
          code for the SyncServer. I am always looking for new skills to learn
          and want to specialize in backend and build highly scalable
          microservices.
        </p>
        <p>
          When I am not coding, I love to try new foods and espeically try new
          boba drinks! I love watching TV shows, basketball, and movies in my
          free time. I am also interested in tech, financial indepence,
          mechanical keyboards, video games, and board games. You can always
          catch me playing League of Legends on my downtime.
        </p>
        <p>
          Please feel free to reach out to me for anything at{" "}
          <a href="mailto:acnguye@ucdavis.edu">acnguye@ucdavis.edu</a> or
          connecting with me on{" "}
          <a href="https://www.linkedin.com/in/acnguye/">Linkedin</a>!
        </p>
      </div>
      <div className={styles.work}>
        <h1 className={styles.title}>Work Experience</h1>
        <div class={styles.date}>
          <h2>Software Engineer I</h2>
          <h4>Microchip Technology Inc.</h4>
          <h5>Jul 2021 - Present</h5>
          <h5>San Jose, CA</h5>
        </div>
        <div class={styles.date}>
          <h2>Software Engineer Intern</h2>
          <h4>Intel Corporation</h4>
          <h5>Jan 2020 - May 2021</h5>
          <h5>Folsom, CA</h5>
        </div>
        <div class={styles.tasks}>
          <ul>
            <li>
              Automate and design software to validate cells to reduce manual
              errors, increasing overall testing efficiency by 30%.
            </li>
            <li>
              Developed script that parses nightly regression test to compare
              analysis with online Jira list to track new errors.
            </li>
            <li>
              Formulated Jira API library that converts any input to the correct
              Jira type, enabling the creation of a script that automatically
              generates and edits issues in Jira, reducing the need for manual
              creating and editing by 80%.
            </li>
            <li>
              Implemented script that automatically parses data from Design Rule
              Checks (DRC) on a cell when DRC is performed.
            </li>
            <li>
              Leveraged MongoDB to refine and optimize DRC checks, ensuring
              consistent results on different computers.
            </li>
            <li>
              Programmed reports using Pandas for viewers to easily digest and
              understand validation errors.
            </li>
          </ul>
        </div>
        <div class={styles.date}>
          <h2>Student Programmer</h2>
          <h4>LibreTexts</h4>
          <h5>Jul 2019 - Jan 2020</h5>
          <h5>Davis, CA</h5>
        </div>
        <div class={styles.tasks}>
          <ul>
            <li>
              Redesigned and upgraded HTML code for online textbooks to ensure
              material is accessible for 100s of universities.
            </li>
            <li>
              Implemented visual coding elements such as color, size, and font
              to ease readability for students with disabilities.
            </li>
            <li>
              Identified and replaced code to be in line with standard practices
              to streamline site access to student with disabilities.
            </li>
            <li>
              Collaborated with teammates with weekly meetings to assure all new
              textbooks are converted efficiently.
            </li>
            <li>
              Made most textbooks at least 20% more accessible for students.
            </li>
          </ul>
        </div>
        <div class={styles.date}>
          <h2>Assitant Coding Instructor</h2>
          <h4>ThoughtSTEM</h4>
          <h5>Jun 2018 - Sep 2018</h5>
          <h5>San Diego, CA</h5>
        </div>
        <div class={styles.tasks}>
          <ul>
            <li>
              Taught Python and Minecraft moding to students aged 10 to 18 who
              attended a coding summer camp.{" "}
            </li>
            <li>
              Designed Boolean based board game for students to encourage
              participation while emphasizing critical concepts.
            </li>
            <li>
              Mentored students throughout duration of program, highlighting
              communication skills across all age groups.
            </li>
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>Made with ❤️</div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/acnguye/">
            <Image src="/linkedin.png" width="70" height="70" />
          </a>
          <a href="https://github.com/andyong5">
            <Image src="/github.png" width="70" height="70" />
          </a>
          <a href="https://github.com/andyong5">
            <Image src="/instagram.png" width="70" height="70" />
          </a>
          <a href="mailto:acnguye@ucdavis.edu">
            <Image src="/mail.png" width="70" height="70" />
          </a>
        </div>
      </footer>
    </div>
  );
}

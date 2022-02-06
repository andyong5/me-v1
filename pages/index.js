import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Andy Nguyen</h1>
      <h2>Software Engineer</h2>

      <p>
        Hi 👋, my name is Andy and I am a currently a Software Engineer at
        Microchip Technology Inc. working as a full-stack developer. Welcome to
        my page!
      </p>
      <Image src="/profile.jpg" width="300" height="300" />

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
      </div>

      <div class="work">
        <h1>Work Experience</h1>
        <h2>Microchip Technology - FTD</h2>
        <p>hello</p>
        <h2>Software Engineer Intern</h2>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

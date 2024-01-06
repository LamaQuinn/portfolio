import React from 'react';
import styles from "./About.module.css";

const About = () => {
  // Function to add dots and line breaks after each sentence
  const addDotsAndLineBreaks = (text) => {
    return text.split('. ').map((sentence, index, array) => (
      <React.Fragment key={index}>
       <span style={index === 0 ? { color: 'navy', fontSize: '40px', fontFamily: 'Bebas Neue, sans-serif' } : {}}>

          {sentence}
          {index < array.length - 1 && '.'} {/* Add dot if it's not the last sentence */}
        </span>
        <br />
      </React.Fragment>
    ));
  };
  

  return (
    <div className={styles.info}>
      <div className={styles.about_me}>
        {/* Use the function to modify the content */}
        <p className={styles.details}>
          {addDotsAndLineBreaks("Hey! I'm Laman Ismayilova. I'm a Full-Stack Web Developer who is passionate about JavaScript programming language and interested in ReactJS. Have experience in object-oriented programming, developing, testing, debugging code, designing interfaces. Quickly learning new technologies, successfully working in both team and self-directed settings. During my leisure hours prefer to play video/board games, watch anime with my spouse and read some classic literature.")}
        </p>
      </div>
    </div>
  );
}

export default About;

import Image from "next/image";
import classes from "./hero.module.css";

export function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpeg"
          alt="Profile Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Welcome to foo(nomad)</h1>
      <p>Science & Fun Facts with Chatbot Slavo</p>
    </section>
  );
}

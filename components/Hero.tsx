import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/hero.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div>
          <h1 className="text-5xl font-bold">
            Crafting dynamic web experiences with Next.js. - Let&apos;s create
            something remarkable together!
          </h1>
          <p className="py-6">
            Welcome to my portfolio! I&apos;m Ealanisln, a web developer who is
            passionate about creating impactful and dynamic experiences on the
            web. I specialize in React, Next.js, and NodeJS, and I am constantly
            seeking opportunities to enhance my skills and broaden my knowledge.
            <br />
            <br />
            I have hands-on experience working with Supabase, a robust
            open-source alternative to Firebase. I thrive on collaborative
            projects that challenge me to learn and grow, particularly in the
            realm of web development.
            <br />
            If you have a project in mind and you&apos;d like to work with me, please
            don&apos;t hesitate to reach out via ealanisln@me.com or visit my website
            at www.alanis.dev to learn more about me and my work. Let&apos;s create
            something remarkable together!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

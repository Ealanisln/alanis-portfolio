import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/hero.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Crafting dynamic web experiences with Next.js. - Let's create something remarkable together!</h1>
          <p className="py-6">
            Welcome to my portfolio! I'm Ealanisln, a web developer who is
            passionate about creating impactful and dynamic experiences on the
            web. I specialize in React, Next.js, and NodeJS, and I am constantly
            seeking opportunities to enhance my skills and broaden my knowledge.
            <br /><br />
            I have hands-on experience working with Supabase, a robust
            open-source alternative to Firebase. I thrive on collaborative
            projects that challenge me to learn and grow, particularly in the
            realm of web development.
            <br />
            If you have a project in mind and you'd like to work with me, please
            don't hesitate to reach out via ealanisln@me.com or visit my website
            at www.alanis.dev to learn more about me and my work. Let's create
            something remarkable together!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

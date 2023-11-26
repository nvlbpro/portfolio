import React from "react";

function Services() {
  return (
    <section className="services">
      <span className="ancres" id="service"></span>
      <h2 className="services__title">SERVICES</h2>
      <div className="services__content">
        <div className="service__item">
          <div className="service__item__container">
            <div className="service__item__icon">
              <i className="fa-solid fa-code" aria-hidden="true"></i>
            </div>
            <h3 className="service__item__title">Web devlopment</h3>
            <p className="service__item__description">
              Offering cutting-edge web development solutions tailored to your
              unique needs. From front-end design using technologies like React
              and Redux to robust back-end development with Node.js and PHP, we
              create seamless, user-friendly websites.
            </p>
          </div>
        </div>
        <div className="service__item">
          <div className="service__item__container">
            <div className="service__item__icon">
              <i className="fa-solid fa-sliders" aria-hidden="true"></i>
            </div>
            <h3 className="service__item__title">SEO Optimization</h3>
            <p className="service__item__description">
              Elevate your online presence with our comprehensive SEO
              optimization services. We implement proven strategies to enhance
              your website's visibility on search engines, driving organic
              traffic and ensuring your business stands out in the digital
              landscape.
            </p>
          </div>
        </div>
        <div className="service__item">
          <div className="service__item__container">
            <div className="service__item__icon">
              <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
            </div>
            <h3 className="service__item__title">Network Solutions</h3>
            <p className="service__item__description">
              Building secure, efficient, and scalable network infrastructures.
              Whether establishing a new network or enhancing an existing one,
              our expertise in Apache, Debian, and networking technologies
              ensures reliable connectivity and performance.
            </p>
          </div>
        </div>
        <div className="service__item">
          <div className="service__item__container">
            <div className="service__item__icon">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <h3 className="service__item__title">Training</h3>
            <p className="service__item__description">
              Empower your team with our tailored training programs. From
              hands-on workshops in Micropython and Raspberry Pi to
              comprehensive courses on web development technologies like MongoDB
              and React, we equip your team with the skills needed for success.
            </p>
          </div>
        </div>
        <div className="service__item">
          <div className="service__item__container">
            <div className="service__item__icon">
              <i className="fa-solid fa-bug-slash" aria-hidden="true"></i>
            </div>
            <h3 className="service__item__title">Debug</h3>
            <p className="service__item__description">
              Swiftly resolve issues with our expert debugging. Utilizing tools
              like Jira, we analyze code, troubleshoot errors, optimize
              performance. Our goal is to ensure your software operates
              seamlessly, delivering an enhanced user experience.
            </p>
          </div>
        </div>
        <div className="service__item">
          <div className="service__item__container">
            <div className="service__item__icon">
              <i className="fa-solid fa-paintbrush" aria-hidden="true"></i>
            </div>
            <h3 className="service__item__title">Design</h3>
            <p className="service__item__description">
              Transform your ideas into visually stunning realities with our
              design expertise. From creating captivating user interfaces using
              Figma to graphic design with Gimp, we bring creativity and
              functionality together to deliver impactful design solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `<div class="services-container">
    <div class="services-heading content-grid">
      <div class="services-img img"></div>
      <div class="heading-text">
        <h1>Services</h1>
        <h3>Learn more about the services we offer</h3>
      </div>
    </div>
    <div class="frontend-dev content-grid">
      <div class="text-content">
        <h2>CUSTOM FRONTEND DEVELOPMENT</h2>
        <p>
          Our Custom Frontend Development service delivers tailored,
          user-centric web solutions. From design concepts to coding using
          modern frameworks, we create captivating and responsive interfaces.
          Leveraging cutting-edge technologies, we ensure stunning designs that
          perform seamlessly across devices.
        </p>
      </div>
      <div class="frontend-img img"></div>
    </div>

    <div class="interactive-web-design content-grid">
      <div class="interactive-web-img img"></div>

      <div class="text-content">
        <h2>INTERACTIVE WEB DESIGN</h2>
        <p>
          Our Interactive Web Design service is dedicated to crafting engaging
          and dynamic web experiences. We specialize in creating captivating
          designs that incorporate interactive elements and innovative features,
          enhancing user engagement and brand identity. With a focus on dynamic
          animations and interactive functionalities, we elevate websites to
          provide immersive experiences that captivate visitors.
        </p>
      </div>
    </div>

    <div class="mobile-first content-grid">
      <div class="text-content">
        <h2>MOBILE-FIRST DEVELOPMENT</h2>
        <p>
          Our Mobile-First Development ensures websites perform seamlessly
          across all devices, prioritizing exceptional experiences on mobile
          platforms. We specialize in designing responsive sites, guaranteeing
          usability without compromising design or functionality.
        </p>
      </div>
      <div class="mobile-first-img img"></div>
    </div>
  </div>`,
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {}

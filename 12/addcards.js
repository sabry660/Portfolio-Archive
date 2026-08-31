const oM = [
    {
      id: 1,
      name: "Word of mouth",
      description: "A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.",
      image: "Public/Projects/w.w.png",
      tags: ["angular"],
      liveview: "https://wordofmoutheg.com/",
      alt: "Word of mouth",
    },
    {
      id: 2,
      name: "Fluency Sprint",
      description: "Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.",
      image: "Public/Projects/f.s.png",
      tags: ["react", "nestjs", "stripe"],
      liveview: "https://www.fluencysprint.online/",
      alt: "Fluency Sprint",
    },
    {
      id: 3,
      name: "Palestinian Stories",
      description: "A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.",
      image: "Public/Projects/palestine.png",
      tags: ["angular", "python", "django", "aws"],
      liveview: "https://palestinianstories.com/",
      alt: "Palestinian Stories",
    },
    {
      id: 4,
      name: "Catch Recruitment",
      description: "A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.",
      image: "Public/Projects/catch.png",
      tags: ["react", "nextjs", "docker", "springboot"],
      liveview: "https://catchrecruitment.com/",
      alt: "Catch Recruitment",
    },
    {
      id: 5,
      name: "CHUWI",
      description: "A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.",
      image: "Public/Projects/chuwi.png",
      tags: ["angular", "aws", "nodejs", "express"],
      liveview: "https://www.chuwi.com/",
      alt: "CHUWI",
    },
    {
      id: 6,
      name: "Dashboard",
      description: "A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.",
      image: "Public/Projects/dash.png",
      tags: ["angular", "springboot", "ai"],
      liveview: "https://dash1-mauve.vercel.app/",
      alt: "Dashboard",
    },
    {
      id: 7,
      name: "Guest Portal",
      description: "A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.",
      image: "Public/Projects/g.p.png",
      tags: ["angular", "nodejs", "nestjs", "tailwindcss"],
      liveview: "https://luxury-hotel-guest-portal.vercel.app/",
      alt: "Guest Portal",
    },
    {
      id: 8,
      name: "Villa Misk Hotels",
      description: "A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.",
      image: "Public/Projects/villa.png",
      tags: ["react", "typescript", "tailwindcss", "responsive web design"],
      liveview: "https://villamiskhotels.com/",
      alt: "Villa Misk Hotels",
    },
    {
      id: 9,
      name: "Cafe Website",
      description: "A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.",
      image: "Public/Projects/cafe.png",
      tags: ["html", "css", "javascript", "responsive web design"],
      liveview: "https://cafe-virid-eight.vercel.app/",
      alt: "Cafe Website",
    },
    {
      id: 10,
      name: "Clothes Shop",
      description: "A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.",
      image: "Public/Projects/clothes.png",
      tags: ["html", "css", "javascript", "e-commerce", "responsive web design"],
      liveview: "https://clothes-shop-flax.vercel.app/",
      alt: "Clothes Shop",
    },
    {
      id: 11,
      name: "The Daily Drip",
      description: "A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.",
      image: "Public/Projects/daily.png",
      tags: ["angular", "typescript", "responsive web design"],
      liveview: "https://the-daily-drip-caf-website.vercel.app/",
      alt: "The Daily Drip",
    },
    {
      id: 12,
      name: "Voya Travel",
      description: "A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.",
      image: "Public/Projects/voya.png",
      tags: ["html", "css", "javascript", "responsive web design", "gsap"],
      liveview: "https://voya-travel-website.vercel.app/",
      alt: "Voya Travel",
    },
  ];

  const aM = {
    html: '<div class="work-item-tag" style="background: white; border: 1px solid #7C8594; color: #7C8594">HTML</div>',
    css: '<div class="work-item-tag" style="background: white; border: 1px solid #7C8594; color: #7C8594">CSS</div>',
    javascript:
      '<div class="work-item-tag" style="background: #FFB800;">JavaScript</div>',
    react:
      '<div class="work-item-tag" style="background: #21BAEB;">React js</div>',
    angular:
      '<div class="work-item-tag" style="background: #DD0031;">Angular</div>',
    typescript:
      '<div class="work-item-tag" style="background: #3178C6;">TypeScript</div>',
    nodejs:
      '<div class="work-item-tag" style="background: #339933;">Node.js</div>',
    nestjs:
      '<div class="work-item-tag" style="background: #E0234E;">Nest.js</div>',
    nextjs:
      '<div class="work-item-tag" style="background: #000000;">Next.js</div>',
    express:
      '<div class="work-item-tag" style="background: #333;">Express</div>',
    python:
      '<div class="work-item-tag" style="background: #3776AB;">Python</div>',
    django:
      '<div class="work-item-tag" style="background: #092E20;">Django</div>',
    aws:
      '<div class="work-item-tag" style="background: #FF9900;">AWS</div>',
    docker:
      '<div class="work-item-tag" style="background: #2496ED;">Docker</div>',
    springboot:
      '<div class="work-item-tag" style="background: #6DB33F;">Spring Boot</div>',
    stripe:
      '<div class="work-item-tag" style="background: #635BFF;">Stripe</div>',
    tailwindcss:
      '<div class="work-item-tag" style="background: #06B6D4;">Tailwind CSS</div>',
    ai:
      '<div class="work-item-tag" style="background: #10B981;">AI</div>',
    gsap:
      '<div class="work-item-tag" style="background: #88CE02;">GSAP</div>',
    "responsive web design":
      '<div class="work-item-tag" style="background: #F7DF1E;">Responsive Web Design</div>',
    "e-commerce":
      '<div class="work-item-tag" style="background: #8B5CF6;">E-Commerce</div>',
  };
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = aM),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${
            e.alt
          }" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      // Only the Live View button will be rendered if available
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  
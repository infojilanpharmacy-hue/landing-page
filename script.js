// ============================================
// HERO SECTION ANIMATIONS
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // Initial Load Animation
  tl.from("#bg-layer", {
    scale: 1.3,
    duration: 2.5,
    ease: "power2.out"
  })
    .from(
      "#seal",
      {
        scale: 3,
        opacity: 0,
        rotation: -45,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      },
      "-=1.5"
    )
    .from(
      ".hero-sub",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.5"
    )
    .from(
      ".hero-title",
      {
        y: 100,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      },
      "-=0.6"
    )
    .to(
      "#scroll-indicator",
      {
        opacity: 1,
        duration: 1
      },
      "-=0.5"
    );

  // ============================================
  // HERO PARALLAX EFFECT (Mouse Movement)
  // ============================================

  const bgLayer = document.querySelector("#bg-layer");
  const textGroup = document.querySelector("#hero-text-group");
  const fog = document.querySelector("#fog-layer");
  const poem = document.querySelector("#poem");

  document.body.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to(bgLayer, {
      x: x * 20,
      y: y * 20,
      duration: 1,
      ease: "power2.out"
    });

    gsap.to(textGroup, {
      x: x * -15,
      y: y * -15,
      duration: 1,
      ease: "power2.out"
    });

    if (poem) {
      gsap.to(poem, {
        x: x * -10,
        y: y * -25,
        duration: 1.5,
        ease: "power2.out"
      });
    }

    if (fog) {
      gsap.to(fog, {
        x: x * 40,
        duration: 2,
        ease: "power1.out"
      });
    }
  });

  // ============================================
  // CONTENT SECTION PARALLAX SCROLLING
  // ============================================

  gsap.registerPlugin(ScrollTrigger);
  
  const contentImages = document.querySelectorAll(".content-section .img-box");
  
  contentImages.forEach((imgBox, index) => {
    const section = imgBox.closest(".content-section");
    
    ScrollTrigger.create({
      trigger: section,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        gsap.set(imgBox, {
          y: scrollProgress * 100,
          overwrite: "auto"
        });
      }
    });
  });

  // ============================================
  // CUSTOM CURSOR
  // ============================================

  const cursor = document.getElementById("cursor");
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    });

    const hoverables = document.querySelectorAll("a, button");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 2,
          backgroundColor: "rgba(230, 213, 184, 0.2)",
          duration: 0.3
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          duration: 0.3
        });
      });
    });
  }
});


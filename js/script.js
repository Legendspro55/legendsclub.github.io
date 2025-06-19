document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero p", { opacity: 0, y: 20, delay: 0.3, duration: 1 });
  gsap.from(".cta", { opacity: 0, scale: 0.8, delay: 0.6, duration: 0.5 });
  gsap.utils.toArray(".benefit, .plan, .testimonial, .steps li").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  });
});

const config = {
    title: "Nguyen Van Minh | Full-Stack Developer",
    description: {
      long: "Explore the portfolio of Nguyen Van Minh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
      short:
        "Discover the portfolio of Nguyen Van Minh, a full-stack developer creating interactive web experiences and innovative projects.",
    },
    keywords: [
      "Nguyen Van Minh",
      "portfolio",
      "full-stack developer",
      "creative technologist",
      "web development",
      "3D animations",
      "interactive websites",
      "Coding Ducks",
      "The Booking Desk",
      "Ghostchat",
      "web design",
      "GSAP",
      "React",
      "Next.js",
      "Spline",
      "Framer Motion",
    ],
    author: "Nguyen Van Minh",
    email: "nvminh162@gmail.com",
    site: "https://nguyenvanminh.com",
  
    // for github stars button
    githubUsername: "nvminh162",
    githubRepo: "nguyenvanminh-portfolio-web",
  
    get ogImg() {
      return this.site + "/assets/seo/og-image.png";
    },
    social: {
      twitter: "https://x.com/nvminh162",
      linkedin: "https://www.linkedin.com/in/nvminh162/",
      instagram: "https://www.instagram.com/nvminh162",
      facebook: "https://www.facebook.com/nvminh162/",
      github: "https://github.com/nvminh162",
    },
  };
  export { config };
  
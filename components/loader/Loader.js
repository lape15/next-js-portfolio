import { useEffect } from "react";
import styles from "./loader.module.css";
import { gsap, TimelineLite } from "gsap";

const Loader = () => {
  let tl = gsap.timeline();
  useEffect(() => {
    tl.from(".move_first", {
      duration: 1,
      x: -170,
      opacity: 0,
      ease: "elastic(1, 0.3)",
      yoyo: true,
      autoAlpha: 1,
      attr: {
        "stroke-dashoffset": 350,
      },
    })
      .to(".move_first", {
        duration: 0.7,
        x: -10,
        y: 40,
        opacity: 1,
        fill: "#fff",
        stroke: "#B89D87",
        ease: "power4.inOut",
        attr: {
          "stroke-dashoffset": 0,
        },
        yoyo: true,
        autoAlpha: 1,
      })
      .from(".name", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".name", {
        opacity: 1,
        y: 40,
        duration: 0.2,
        opacity: 2,
        ease: "power4.inOut",
        fill: "#fff",
        transformOrigin: "center",
      })
      .from(".pee", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".pee", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".ee", {
        opacity: 0,

        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".ee", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".hee", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".hee", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".kee", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".kee", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".iee", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".iee", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".nee", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".nee", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".tee", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".tee", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".han", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".han", {
        y: 40,
        opacity: 1,
        duration: 0.2,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".heen", {
        opacity: 0,
        // x: -1550,
        y: -30,
        duration: 1,
        opacity: 0,
        ease: "power4.inOut",
      })
      .to(".heen", {
        y: 40,
        opacity: 1,
        duration: 0.8,
        transformOrigin: "center",
        ease: "power4.inOut",
        fill: "#fff",
      })
      .from(".headers", {
        y: 40,
        opacity: 0,
        duration: 0.4,
        stagger: {
          amount: 30,
        },
        // ease: "back(1.4)",
      })
      .to(".headers", {
        y: 30,
        opacity: 1,
        duration: 0.7,
        transformOrigin: "center",
        ease: "back(1.4)",
      })
      .to(".headers", {
        backgroundClip: "text",
        webkitTextFillColor: "transparent",
        color: "#FFF",
        duration: 2,
        y: 10,
        scale: 2,
        stagger: {
          amount: 30,
        },
      });
  });
  return (
    <div className={`${styles.other_part} `}>
      <svg
        width="803"
        height="270"
        border="2px solid red"
        viewBox="0 0 803 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.small}
      >
        <path
          d="M64.776 88.496H80.904V98H52.464V47.456H64.776V88.496Z"
          fill="#B89D87"
          className={`move_first`}
        />

        <path
          d="M134.928 89.072H116.064L113.04 98H100.152L118.44 47.456H132.696L150.984 98H137.952L134.928 89.072ZM131.76 79.568L125.496 61.064L119.304 79.568H131.76Z"
          fill="#B89D87"
          className={`name`}
        />

        <path
          d="M200.984 63.728C200.984 66.656 200.312 69.344 198.968 71.792C197.624 74.192 195.56 76.136 192.776 77.624C189.992 79.112 186.536 79.856 182.408 79.856H174.776V98H162.464V47.456H182.408C186.44 47.456 189.848 48.152 192.632 49.544C195.416 50.936 197.504 52.856 198.896 55.304C200.288 57.752 200.984 60.56 200.984 63.728ZM181.472 70.064C183.824 70.064 185.576 69.512 186.728 68.408C187.88 67.304 188.456 65.744 188.456 63.728C188.456 61.712 187.88 60.152 186.728 59.048C185.576 57.944 183.824 57.392 181.472 57.392H174.776V70.064H181.472Z"
          fill="#B89D87"
          className={`pee`}
        />
        <path
          d="M234.776 57.32V67.544H251.264V77.048H234.776V88.136H253.424V98H222.464V47.456H253.424V57.32H234.776Z"
          fill="#B89D87"
          className={`ee`}
        />

        <path
          d="M409.928 89.072H391.064L388.04 98H375.152L393.44 47.456H407.696L425.984 98H412.952L409.928 89.072ZM406.76 79.568L400.496 61.064L394.304 79.568H406.76Z"
          fill="#B89D87"
          className={`hee`}
        />

        <path
          d="M472.768 98L455.776 75.68V98H443.464V47.456H455.776V69.632L472.624 47.456H487.096L467.512 72.224L487.816 98H472.768Z"
          fill="#B89D87"
          className={`kee`}
        />

        <path
          d="M522.776 47.456V98H510.464V47.456H522.776Z"
          fill="#B89D87"
          className={`iee`}
        />
        <path
          d="M595.68 98H583.368L562.776 66.824V98H550.464V47.456H562.776L583.368 78.776V47.456H595.68V98Z"
          fill="#B89D87"
          className={`nee`}
        />
        <path
          d="M653.824 47.456V57.32H640.432V98H628.12V57.32H614.728V47.456H653.824Z"
          fill="#B89D87"
          className={`tee`}
        />
        <path
          d="M691.928 89.072H673.064L670.04 98H657.152L675.44 47.456H689.696L707.984 98H694.952L691.928 89.072ZM688.76 79.568L682.496 61.064L676.304 79.568H688.76Z"
          fill="#B89D87"
          className={`han`}
        />
        <path
          d="M778 98H763.841L740.159 66.5427V98H726V47H740.159L763.841 78.6026V47H778V98Z"
          fill="#B89D87"
          className={`heen`}
        />
      </svg>
      <h2 className={`headers ${styles.role}`}>Frontend Developer</h2>
    </div>
  );
};

export default Loader;

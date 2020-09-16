import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.con_projecs}>
      <h3>Some of my Projects</h3>
      <div className={styles.projects_holder}>
        <div className={styles.project_item}>
          <div className={styles.project_con}>
            <img
              src="/images/projects/budgetit.png"
              alt="budget-app"
              className={styles.project_img}
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>BudgetIt</h3>
            <p className={styles.deets}>A budgeting app</p>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Live
              </a>
            </button>
          </div>
        </div>

        <div className={styles.project_item}>
          <div className={styles.project_con}>
            <img
              src="/images/projects/grader.png"
              alt="grader-app"
              className={styles.project_img}
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>Grader</h3>
            <p className={styles.deets}>A CGPA calculator</p>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Live
              </a>
            </button>
          </div>
        </div>
        <div className={styles.project_item}>
          <div className={styles.project_con}>
            <img
              src="/images/projects/shop-app.png"
              alt="Shopp-app"
              className={styles.project_img}
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>Crow-clothings</h3>
            <p className={styles.deets}>A CGPA calculator</p>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Live
              </a>
            </button>
            <p className={styles.deets}>An Ecommerce app </p>
          </div>
        </div>

        <div className={styles.project_item}>
          <div className={styles.project_con}>
            <img
              src="/images/projects/taxmingo.png"
              alt="Shopp-app"
              className={styles.project_img}
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>Grader</h3>
            <p className={styles.deets}>A CGPA calculator</p>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Taxmingo
              </a>
            </button>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Live
              </a>
            </button>
            <p className={styles.deets}>A tax consulting app </p>
          </div>
        </div>

        <div className={styles.project_item}>
          <div className={styles.project_con}>
            <img
              src="/images/projects/memory-game.png"
              alt="memory"
              className={styles.project_img}
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>Memory-game</h3>

            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.link}
                title="Twitter"
                target="_blank"
              >
                Live
              </a>
            </button>
            <p className={styles.deets}>A card memory game </p>
          </div>
        </div>
        <div className={styles.project_item}>
          <div className={styles.project_con}>
            <img
              src="/images/projects/Covid.png"
              alt="covid-app"
              className={styles.project_img}
            />
          </div>
          <div className={styles.details}>
            <p className={styles.deets}>A corona virus tracker </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.con_projecs} id="projects">
      <h3 className={styles.heading}>Few past projects</h3>
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
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://github.com/lape15/budget-app"
                className={styles.white}
                title="Git"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://budgetit.netlify.app/"
                className={styles.white}
                title="Live"
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
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://github.com/lape15/gpa-calculator"
                className={styles.white}
                title="Github"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://gpae-calc.netlify.app/"
                className={styles.white}
                title="Live"
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
            <h3 className={styles.title}>Crown-clothings</h3>
            <p className={styles.deets}>An e-commerce application</p>
            <button
              className={styles.project_btn}
              className={styles.project_btn}
            >
              {" "}
              <a
                href="https://github.com/lape15/shop-redux"
                className={styles.white}
                title="Github"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://shopp-app.netlify.app/"
                className={styles.white}
                title="Live"
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
            <h3 className={styles.title}>Taxmingo</h3>
            <p className={styles.deets}>A tax-computation app</p>

            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://www.twitter.com/lappiey"
                className={styles.white}
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
            <p className={styles.deets}>A card memory game </p>
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://github.com/lape15/card-memory-game"
                className={styles.white}
                title="Github"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://card-memory-gamme.netlify.app/"
                className={styles.white}
                title="Live"
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
              src="/images/projects/Covid.png"
              alt="covid-app"
              className={styles.project_img}
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>Covida</h3>
            <p className={styles.deets}>A corona virus tracker </p>

            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://github.com/lape15/SCAMP-Assesment"
                className={styles.white}
                title="Github"
                target="_blank"
              >
                Github
              </a>
            </button>
            <button className={styles.project_btn}>
              {" "}
              <a
                href="https://covids19-updates.netlify.app/"
                className={styles.white}
                title="Live"
                target="_blank"
              >
                Live
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

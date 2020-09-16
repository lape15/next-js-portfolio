import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.con_projecs}>
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
            <p className={styles.deets}>A budgeting app</p>
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
            <p className={styles.deets}>A CGPA calculator</p>
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

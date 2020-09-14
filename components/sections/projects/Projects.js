import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.con_projecs}>
      All projects go here <p>After esthing</p>
      <div className={styles.projects_holder}>
        <div>
          <div className={styles.project_con}>
            <img
              src="/images/projects/budgetit.png"
              alt="budget-app"
              className={styles.project_img}
            />
          </div>
          <div>
            <p>A budgeting app</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

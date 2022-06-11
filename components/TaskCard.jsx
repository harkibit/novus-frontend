import styles from "../styles/Home.module.css";

export default function TaskCard(props) {
  const { title, tags } = props;
  return (
    <div className={styles.taskCardContainer}>
      <h3 className={styles.taskCard_title}>{title}</h3>
      <div className={styles.taskCard__tags}>
        {tags?.map((tag) => (
          <div
            // style={{ backgroundColor: tag.bg, color: tag.color }}
            className={`${styles.taskCard__tag} ${"taskCard__tag-".concat(
              tag.bg
            )}`}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}

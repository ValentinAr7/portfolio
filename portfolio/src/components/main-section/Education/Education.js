import React, { useState } from "react";
import styles from "./education.module.css";

const educationData = [
  {
    title: "Ulster University ",
    type: "Bachelors degree, Computer Science, First Class (93%)",
    town: "Belfast, Northern Ireland (2019 - 2022)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mauris eu quam efficitur, in eleifend eros vestibulum. Aenean auctor non tortor at lobortis. Nulla facilisi. Vestibulum et nunc sed ex dignissim tempor. In vestibulum quam eu quam varius, in vehicula tellus fermentum. Nullam non augue nec ex facilisis auctor. Sed ac risus tincidunt, egestas quam non, laoreet enim. In in augue et lorem commodo vehicula.",
  },
  {
    title: "Soft Uni",
    type: "Full JavaScript Path",
    town: "Sofia, Bulgaria, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mauris eu quam efficitur, in eleifend eros vestibulum. Aenean auctor non tortor at lobortis. Nulla facilisi. Vestibulum et nunc sed ex dignissim tempor. In vestibulum quam eu quam varius, in vehicula tellus fermentum. Nullam non augue nec ex facilisis auctor. Sed ac risus tincidunt, egestas quam non, laoreet enim. In in augue et lorem commodo vehicula.",
  },
  {
    title: "South West College",
    type: "Level 1 to 5, Computer Science, Triple Distinction (97%)",
    town: "Enniskillen, Northern Ireland (2016 - 2019)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mauris eu quam efficitur, in eleifend eros vestibulum. Aenean auctor non tortor at lobortis. Nulla facilisi. Vestibulum et nunc sed ex dignissim tempor. In vestibulum quam eu quam varius, in vehicula tellus fermentum. Nullam non augue nec ex facilisis auctor. Sed ac risus tincidunt, egestas quam non, laoreet enim. In in augue et lorem commodo vehicula.",
  },
];

const Education = () => {
  const [expandedStates, setExpandedStates] = useState(
    educationData.map(() => false)
  );

  const toggleDescription = (index) => {
    const updatedExpandedStates = [...expandedStates];
    updatedExpandedStates[index] = !updatedExpandedStates[index];
    setExpandedStates(updatedExpandedStates);
  };

  const cuttedDescription = (input, length) => {
    return input.length > length ? (
      <div>{`${input.substring(0, length)}...`}</div>
    ) : (
      input
    );
  };

  const timelineElements = educationData.map((data, index) => (
    <div
      key={index}
      className={`${styles.container} ${
        index % 2 === 0 ? styles.left : styles.right
      }`}
    >
      <div className={styles.content}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.town}>{data.town}</p>
        <p className={styles.type}>{data.type}</p>
        <div className={styles.containerContent}>
          <p>
            {expandedStates[index]
              ? data.content
              : cuttedDescription(data.content, 150)}
          </p>
          {data.content.length > 150 && (
            <button
              className={styles.expansionBtn}
              onClick={() => toggleDescription(index)}
            >
              {expandedStates[index] ? "Hide" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </div>
  ));

  return <div className={styles.timeline}>{timelineElements}</div>;
};

export default Education;

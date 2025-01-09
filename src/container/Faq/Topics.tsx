"use client";
import React, { useState } from "react";
import CustomButton from "@/src/components/Button";
import { Box } from "@mui/material";
import { allTopics } from "../../const/allTopics";

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);

  const handleTopicClick = (index: number) => {
    setSelectedTopic(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      {allTopics.map((topic, index) => (
        <CustomButton
          key={index}
          borderRadius="8px"
          variant={selectedTopic === index ? "red" : "topic"}
          onClick={() => handleTopicClick(index)}
        >
          {topic.title}
        </CustomButton>
      ))}
    </Box>
  );
};

export default Topics;

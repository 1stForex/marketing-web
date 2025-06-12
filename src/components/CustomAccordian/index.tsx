"use client";

import React from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

interface CustomAccordianProps {
  title: string;
  summary: string;
  subSummary?: string;
  summaryPoints?: string[];
  summaryPointsOrdered?: boolean;
  extra?: { description: string; points: string[] };
  isExpanded?: boolean;
}

const CustomAccordian = ({
  title,
  summary,
  subSummary,
  summaryPoints,
  summaryPointsOrdered = false,
  extra,
  isExpanded,
}: CustomAccordianProps) => {
  const [expanded, setExpanded] = React.useState(isExpanded ? true : false);

  const handleChange = (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{
          padding: "17px 20px 17px 20px",
          borderRadius: "16px",
          background: "#FFF",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 28px 0px",
          height: "auto",
          "&:last-of-type": {
            borderRadius: "16px",
          },

          "@media (max-width: 576px)": {
            padding: "17px 10px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: "pointer",
            userSelect: "none",
            minHeight: "24px",
            transition:
              "min-height 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            "& .MuiAccordionSummary-content": {
              margin: "0 !important",
            },
            "&.Mui-expanded": {
              minHeight: "24px",
              "& > .MuiAccordionSummary-content": {
                margin: "0",
              },
            },
            "&.MuiSvgIcon-root": {
              color: "#111111",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#333",
              lineHeight: "120%",
              letterSpacing: "-0.48px",

              "@media (max-width: 576px)": {
                fontSize: "18px",
                letterSpacing: "-0.36px",
              },
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", my: "12px" }}
        />
        <AccordionDetails
          sx={{
            padding: "12px 0 0 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              color: "#000",
              lineHeight: "145%",

              "@media (max-width: 576px)": {
                fontSize: "12px",
              },
            }}
          >
            {summary}
          </Typography>
          {summaryPoints && (
            <List
              sx={{
                padding: 0,
                margin: 0,
                listStyleType: summaryPointsOrdered ? "decimal" : "disc",
                pl: 2,
              }}
            >
              {summaryPoints.map((point, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "list-item", padding: "0" }}
                >
                  <ListItemText
                    primary={point}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "#000",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          )}
          {extra && (
            <>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#000",
                  lineHeight: "145%",

                  "@media (max-width: 576px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {extra.description}
              </Typography>
              <List
                sx={{
                  padding: 0,
                  margin: 0,
                  listStyleType: "disc",
                  pl: 2,
                }}
              >
                {extra.points.map((point, index) => (
                  <ListItem
                    key={index}
                    sx={{ display: "list-item", padding: "0" }}
                  >
                    <ListItemText
                      primary={point}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#000",
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )}
          {subSummary && (
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#000",
                lineHeight: "145%",

                "@media (max-width: 576px)": {
                  fontSize: "12px",
                },
              }}
            >
              {subSummary}
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordian;

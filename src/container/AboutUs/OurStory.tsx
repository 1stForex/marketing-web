"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Bull from "@/src/assets/images/Bull.png";
import { paragraphs } from "@/src/const/aboutUsStory";

const OurStory = () => {
  return (
    <Box
      sx={{
        padding: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",

        "@media (max-width: 992px)": {
          justifyContent: "center",
          alignItems: "center",
        },

        "@media (max-width:768px)": {
          padding: "32px",
        },

        "@media (max-width:576px)": {
          padding: "32px 16px",
        },
      }}
    >
      <Box sx={{ mb: "24px" }}>
        <Badge title="Our Story" />
      </Box>

      <Typography
        sx={{
          mb: "15px",
          color: "var(--Grey-900, #333)",
          textAlign: "center",

          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "100%",
          letterSpacing: "-1.92px",

          "@media (max-width: 768px)": {
            fontSize: "40px",
            letterSpacing: "-1.28px",
          },
          "@media (max-width: 576px)": {
            fontSize: "32px",
            letterSpacing: "-0.64px",
          },
        }}
      >
        A Legacy of Excellence
      </Typography>

      <Typography
        sx={{
          mb: "24px",
          maxWidth: "606px",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "120%",
          letterSpacing: "-0.48px",

          "@media (max-width: 992px)": {
            textAlign: "center",
          },

          "@media (max-width: 768px)": {
            fontSize: "20px",
          },

          "@media (max-width: 576px)": {
            fontSize: "16px",
          },
        }}
      >
        For more than two decades, 1st Forex Trading Academy has been synonymous
        with innovation and expertise. Our journey began with a simple mission:
        to provide traders with the tools, knowledge, and community they need to
        succeed. Over the years, we’ve refined and expanded our offerings to
        include: 
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",

          "@media (max-width: 992px)": {
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "627px",
            height: "408px",
            overflow: "hidden",

            "@media (max-width: 992px)": {
              maxWidth: "100%",
            },
          }}
        >
          <Box
            sx={{
              height: "408px",
              overflowY: "auto",
              position: "relative",
              paddingLeft: "48px",
              "@media (max-width: 992px)": {
                paddingLeft: "32px",
              },
              "@media (max-width: 576px)": {
                paddingLeft: "16px",
              },
              "&::-webkit-scrollbar": {
                width: "8px",
                background: "transparent",
              },
              "&::-webkit-scrollbar-track": {
                background: "var(--Grey-900, #333)",
                borderRadius: "32px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "var(--primary-400-base, #F30)",
                borderRadius: "32px",
              },
              direction: "rtl",
              "& > *": {
                direction: "ltr",
              },
            }}
          >
            <Box
              sx={{
                my: "65px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",

                "@media (max-width: 768px)": {
                  gap: "30px",
                },

                "@media (max-width: 576px)": {
                  gap: "30px",
                },
              }}
            >
              {paragraphs.map((item, index) => {
                return (
                  <Box key={index}>
                    <Typography
                      sx={{
                        color: "var(--Grey-900, #333)",
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "120%",
                        letterSpacing: "-0.48px",
                        mb: "16px",

                        "@media (max-width: 576px)": {
                          fontSize: "20px",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                    {item.description && (
                      <Typography
                        sx={{
                          color: "var(--Shade-Black, #000)",
                          fontSize: "20px",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.4px",
                          marginBottom: "15px",
                          "@media (max-width: 992px)": {
                            fontSize: "16px",
                          },
                          "@media (max-width: 576px)": {
                            fontSize: "14px",
                          },
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {item.points.length > 0 && (
                        <Box
                          component="ul"
                          sx={{
                            listStyleType: "disc",
                            paddingLeft: "40px",
                            "@media (max-width: 768px)": {
                              paddingLeft: "30px",
                            },

                            "@media (max-width: 576px)": {
                              paddingLeft: "20px",
                            },
                            "& li": {
                              marginBottom: "24px",
                              color: "var(--Shade-Black, #000)",
                              fontSize: "20px",
                              fontWeight: 400,
                              lineHeight: "120%",
                              letterSpacing: "-0.4px",
                              "@media (max-width: 992px)": {
                                fontSize: "16px",
                              },
                              "@media (max-width: 576px)": {
                                fontSize: "14px",
                              },
                              "&::marker": {
                                fontSize: "16px",
                              },
                            },
                          }}
                        >
                          {item.points.map((paragraph, index) => (
                            <Box component="li" key={index}>
                              {paragraph}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: "8px",
              right: 0,
              height: "120px",
              background:
                "linear-gradient(to top, var(--Grey-50, #F9FAFB), transparent)",
              pointerEvents: "none",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "35%",
            aspectRatio: "1",
            "@media (max-width: 992px)": {
              width: "50%",
            },
            "@media (max-width: 576px)": {
              width: "100%",
            },
          }}
        >
          <Image
            src={Bull}
            alt="Bull"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;

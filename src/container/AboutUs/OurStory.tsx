"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Bull from "@/src/assets/images/Bull.png";

const OurStory = () => {
  const paragraphs = [
    {
      label: "Comprehensive Education",
      points: [
        "From online courses to in-person seminars, our curriculum caters to traders of all levels.",
        "Beginners build a strong foundation with essential concepts, while advanced traders gain access to professional strategies like our copyrighted Breakout System, meticulously backtested for success.",
        "With over 1,000 happy students, our academy remains one of the top-rated in the world.",
      ],
    },
    {
      label: "State-of-the-Art Technology",
      points: [
        "We lead the industry with innovative tools powered by AI technology, including automated bots and AI-driven signals.",
        "Our mobile app and user-friendly website provide seamless access to these tools, ensuring traders can make informed and profitable decisions.",
      ],
    },
    {
      label: "Our Team: Expertise Meets Passion",
      description:
        "Behind 1st Forex is a dynamic and diverse team of forex veterans, successful young traders, and AI specialists. This unique blend of experience and innovation allows us to stay ahead of market trends and deliver unmatched value to our community.",
      points: [
        "Forex Veterans: Decades of trading expertise provide the foundation for our education and strategies.",
        "Young Innovators: Fresh perspectives and modern trading techniques keep us at the cutting edge.",
        "AI Specialists: Advanced algorithms and data-driven insights enhance our trading tools, making them smarter and more effective.",
        "Top-Tier Support Team: Our experienced and dedicated professionals work tirelessly to ensure a seamless experience for every trader in our community.",
      ],
    },
  ];

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
          padding: "38px 0",
        },

        "@media (max-width:576px)": {
          padding: "28px 0",
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
            fontSize: "38px",
          },

          "@media (max-width: 576px)": {
            fontSize: "28px",
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
            gap: "21px",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "627px",
            height: "408px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "408px",
              overflowY: "auto",
              position: "relative",
              paddingLeft: "48px",
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

              "@media (max-width: 768px)": {
                paddingLeft: "38px",
              },

              "@media (max-width: 576px)": {
                paddingLeft: "28px",
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
                      mt: "50px",
                      mb: "20px",
                      "@media (max-width: 768px)": {
                        mt: "30px",
                      },
                      "@media (max-width: 576px)": {
                        mt: "20px",
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
                          lineHeight: "145%",
                          letterSpacing: "0",
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
                      gap: "24px",
                      mb: "100px",

                      "@media (max-width: 992px)": {
                        gap: "20px",
                        mb: "80px",
                      },

                      "@media (max-width: 768px)": {
                        gap: "18px",
                        mb: "60px",
                      },

                      "@media (max-width: 576px)": {
                        gap: "16px",
                        mb: "40px",
                      },
                    }}
                  >
                    {item.points.length > 0 && (
                      <Box
                        component="ul"
                        sx={{
                          listStyleType: "disc",
                          paddingLeft: "40px",
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
                              lineHeight: "145%",
                              letterSpacing: "0",
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
            maxWidth: "408px",
            width: "100%",
            aspectRatio: "1",
            "@media (max-width: 768px)": {
              maxWidth: "350px",
            },
          }}
        >
          <Image
            src={Bull}
            alt="Bull"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;

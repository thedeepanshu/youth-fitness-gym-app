import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgColor="#FFF3F4">
    <Stack
      gap="20px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      <Typography
        variant="h1"
        sx={{ fontSize: { lg: "45px", xs: "30px" } }}
        fontFamily="Alegreya"
        fontWeight="400"
        color="#3A1212"
        textAlign="center"
      >
        Youth Fitness
      </Typography>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "20px", xs: "15px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by DevDee
    </Typography>
  </Box>
);

export default Footer;

// 3A1212

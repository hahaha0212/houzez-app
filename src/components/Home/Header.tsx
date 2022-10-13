import styled from "@emotion/styled";
import { Breadcrumbs, Button, Container, Grid, Link } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import Image from "next/image";
import LogoImg from "../../assets/logo/logo_white.png";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";
import MapIcon from "@mui/icons-material/Map";
import { useRouter } from "next/router";

const {
  palette: {
    primary: { main: mainP, dark: darkP },
    secondary: { light: lightS, dark: darkS, contrastText: contrastTextS }
  }
} = theme;

const HeaderContainer = styled(Container)({
  width: "1050px",
  height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const HeaderGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const HeaderLink = styled(Link)({
  height: "90px",
  display: "flex",
  alignItems: "center",
  color: contrastTextS,
  margin: "0 20px",
  gap: "20px",
  fontWeight: "700"
});

const HeaderButton = styled(Button)({
  width: "95px",
  height: "50px",
  marginTop: "10px",
  margin: "0 10px",
  letterSpacing: "0.05rem"
});

const HeaderButtonSignIn = styled(HeaderButton)({
  color: contrastTextS,
  "&:hover": {
    borderColor: darkS,
    backgroundColor: lightS,
    color: mainP
  }
});

const HeaderButtonSignUp = styled(HeaderButton)({
  backgroundColor: mainP,
  "&:hover": {
    backgroundColor: darkP
  }
});

const Header = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Grid container spacing={2}>
        <HeaderGrid item xs={3}>
          <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
        </HeaderGrid>

        <HeaderGrid item xs={6}>
          <Breadcrumbs separator="">
            <HeaderLink href="/">
              <HomeIcon />
              Home
            </HeaderLink>
            <HeaderLink href="/">
              <SegmentIcon />
              List
            </HeaderLink>
            <HeaderLink href="/">
              <MapIcon />
              Map
            </HeaderLink>
          </Breadcrumbs>
        </HeaderGrid>

        <HeaderGrid item xs={3}>
          <HeaderButtonSignIn variant="text" onClick={() => router.push("/signin")}>
            Sign in
          </HeaderButtonSignIn>
          <HeaderButtonSignUp variant="contained" onClick={() => router.push("/signup")}>
            Sign Up
          </HeaderButtonSignUp>
        </HeaderGrid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;

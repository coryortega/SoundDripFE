import React from "react";
import styled from "styled-components";
import Button from "./dashboard/element-styles/AuthButton.js";
import MobileNav from './dashboard/element-styles/MobileNav.js'

import "../views/styles/about.css";
import HomepageNav from "./HomepageNav.js"
import AboutImage from "../assets/hiw.png";
import ChartImage from "../assets/chart-image.svg";
import SpotifyImage from "../assets/spotify-image.svg";
import AboutImageMobile from "../assets/mobileWorks.svg";
import SongImage from "../assets/song-image.svg";
import "../App.css";
import MusicLogo from "../assets/sounddrip.svg";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "256aebf9b04a4f5480a757f770864028"; // testing ENV

const redirectUri = process.env.REACT_APP_REDIRECT_URL;

const HomepageNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 5%;
  padding-top: 2%;
  margin-bottom: 2%;
  height: 60px;
  width: 550px;
  color: #9da4af;
  font-size: 19px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const scopes = [
  "streaming",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-read",
  "user-library-modify",
  "user-modify-playback-state",
  "user-read-email",
  "user-read-private",
  "playlist-modify-public",
  "playlist-modify-private"
];

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3136px;

  @media (max-width: 576px) {
    height: 1800px;
  }
`;

const Header = styled.h2`
  font-size: 48px;
  width: 900px;
  margin: 5%;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 21px;
  }
`;

const SecondaryHeader = styled.h4`
  font-size: 24px;
  margin-bottom: 2%;

  @media (max-width: 576px) {
    font-size: 18px;
    text-align: center;
  }
`;

const Sentence = styled.p`
  font-size: 20px;
  color: white;
  opacity: 0.75;

  @media (max-width: 576px) {
    font-size: 13px;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  margin-left: 25%;
  margin-right: 25%;
  height: 1500px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 30% 30%;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10%;
    padding: 0%;
    height: 1500px;
  }

`;

// margin-left: 5%;
// margin-right: 5%;
// margin-top: 30px;
// grid-template-columns: 1fr;
// grid-template-rows: 20% 20% 20% 20% 20% 20%
// height: 1800px;

const InnerGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2%;
  padding: 10%;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    padding: 0%;
  }
`;
const InnerGridReverse = styled.div`
  
display: flex;
justify-content: center;
flex-direction: column;
margin: 2%;
padding: 10%;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #151619;
  height: 66px;
  width: 100%;
  font-size: 18px;
  position: relative;
  bottom: 0;
  margin-top: 10%;
`;

const NavbarLinks = styled.a`
  text-decoration: none;
  color: #9da4af;
  font-size: 20px;

  &:hover {
    color: white;
  }
`;

const About = () => (
  <AboutContainer>
    <div className="mobileNavWrap">
      <MobileNav />
    </div>
    <HomepageNavbar>
    <a href="/">
          <img src={MusicLogo} />
        </a>
        <NavbarLinks href="/about">How it works?</NavbarLinks>
        <NavbarLinks href="/team">Team</NavbarLinks>
        <NavbarLinks href="https://github.com/orgs/Lambda-School-Labs/teams/labs-20-music-meteorologist/repositories">
          Github
        </NavbarLinks>
    </HomepageNavbar>
    <div className='about-image'>
      <img className="desktop-about" src={AboutImage} />
      <img className="mobile-about" src={AboutImageMobile} />
    </div>
    <div className='header-container'>
      <Header>Sit back while we create a playlist of songs you'll love.</Header>
    </div>
    <Grid>
      <InnerGrid>
        <SecondaryHeader>
          Songs picked just for your music taste.
        </SecondaryHeader>
        <Sentence style={{ zIndex: "-1" }}>
          We’ll put together a playlist for you based on the musical traits of
          the songs you like.
        </Sentence>
      </InnerGrid>
      <InnerGrid>
        <img className="about-images" src={ChartImage} />
      </InnerGrid>
      <InnerGridReverse>
        <img className="about-images" src={SpotifyImage} />
      </InnerGridReverse>
      <InnerGridReverse>
        <SecondaryHeader>
          Our prediction model
          </SecondaryHeader>
        <Sentence style={{ zIndex: "-1" }}>
        By analyzing your Spotify listening history we will reveal some hidden treasures.
          </Sentence>
      </InnerGridReverse>
      <div className="reverse">
        <InnerGrid>
          <img className="about-images" src={SpotifyImage} />
        </InnerGrid>
        <InnerGrid>
          <SecondaryHeader>
            Our prediction model
          </SecondaryHeader>
          <Sentence style={{ zIndex: "-1" }}>
          By analyzing your Spotify listening history we will reveal some hidden treasures.
          </Sentence>
        </InnerGrid>
      </div>
      <InnerGrid>
        <SecondaryHeader>Listen and enjoy!</SecondaryHeader>
        <Sentence style={{ zIndex: "-1" }}>
        Add the songs as a playlist to your Spotify account or listen directly on Sound Drip!
        </Sentence>
      </InnerGrid>
      <InnerGrid>
        <img className="about-images" src={SongImage} />
      </InnerGrid>
    </Grid>
    <div className='button-container'>
      <Button className="startedButton"
        as='a'
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
          scopes
        )}&response_type=token&show_dialog=true`}
      >
        Get Started!
      </Button>
    </div>
    <Footer>
      <p> © Copyright 2020, SoundDrip </p>
    </Footer>
  </AboutContainer>
);

export default About;

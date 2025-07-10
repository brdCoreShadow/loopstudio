import styled from "@emotion/styled";

import deepEarthMob from "../../assets/images/mobile/image-deep-earth.jpg";
import nigthArcadeMob from "../../assets/images/mobile/image-night-arcade.jpg";
import soccerTeamMob from "../../assets/images/mobile/image-soccer-team.jpg";
import gridMob from "../../assets/images/mobile/image-grid.jpg";
import aboveMob from "../../assets/images/mobile/image-from-above.jpg";
import pocketMob from "../../assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMob from "../../assets/images/mobile/image-curiosity.jpg";
import fishEye from "../../assets/images/mobile/image-fisheye.jpg";

import deepEarthDesk from "../../assets/images/desktop/image-deep-earth.jpg";
import nightArcadeDesk from "../../assets/images/desktop/image-night-arcade.jpg";
import soccerTeamDesk from "../../assets/images/desktop/image-soccer-team.jpg";
import gridDesk from "../../assets/images/desktop/image-grid.jpg";
import aboveDesk from "../../assets/images/desktop/image-from-above.jpg";
import pocketDesk from "../../assets/images/desktop/image-pocket-borealis.jpg";
import curiosDesk from "../../assets/images/desktop/image-curiosity.jpg";
import fishEyeDesk from "../../assets/images/desktop/image-fisheye.jpg";

export const AboutCon = styled.div`
  margin-bottom: 96px;

  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 1280px) {
    margin-bottom: 184px;

    padding-left: 164px;
    padding-right: 164px;
  }

  & h3 {
    margin-bottom: 48px;

    text-transform: uppercase;
    text-align: center;

    font-size: 32px;
    font-weight: 300;
    font-family: "Josephine";

    @media (min-width: 1280px) {
      margin-bottom: 0;

      font-size: 48px;
    }
  }
`;

export const AboutDeskFleskCon = styled.div`
  @media (min-width: 1280px) {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 80px;
  }
`;

export const AboutList = styled.ul`
  margin-bottom: 34px;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 4fr);
    gap: 30px;
  }
`;

export const AboutItem = styled.li`
  height: 120px;

  padding-top: 52px;
  padding-bottom: 20px;
  padding-left: 20px;

@media (min-width: 1280px){
    height: 450px;

    padding-top: 354px;
    padding-bottom: 32px;
    padding-left: 40px;

    text-align: left;
}

  &:not(:last-of-type) {
    margin-bottom: 24px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }

  &:nth-of-type(1) {
    background-image: url(${deepEarthMob});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${deepEarthDesk});
      background-size: cover;

    }
  }

  &:nth-of-type(2) {
    background-image: url(${nigthArcadeMob});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${nightArcadeDesk});
      background-size: cover;

    }
  }

  &:nth-of-type(3) {
    background-image: url(${soccerTeamMob});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${soccerTeamDesk});
      background-size: cover;

    }
  }

  &:nth-of-type(4) {
    background-image: url(${gridMob});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${gridDesk});
      background-size: cover;
    }
  }

  &:nth-of-type(5) {
    background-image: url(${aboveMob});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${aboveDesk});
      background-size: cover;
    }
  }

  &:nth-of-type(6) {
    background-image: url(${pocketMob});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${pocketDesk});
      background-size: cover;
    }
  }

  &:nth-of-type(7) {
    background-image: url(${curiosityMob});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${curiosDesk});
      background-size: cover;
    }
  }

  &:nth-of-type(8) {
    background-image: url(${fishEye});
    background-size: contain;

    @media (min-width: 1280px) {
      background-image: url(${fishEyeDesk});
      background-size: cover;
    }
  }

  & > h4 {
    width: 130px;

    text-transform: uppercase;

    font-size: 24px;
    font-family: "Josephine";
    font-weight: 300;

    color: #fff;

    @media (min-width: 1280px){
        font-size: 32px;
    }
  }
`;

export const AboutBtn = styled.button`
  width: 158px;

  margin-left: auto;
  margin-right: auto;

  text-transform: uppercase;

  padding-top: 12px;
  padding-bottom: 12px;

  font-family: "Alata";
  font-size: 14px;
  letter-spacing: 5px;
  font-weight: 400;

  background-color: transparent;
  color: #000;

  border: 1px solid #000;

  @media (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;

    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
      background-color: #000;
      color: #fff;

      cursor: pointer;

      transition: all 0.3s;
    }
  }
`;

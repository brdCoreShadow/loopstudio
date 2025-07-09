import styled from "@emotion/styled";

import deepEarthMob from "../../assets/images/mobile/image-deep-earth.jpg";
import nigthArcadeMob from "../../assets/images/mobile/image-night-arcade.jpg";
import soccerTeamMob from "../../assets/images/mobile/image-soccer-team.jpg";
import gridMob from "../../assets/images/mobile/image-grid.jpg";
import aboveMob from "../../assets/images/mobile/image-from-above.jpg";
import pocketMob from "../../assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMob from "../../assets/images/mobile/image-curiosity.jpg";
import fishEye from "../../assets/images/mobile/image-fisheye.jpg";

export const AboutCon = styled.div`
  margin-bottom: 96px;

  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  & > h3 {
    margin-bottom: 48px;

    text-transform: uppercase;
    text-align: center;

    font-size: 32px;
    font-weight: 300;
    font-family: "Josephine";
  }
`;

export const AboutList = styled.ul`
  margin-bottom: 34px;
`;

export const AboutItem = styled.li`
  height: 120px;

  padding-top: 52px;
  padding-bottom: 20px;
  padding-left: 20px;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  &:nth-of-type(1) {
    background-image: url(${deepEarthMob});
    background-size: contain;
  }

  &:nth-of-type(2) {
    background-image: url(${nigthArcadeMob});
    background-size: contain;
  }

  &:nth-of-type(3) {
    background-image: url(${soccerTeamMob});
    background-size: contain;
  }

  &:nth-of-type(4) {
    background-image: url(${gridMob});
    background-size: contain;
  }

  &:nth-of-type(5) {
    background-image: url(${aboveMob});
    background-size: contain;
  }

  &:nth-of-type(6) {
    background-image: url(${pocketMob});
    background-size: contain;
  }

  &:nth-of-type(7) {
    background-image: url(${curiosityMob});
    background-size: contain;
  }

  &:nth-of-type(8) {
    background-image: url(${fishEye});
    background-size: contain;
  }

  & > h4 {
    width: 130px;

    text-transform: uppercase;

    font-size: 24px;
    font-family: "Josephine";
    font-weight: 300;

    color: #fff;
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
`;

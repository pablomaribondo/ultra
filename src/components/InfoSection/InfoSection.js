import { Link } from "react-router-dom";

import {
  Heading,
  Img,
  ImgWrapper,
  InfoSec,
  InfoRow,
  InfoColumn,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({
  alt,
  buttonLabel,
  description,
  headline,
  img,
  imgStart,
  lightBg,
  lightTextDescription,
  lightText,
  lightTopLine,
  primary,
  start,
  topLine,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDescription={lightTextDescription}>
                  {description}
                </Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;

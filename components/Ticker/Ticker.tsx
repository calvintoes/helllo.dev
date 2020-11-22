import React from "react";
import Marquee from "react-marquee-slider";
import { words } from "./Words";
import { Wrapper, Word } from "./styles";

const Ticker = () => {

  const wordsToRow = (list: string[]) => {
    return list.map((word) => (
      <Word key={word}>
        {word}
      </Word>
    ));
  };

  const tickerRowOne = wordsToRow(words.rowOne);
  const tickerRowTwo = wordsToRow(words.rowTwo);

  return (
    <>
      <Wrapper>
        <Marquee
          velocity={35}
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={0}
          onFinish={() => { }}
          onInit={() => { }}
        >
          {tickerRowOne}
        </Marquee>
      </Wrapper>
      <Wrapper>
        <Marquee
          velocity={25}
          direction="ltr"
          scatterRandomly={false}
          resetAfterTries={0}
          onFinish={() => { }}
          onInit={() => { }}
        >
          {tickerRowTwo}
        </Marquee>
      </Wrapper>
    </>
  )
};

export default Ticker;

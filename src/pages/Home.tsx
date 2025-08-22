import React from "react";
import { Link } from "react-router-dom";

import HashtagContainer from "@components/HastagContainer";
import Editor from "@components/Editor";
import EmbeddedInstagram from "@components/EmbededInstagram";

const Home: React.FC = () => {
  return (
    <div
    // className="dark:*:bg-gray-900 dark:text-white flex flex-col items-center h-screen w-screen"
    >
      <header className="w-full flex justify-between p-4 backdrop-blur-md ">
        <img src="/bokeh.svg" className="" alt="BOKEH" />
        <ul className="flex justify-center items-center">
          <li className="hover:underline min-w-16 text-center">
            <Link to="/">Bokeh</Link>
          </li>
          <li className="hover:underline min-w-16 text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline min-w-16 text-center">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
      <article className="p-4">
        <EmbeddedInstagram />
        <div className="whitespace-pre-wrap">
          케이팝의 성공 공식은 깨진 지 오래다.
          <br />
          <br />
          ‘3대 기획사’에 대한 기대는 옅어졌고, 매년 쏟아지는 신인 아이돌들에게는
          차별성을 찾아보기 힘들다. 새로움이란 없고, 정도正道를 따르는 것 또한
          성공으로 이어지지 않는다. 이러한 케이팝 산업 속에서 상대적으로 자본과
          인프라가 부족한 신생 기획사에서 데뷔한 아이돌의 ‘성공 신화’는 와닿지
          않았다. ifeye(@ifeye_official) 의 새 앨범을 듣기 전에는!
          <br />
          <br />
          〈r u ok?〉는 과할 정도로 많은 요소들이 혼합된 복잡한 트랙이지만, 그
          기저에는 지루할 정도로 전형적인 ‘케이팝스러움’이 있다는 점이 흥미롭다.
          완전히 새로운 것을 택하기보다는 익숙함 속 하나의 킥을 더해
          차별화했다는 점이 이들을 유심히 지켜보는 이유이다.
          <br />
          <br />
          점점 거세지는 케이팝의 파도 속에서 ifeye는 이렇게 말한다.
          <br />
          <br />
          “어서 말해 어떤데, 어제와는 다를걸?”*
          <br />
          <br />
          *ifeye - 〈r u ok?〉
          <br />
          <br /> ⿻ 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 @𝖪𝖡𝖲 𝖪𝗉𝗈𝗉 @𝖲𝖳𝖴𝖣𝖨𝖮 𝖢𝖧𝖮𝖮𝖬 @고고씽 @𝖬𝗇𝖾𝗍 𝖪-𝖯𝖮𝖯 @𝖳𝖧𝖤
          𝖪-𝖯𝖮𝖯
        </div>
        <Editor editor="슬" />
        <HashtagContainer
          hashtags={["ifeye", "이프아이", "ruok", "kpop", "케이팝"]}
        />
      </article>
    </div>
  );
};

export default Home;

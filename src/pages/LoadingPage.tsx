import React from "react";
import { Link } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen w-screen">
      <Hourglass colors={["#333", "#666"]} height={80} width={80} />
      <div className="flex flex-col gap-2 items-center text-center">
        <p>페이지를 불러오고 있습니다.</p>
        <span>BOKEH 인스타그램에서 최근 게시물을 확인해 보세요!</span>
        <div className="flex gap-2">
          <Link
            className="from-pink-600 via-violet-600 to-purple-600 bg-gradient-to-r text-white p-2 px-4 rounded
            hover:from-yellow-200 hover:via-orange-400 hover:to-pink-600 hover:text-purple-950 transition-all"
            to="https://www.instagram.com/bokeh.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            인스타그램 바로가기
          </Link>
          <Link
            className="bg-gray-900 text-white p-2 px-4 rounded hover:bg-gray-700 transition-colors"
            to="/"
          >
            홈으로
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

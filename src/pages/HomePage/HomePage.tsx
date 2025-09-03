import { useEffect, useState } from "react";
import headerImg from "../../assets/img/Wave.svg";

export function HomePage() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Dev", "Web Dev"];
  const period = 100;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, index]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 3);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 3);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 2);
    }
  };

  return (
    <div className="grid grid-rows-2 h-fit pl-2">
      <div className="flex justify-self-center items-center w-full h-full">
        <div className="w-full h-1/2">
          <span className="">Hello:) I'm Nandipha Ndlovu</span>
          <h2 className="text-pretty md:text-balance">
            <span
              className="flex flex-wrap"
              // dataPeriod="1000"
              style={{ fontFamily: "bubblegums" }}
              data-rotate='[ "Software Dev", "Web Dev"]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col-3 h-full">
        <div className="grid grid-row -2 animate__animated animate__fadeIn">
          <p>
            Greetings! 🚀 I'm a third-year computer science student at Belgium
            Campus ITversity, diving deep into the enchanting realm of software
            engineering. From weaving frontend fairytales to conjuring backend
            spells and even crafting full-stack adventures, I'm all about
            bringing digital dreams to life. When I'm not coding up a storm,
            you'll find me cozily immersed in games like Coral Island and
            Grounded – because even tech wizards need their pixelated escapes!
            🎮🌱✨
          </p>
          {/*
                  <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                  */}
          <a
            // href={cvDownload}
            download="CV_Cover-Letter_QRCode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button onClick={() => console.log("download")}>
              Download CV
              {/* <Download size={25} /> */}
            </button>
          </a>
        </div>

        <div className="animate__animated animate__zoomIn invisible md:visible h-full w-full">
          <img src={headerImg} alt="Header Img" />
        </div>
      </div>
    </div>
  );
}

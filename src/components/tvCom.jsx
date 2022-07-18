import MiniNav from "./miniNav";
import Space from "./spaceCom.jsx";
const tvCom = (props) => {
  return (
    <div>
      <Space />
      <div className="text-white w-[1499px] h-[840px] bg-cover bg-center bg-no-repeat bg-[url('//images.samsung.com/is/image/samsung/assets/pk/tvs/qled-tv/highlights/2021-neo-qled-tv-f01-intro-pc.png?$FB_TYPE_A_PNG$')]">
        <MiniNav MN={props.miniNavs} id={props.id} />
        <div className="relative top-[515px] flex flex-wrap flex-col items-center">
          <p className="font-bold text-5xl pb-5">
            Greatness never ends, but evolves
          </p>
          <button className="w-36 bg-white hover:bg-gray-200 text-black p-2 rounded-2xl mb-11">
            Learn More
          </button>
        </div>
      </div>
      <Space />
    </div>
  );
};

export default tvCom;

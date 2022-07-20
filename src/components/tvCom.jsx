import MiniNav from "./miniNav";
import Wrapper from "./boxWrappers";
const tvCom = (props) => {
  return (
    <Wrapper>
      <div className="flex flex-col text-white h-screen bg-cover bg-center bg-no-repeat bg-[url('//images.samsung.com/is/image/samsung/assets/pk/tvs/qled-tv/highlights/2021-neo-qled-tv-f01-intro-pc.png?$FB_TYPE_A_PNG$')]">
        <MiniNav MN={props.miniNavs} id={props.id} />
        <div className="flex flex-wrap flex-col justify-end h-screen items-center">
          <p className="font-bold text-5xl pb-5">
            Greatness never ends, but evolves
          </p>
          <button className="w-36 bg-white hover:bg-gray-200 text-black p-2 rounded-2xl mb-11">
            Learn More
          </button>
        </div>
      </div>
      </Wrapper>
  );
};

export default tvCom;

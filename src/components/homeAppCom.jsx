import Space from "./spaceCom";
import MiniNav from "./miniNav";
const homeAppCom = (props) => {
  return (
    <div>
      <Space />
      <div className="text-black w-screen h-[840px] bg-cover bg-center bg-no-repeat bg-[url('//images.samsung.com/is/image/samsung/pk-feature-washer-ww80j5413iw--60875576?$FB_TYPE_A_JPG$')]">
        <MiniNav MN={props.miniNavs} id={props.id} />
        <div className="relative top-[475px] flex flex-wrap flex-col items-center">
          <p className="font-bold text-5xl pb-5">
            Efficient Clean, <br />
            Intelligent Wash
          </p>
          <div className="space-x-2">
            <button className="w-auto hover:underline font-semibold text-m text-black p-2 mb-11">
              Learn More
            </button>
            <button className="w-auto bg-black hover:bg-gray-700 text-white p-2 rounded-2xl mb-11">
              See all Washing Machines
            </button>
          </div>
        </div>
      </div>
      <Space />
    </div>
  );
};

export default homeAppCom;

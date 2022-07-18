import MiniNav from "../miniNav";
const mobileCom = (props) => {
  return (
    <div className="pt-10 flex flex-wrap flex-col items-center">
      <MiniNav MN={props.miniNavs} id={props.id} />
      <img
        className="w-1/2"
        src="//images.samsung.com/is/image/samsung/assets/pk/2203/home/Home_B_KV_IM-KV_743X418_pc.jpg?$LazyLoad_Home_JPG$"
        alt=""
      />
      <h1 className="font-bold text-5xl p-16 pb-2">
        {props.miniNavs[props.id].nav[0].li}
      </h1>
      <div>
        <button className="w-40 bg-black hover:bg-gray-700 text-white p-2 rounded-2xl mb-11">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default mobileCom;

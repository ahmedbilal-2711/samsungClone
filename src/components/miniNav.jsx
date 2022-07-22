const miniNav = (props) => {
  return (
    <div className="pt-10 flex flex-wrap flex-col items-center">
      <h1 className="text-5xl font-semibold">{props.MN[props.id].head}</h1>
      <nav className="pt-12">
        <ul className="flex">
          {props.MN[props.id].nav.map((com) => (
            <li
              key={com.id}
              className="hover:underline px-4 text-lg py-0.5 hover:underline-offset-8 hover:text-gray-600 hover:cursor-pointer font-semibold"
            >
              {com.li}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default miniNav;

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const AdditionDetail = ({ name, description, value, image }) => {
  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      container.current,
      { opacity: 0, y: 130 },
      { opacity: 1, duration: 2, y: 0 }
    );

    return () => tl.kill();
  }, []);

  return (
    <div
      className="flex items-center justify-between bg-slate-100 py-14 px-7 rounded-lg cursor-pointer w-full shadow-sm"
      ref={container}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl">{name}</h3>
          <p className="text-black/50 text-base">{description}</p>
        </div>
        <h2 className="text-2xl text-black">{value}</h2>
      </div>
      <Image
        src={`/images/weatherDetail/${image}`}
        width={60}
        height={60}
        alt="weatherDetail"
      />
    </div>
  );
};

export default AdditionDetail;

import { EconomicSVG } from "../icons/economic";

const Economic = (props) => {
  const isPhone = !props.matches
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] gap-[56px]">
        <div className="justify-center items-center text-center">
          <p className="text-heading text-[34px] md:text-[48px]">FULL CIRCULAR ECONOMY</p>
        </div>
        <div className="flex flex-col">
          <p className="text-normal text-lg text-center">
            Mine, Trade and Burn.
          </p>
        </div>
        <EconomicSVG opacity={0.7} width={isPhone ? 360 : undefined} />
      </div>
    </>
  );
};

export default Economic;

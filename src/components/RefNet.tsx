import { RefNetSVG } from "../icons/refnet";

const RefNet = (props) => {
  const isPhone = !props.matches
  return (
    <div className="flex flex-col justify-center items-center pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] gap-[56px]">
      <div className="justify-center items-center text-center">
        <p className="text-heading text-[34px] md:text-[48px]">REFERRAL NETWORK</p>
      </div>
      <div className="flex flex-col">
        <p className="text-normal text-lg text-center">
          Integrated, Sybil-Proof, and Autonomous
        </p>
      </div>

      <RefNetSVG width={isPhone ? 320 : 480} />

      <div className="flex flex-col">
        <p className="text-normal text-lg text-center">
          Build your network, pay node rent, and earn commissions.
        </p>
      </div>
    </div>
  );
};

export default RefNet;

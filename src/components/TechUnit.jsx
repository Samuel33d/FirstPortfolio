const TechUnit = ({ image }) => {
  return (
    <img
      data-aos="zoom-in"
      data-aos-once="true"
      className="hover:animate-pulse transition-all max-h-[112px] max-w-[112px]"
      src={image}
      alt=""
    />
  );
};
export default TechUnit;

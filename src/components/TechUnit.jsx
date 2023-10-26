const TechUnit = ({ image }) => {
  return (
    <img
      data-aos="zoom-in"
      data-aos-once="true"
      className="hover:animate-pulse transition-all"
      src={image}
      alt=""
    />
  );
};
export default TechUnit;

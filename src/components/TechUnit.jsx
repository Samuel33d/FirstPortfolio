const TechUnit = ({ image, skill }) => {
  return (
    <article className="hover:-translate-y-4 duration-700">
      {" "}
      <img
        data-aos="zoom-in"
        data-aos-once="true"
        className="h-[112px] w-[112px] object-contain"
        src={image}
        alt=""
      />
      <h4 className="uppercase">{skill}</h4>
    </article>
  );
};
export default TechUnit;

const Hero = (props) => {
  const { src, styles } = props;
  return (
    <div className={styles}>
      <img className="w-full h-full object-cover" src={src} />
    </div>
  );
};

export default Hero;

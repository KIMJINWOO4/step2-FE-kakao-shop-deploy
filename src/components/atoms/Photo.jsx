const Photo = ({ src, alt }) => {
  return (
    <picture>
      <source srcSet={"%PUBLIC_URL%" + src} />
      <img src={"%PUBLIC_URL%" + src} alt={alt} />
    </picture>
  );
};

export default Photo;

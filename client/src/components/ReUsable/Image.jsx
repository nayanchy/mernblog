import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      transformation={[{ width: w, height: h }]}
    />
  );
};

export default Image;

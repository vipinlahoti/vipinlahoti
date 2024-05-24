import Image from "next/image";

const ImageComp = ({ size = 40, src, title }) => {
  return (
    <Image
      width={size}
      height={size}
      loading="lazy"
      src={src}
      alt={title}
      title={title}
    />
  );
};

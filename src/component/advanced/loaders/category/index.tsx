import ContentLoader from "react-content-loader";

export interface ICategoryLoader {
  loadingSpeed: number;
  forGroundColor: string;
}

export const CategoryLoader: React.FC<ICategoryLoader> = ({
  forGroundColor,
  loadingSpeed,
}) => {
  return (
    <ContentLoader
      speed={loadingSpeed}
      width="100%"
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor={forGroundColor}
    >
      <circle cx="30" cy="434" r="23" />
      <rect x="63" y="414" rx="2" ry="2" width="329" height="38" />
      <rect x="-4" y="0" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
  );
};

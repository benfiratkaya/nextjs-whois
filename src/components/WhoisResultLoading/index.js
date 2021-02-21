import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "next-themes";

const WhoisResultLoading = () => {
  const { theme } = useTheme();
  const skeletonColors = {
    box: theme === "light" ? "#eef0f2" : "#2c2f33",
    highlight: theme === "light" ? "#fff" : "#585858",
  };
  return (
    <div className="card">
      <SkeletonTheme
        color={skeletonColors.box}
        highlightColor={skeletonColors.highlight}
      >
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-5">
              <Skeleton width="100%" height="20px" />
            </div>
            <div className="col-7">
              <Skeleton width="100%" height="20px" />
            </div>
          </div>
          <Skeleton width="100%" height="100px" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default WhoisResultLoading;

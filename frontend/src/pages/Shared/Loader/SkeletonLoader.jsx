import mod from './__index__.module.scss';

export const SkeletonLoader = ({
  width = '100%',
  height = '16px',
  radius = '6px',
  className = '',
}) => {
  return (
    <div
      className={`${mod.skeleton} ${className}`}
      style={{
        width,
        height,
        borderRadius: radius,
      }}
    />
  );
};

export default SkeletonLoader;

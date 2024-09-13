import React from "react";
import './Skeleton.css';
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width: string;
    height: string;
    borderRadius: string;
}
const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius, className, ...rest}) => {
    return (
        <div
            {...rest}
            className={`skeleton ${className}`}
            style={{ width, height, borderRadius }}
        />
    );
};

export default Skeleton;

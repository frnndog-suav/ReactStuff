import { FC } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export const Avatar: FC<AvatarProps> = ({ src, hasBorder = true }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};

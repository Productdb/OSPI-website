import { HTMLAttributes } from "react";

// ====================================================
type IconTextBoxProps = {
  icon: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};
// ====================================================

export default function IconBox({ icon, className }: IconBoxProps) {
  return (
    <div className={className}>
      <p> ${icon}</p>
    </div>
  );
}

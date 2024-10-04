import { HTMLAttributes } from "react";

// ====================================================
type IconTextBoxProps = {
  icon: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};
// ====================================================

export default function IconBox({ icon, className }: IconTextBoxProps) {
  return (
    <div className={className}>
      <p style="font-size: 0.7rem;">{icon}</p>
    </div>
  );
}

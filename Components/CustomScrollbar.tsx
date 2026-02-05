import React, { ReactNode } from "react";

interface CustomScrollbarProps {
  children: ReactNode;
  autoHide?: boolean;
  autoHideTimeout?: number;
  autoHideDuration?: number;
  universal?: boolean;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
  return (
    <div className="custom-scrollbar h-full w-full overflow-auto">
      {children}
    </div>
  );
};

export default CustomScrollbar;

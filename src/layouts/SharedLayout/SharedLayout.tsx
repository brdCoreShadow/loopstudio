import { ChildrenProps } from "@/types/types";

const SharedLayout: React.FC<ChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SharedLayout;

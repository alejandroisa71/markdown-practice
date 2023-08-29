import { useMDXComponent } from "next-contentlayer/hooks";
import Counter from "./Counter";
import MyImage from "./MyImage";

const components = {
  h1: (props) => <h1 className="text-red-500" {...props} />,
  Counter,
  MyImage
};

const Mdx = ({ code }) => {
  const MDXComponent = useMDXComponent(code);
  return <MDXComponent components={components} />;
};
export default Mdx;

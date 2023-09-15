import { useParams } from "react-router-dom";

const QuickTabs = () => {
  const param = useParams();
  return <div>{param.tab}</div>;
};

export default QuickTabs;

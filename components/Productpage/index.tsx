import SetupSection from './Setup/page';
import ProductCare from './ProductCare/page';
import CompareRouter from './compareRouter/page';
import NewRouter from './NewRouter/page';
import PlanSection from './PlanSection/page';


export default function ProductParent() {
  return (
    <>
      <SetupSection />
      <ProductCare />
      <CompareRouter />
      <NewRouter />
      <PlanSection />
    </>
  );
}
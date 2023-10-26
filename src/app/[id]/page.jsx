import DynamicPageContent from '@/src/Components/DynamicPageContent/DynamicPageContent';

const DynamicPage = ({ params: { id } }) => {
  return (
    <>
      <DynamicPageContent id={id} />
    </>
  );
};

export default DynamicPage;

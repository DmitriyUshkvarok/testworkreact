import DynamicPageContent from '@/src/Components/DynamicPageContent/DynamicPageContent';
import DB from '../../app/DB.json';

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  const pageData = DB.find((t) => t.id === id);

  if (!pageData) {
    return {};
  }

  return {
    title: pageData.title,
    description: `this is my description ${pageData.path}`,
  };
}
const DynamicPage = ({ params: { id } }) => {
  return (
    <>
      <DynamicPageContent id={id} />
    </>
  );
};

export default DynamicPage;

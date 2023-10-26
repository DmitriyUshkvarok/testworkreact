import styled from './DynamicPageContent.module.css';
import DB from '../../app/DB.json';
import ButtonBack from '../ButtonBack/ButtonBack';

const DynamicPageContent = ({ id }) => {
  const pageId = id;
  const tab = DB.find((t) => t.id === pageId);

  if (!tab) {
    return <div>Not Found</div>;
  }
  return (
    <div>
      <ButtonBack />
      <h1 className={styled.dynamicPageTitle}>{tab.title}</h1>
      <div className={styled.dynamicPageOrder}>order: {tab.order}</div>
      <div className={styled.dynamicPagePath}>path: {tab.path}</div>
    </div>
  );
};

export default DynamicPageContent;

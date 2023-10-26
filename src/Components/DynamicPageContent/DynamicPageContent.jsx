import styled from './DynamicPageContent.module.css';
import DB from '../../app/DB.json';
import ButtonBack from '../ButtonBack/ButtonBack';
import { philosopher } from '@/src/app/fonts';

const DynamicPageContent = ({ id }) => {
  const pageId = id;
  const tab = DB.find((t) => t.id === pageId);

  if (!tab) {
    return <div>Not Found</div>;
  }
  return (
    <div className={philosopher.className}>
      <ButtonBack />
      <h1 className={styled.dynamicPageTitle}>{tab.title}</h1>
      <div className={styled.dynamicPageOrder}>order: {tab.order}</div>
      <div className={styled.dynamicPagePath}>path: {tab.path}</div>
    </div>
  );
};

export default DynamicPageContent;

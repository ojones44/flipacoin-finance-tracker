// React Imports
import { useAppContext } from '../../context/appContext';

function CurrentPage() {
  const { activePage } = useAppContext();

  return <p className='current-page'>{activePage} Page</p>;
}
export default CurrentPage;

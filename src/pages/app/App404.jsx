import {Link} from "react-router-dom";
import TranslateHelper from "helpers/translateHelper";

const App404 = () => {
  return (
    <div className="">
      <h1>{TranslateHelper.translate('page_not_found')}</h1>
      <Link to="/" >{TranslateHelper.translate('back_to_home_page')}</Link>
    </div>
  );
};

export default App404;

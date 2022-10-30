import {I18nextProvider} from 'react-i18next';
import i18n from 'translations';


import 'assets/css/tailwind.css'

import translateHelper from "helpers/translateHelper";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {translateHelper.translate('github_user_search_service')}
    </I18nextProvider>
  );
}

export default App;

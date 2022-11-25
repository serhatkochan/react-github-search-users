import {I18nextProvider} from 'react-i18next';
import i18n from 'translations';

import {useRoutes} from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {useRoutes(routes)}
    </I18nextProvider>
  );
}

export default App;

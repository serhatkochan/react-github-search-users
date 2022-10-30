import React from 'react';
import TranslateHelper from "helpers/translateHelper";

import {Link} from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to="/" >{TranslateHelper.translate('back_to_home_page')}</Link>
    </div>
  );
};

export default Contact;

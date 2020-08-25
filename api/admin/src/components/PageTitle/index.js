import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => (
  <Helmet
    title={title}
    link={[
      {
        rel: "icon",
        type: "image/png",
        href:
          "https://campusvirtual.univalle.edu.co/moodle/pluginfile.php/1/theme_moove/favicon/1598287054/icono_barranavegador.ico",
      },
    ]}
  />
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PageTitle);

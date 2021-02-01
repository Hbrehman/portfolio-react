import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import ogImage from "./../../assets/images/habib.jpg";

const HOST = process.env.NODE_ENV === "production" ? "https://habib.codes" : "";

const SEO = ({ description, lang, meta, keywords, title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="Habib Ur Rehman" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={"https://habib.codes"} />
    <meta property="og:image" content={`https://habib.codes/${ogImage}`} />
    <meta property="og:image:alt" content={description} />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="og:image:width" content="1365" />
    <meta property="og:image:width" content="1365" />
    <meta property="og:image:height" content="1365" />
  </Helmet>
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

SEO.defaultProps = {
  title: null,
  description: "",
  meta: [],
  keywords: "",
};

export default SEO;

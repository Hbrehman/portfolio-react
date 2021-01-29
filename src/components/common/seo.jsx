import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import ogImage from "./../../assets/images/habib.jpg";

const HOST = process.env.NODE_ENV === "production" ? "https://habib.codes" : "";

const SEO = ({ description, lang, meta, keywords, title }) => (
  <Helmet
    htmlAttributes={{ lang }}
    title={title}
    titleTemplate={title}
    meta={[
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: "Habib Ur Rehman" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://habib.codes" },
      { property: "og:image", content: `${HOST}${ogImage}` },
      { property: "og:image:alt", content: description },
      { property: "og:image:type", content: "image/jpg" },
      { property: "og:image:width", content: "1365" },
      { property: "og:image:height", content: "1365" },
    ].concat(meta)}
  />
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

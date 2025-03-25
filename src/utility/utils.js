export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-GB");
};

export const updateMetaTags = ({ title, description, keywords, canonical }) => {
  document.title = title;
  const setMetaTag = (name, content, isProperty = false) => {
    const selector = isProperty
      ? `meta[property='${name}']`
      : `meta[name='${name}']`;
    let metaTag = document.querySelector(selector);
    if (!metaTag) {
      metaTag = document.createElement("meta");
      if (isProperty) {
        metaTag.setAttribute("property", name);
      } else {
        metaTag.setAttribute("name", name);
      }
      document.head.appendChild(metaTag);
    }
    metaTag.content = content;
  };

  setMetaTag("description", description);
  setMetaTag("keywords", keywords);

  setMetaTag("og:title", title, true);
  setMetaTag("og:description", description, true);
  setMetaTag("og:keywords", keywords, true);
  if (canonical) {
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical);
  }
};

export const getResponsiveImage = ({ desktop, tab, mobile }) => {
  const width = window.innerWidth;
  if (width > 992) return desktop;
  if (width > 768) return tab;
  if (width > 567) return mobile;
  if (width > 240) return mobile;
  return desktop;
};

export const isMobile = () => window.innerWidth < 567;
export const isMiniTab = () => window.innerWidth < 768;
export const isTab = () => window.innerWidth < 992;

export const getSlugify = (value) => {
  return value.replace(/-/g, " ");
};

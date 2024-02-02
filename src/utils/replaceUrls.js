export const replaceUrls = (content, replacementUrl) => {
  return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl);
};

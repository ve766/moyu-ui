const fixUrlInReviewApp = process.env.CI_ENVIRONMENT_URL
  ? (url) => {
      const newUrl = new URL(process.env.CI_ENVIRONMENT_URL);
      newUrl.pathname += url.startsWith('/') ? url : `/${url}`;
      // eslint-disable-next-line no-console
      console.log(`Relative URL fix: ${url} => ${newUrl}`);
      return newUrl.toString();
    }
  : (url) => url;

module.exports = fixUrlInReviewApp;

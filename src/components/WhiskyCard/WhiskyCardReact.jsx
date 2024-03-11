const WhiskyCardReact = ({ whisky, baseSlug }) => {
  return (
    <div className="whisky">
      <div className="whisky-image">
        <img
          src={whisky.whiskyContent.featuredImage.sourceUrl}
          alt={whisky.whiskyContent.featuredImage.altText}
          width="100"
          height="100"
        />
      </div>
      <div className="whisky-content">
        <h3 className="whisky-content-title hl-five">
          <a className="hl-five" href={`${baseSlug}/${whisky.slug}`}>
            {whisky.title}
          </a>
        </h3>
      </div>
      <div className="whisky-tags">
        <div className="whisky-origins">
          {whisky.whiskeyOrigins.nodes.map((origin, index) => {
            return (
              <p key={index}>
                <a href={`/whiskies/origins/${origin.slug}`}>{origin.name}</a>
              </p>
            );
          })}
        </div>
        <div className="whisky-regions">
          {whisky.whiskeyRegions.nodes.map((region, index) => {
            return (
              <p key={index}>
                <a href={`/`}>{region.name}</a>
              </p>
            );
          })}
        </div>
        <div className="whisky-types">
          {whisky.whiskyTypes.nodes.map((type, index) => {
            return (
              <p key={index}>
                <a href={`/`}>{type.name}</a>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhiskyCardReact;

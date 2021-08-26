import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import Home from '../client/components/Home';

export default req => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {/* <Routes /> */}
      <Home />
    </StaticRouter>,
  );

  // const content = renderToString(<Home />);

  return `
    <html>
      <head></head>
      <body>
        <div id="react-server-dest">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};

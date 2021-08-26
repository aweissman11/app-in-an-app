This application was created in the hopes of finding a way to render a React application inside another application.

The reason for doing this is to avoid using an iFrame when rendering one app inside another app. Basically, I am trying to host an application on another organizations CMS and would like to fetch the react dom code followed by the bundle so that I can take over the space between their header and footer. The reason an iFrame is not ideal is due to the fact that both responsiveness and routing become a more arduous process if not impossible.

In order to test this code out, do the following:

1. With a fresh terminal `cd` into the server directory
2. run `npm install`
3. run `npm run dev`
4. Open the basic_html `index.html` file in a browser

Hopefully an extremely rudimentary react application will render just below a `<p>Hello</p>` html element.

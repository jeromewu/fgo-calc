import createHistory from 'history/createBrowserHistory';

const basename = process.env.PUBLIC_URL;

export default createHistory({ basename });

import createHistory from 'history/createBrowserHistory';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/fgo-calc';

export default createHistory({ basename });

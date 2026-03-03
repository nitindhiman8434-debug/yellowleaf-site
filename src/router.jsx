import React, { useState, useEffect, useContext, createContext, useCallback, useMemo, useRef } from 'react';

const RouterContext = createContext({ path: '/', params: {}, navigate: () => {} });

export function useNavigate() {
  const { navigate } = useContext(RouterContext);
  return navigate;
}

export function useParams() {
  const { params } = useContext(RouterContext);
  return params;
}

export function useLocation() {
  const { path } = useContext(RouterContext);
  return { pathname: path };
}

export function Link({ to, className, style, onClick, children, ...rest }) {
  const { navigate } = useContext(RouterContext);
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };
  return (
    <a href={'#' + to} className={className} style={style} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

function parsePath(hash) {
  return hash.replace(/^#/, '') || '/';
}

function matchRoute(path, pattern) {
  if (pattern === path) return {};
  const patternParts = pattern.split('/');
  const pathParts = path.split('/');
  if (patternParts.length !== pathParts.length) return null;
  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
    } else if (patternParts[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
}

// Store registered routes so we can compute params from path
let registeredRoutes = [];

export function HashRouter({ children }) {
  const [path, setPath] = useState(() => parsePath(window.location.hash));
  const [params, setParams] = useState({});

  useEffect(() => {
    const handler = () => {
      const newPath = parsePath(window.location.hash);
      setPath(newPath);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = useCallback((to) => {
    window.location.hash = to;
  }, []);

  const setParamsStable = useCallback((p) => {
    setParams(prev => {
      // Only update if actually changed
      const keys = Object.keys(p);
      const prevKeys = Object.keys(prev);
      if (keys.length !== prevKeys.length) return p;
      for (const k of keys) {
        if (prev[k] !== p[k]) return p;
      }
      return prev;
    });
  }, []);

  return (
    <RouterContext.Provider value={{ path, params, navigate, setParams: setParamsStable }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Routes({ children }) {
  const { path, setParams } = useContext(RouterContext);

  // Find matching route
  const matched = useMemo(() => {
    let result = null;
    React.Children.forEach(children, (child) => {
      if (result) return;
      if (!React.isValidElement(child)) return;
      const routePath = child.props.path;
      const matchResult = matchRoute(path, routePath);
      if (matchResult !== null) {
        result = { element: child.props.element, params: matchResult };
      }
    });
    return result;
  }, [path, children]);

  // Update params when match changes
  const paramsRef = useRef(null);
  if (matched && matched.params !== paramsRef.current) {
    paramsRef.current = matched.params;
  }

  useEffect(() => {
    if (paramsRef.current) {
      setParams(paramsRef.current);
    }
  }, [path, setParams]);

  if (!matched) return null;
  return matched.element;
}

export function Route() {
  return null;
}

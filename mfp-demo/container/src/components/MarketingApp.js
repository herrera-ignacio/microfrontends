import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // Sync memory history with browser history.
      initialPath: history.location.pathname,

      // Handle navigation from subapps
      // The "onNavigate" callback will be responsibility of the subapp.
      onNavigate: ({ pathname: subappPathname }) => {
        const { pathname: containerPathname } = history.location;

        // If subapp changed path, update history in the container.
        if (containerPathname !== subappPathname) {
          history.push(subappPathname);
        }
      },
    });

    // Communicate container's navigation to subapps.
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />
}

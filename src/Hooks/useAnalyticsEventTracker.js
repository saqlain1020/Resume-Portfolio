import React from "react";
import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category) => {
  const eventTracker = (action, label = undefined) => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default useAnalyticsEventTracker;

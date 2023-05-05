import { useMemo } from "react";
import filter from "lodash/filter";
import flow from "lodash/flow";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";

import { LOCATIONS, SUB_DEPARTMENTS } from "../constants";
import { generateDummyData } from "../data";

const filterByLocation = (locationKey) => (dataList) => {
  const withNoEmptyShift = filter(dataList, item => !isEmpty(item.shifts));
  if (locationKey === LOCATIONS.ALL) {
    return withNoEmptyShift;
  }
  return filter(withNoEmptyShift, { locationKey });
};

const filterBySubDepartment = (subDepartmentKey) => (dataList) => {
  if (subDepartmentKey === SUB_DEPARTMENTS.ALL) {
    return dataList;
  }
  return map(dataList, item => {
    const { shifts } = item || {};
    return {
      ...item,
      shifts: filter(shifts, { subDepartmentKey })
    };
  });
};

const useFilteredData = ({
  activeDate,
  activeLocation,
  activeSubDepartment
}) => {
  return useMemo(() => {
    const baseData = generateDummyData(activeDate) || [];

    return flow([
      filterBySubDepartment(activeSubDepartment),
      filterByLocation(activeLocation)
    ])(baseData);
  }, [activeDate, activeLocation, activeSubDepartment]);
};

export default useFilteredData;

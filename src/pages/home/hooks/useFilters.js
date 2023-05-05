import { useCallback, useState } from "react";
import { LOCATIONS, SUB_DEPARTMENTS } from "../constants";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    activeDate: new Date().valueOf(),
    activeLocation: LOCATIONS.ALL,
    activeSubDepartment: SUB_DEPARTMENTS.ALL
  });

  const { activeDate, activeLocation, activeSubDepartment } = filters || {};


  const onChangeFilter = useCallback((key, value) => {
    setFilters(old => ({ ...old, [key]: value }));
  }, []);

  return {
    activeDate,
    activeLocation,
    activeSubDepartment,
    onChangeFilter
  };
};

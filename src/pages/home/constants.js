export const APPOINTMENT_STATUS_KEYS = {
  RED: "red",
  GREEN: "green"
};

export const LOCATIONS = {
  ALL: "all",
  EAST_WING: "east-wing",
  FACILITY_WIDE: "facility-wide"
};

export const LOCATIONS_CONFIG = [
  { id: "1", label: "All", value: LOCATIONS.ALL },
  { id: "2", label: "East Wing", value: LOCATIONS.EAST_WING },
  { id: "3", label: "Facility Wide", value: LOCATIONS.FACILITY_WIDE }
];

export const SUB_DEPARTMENTS = {
  ALL: "all",
  CNA: "cna",
  SHORT_SHIFT: "short-shift",
  LICENSED: "licensed",
  ACTIVITY: "activity",
  ADMINISTRATOR: "administrator"
};

export const SUB_DEPARTMENTS_CONFIG = [
  { id: "1", label: "All", value: SUB_DEPARTMENTS.ALL },
  { id: "2", label: "CNA", value: SUB_DEPARTMENTS.CNA },
  { id: "3", label: "Short", value: SUB_DEPARTMENTS.SHORT_SHIFT },
  { id: "4", label: "Licensed", value: SUB_DEPARTMENTS.LICENSED },
  { id: "5", label: "Activity", value: SUB_DEPARTMENTS.ACTIVITY },
  { id: "6", label: "Administrator", value: SUB_DEPARTMENTS.ADMINISTRATOR }
];

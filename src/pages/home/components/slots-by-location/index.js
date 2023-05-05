import LocationHeader from "./location-header.js";
import SlotsHeader from "./slots-header.js";
import React, { memo } from "react";
import AppointmentSlotsStrip from "./appointment-slots-strip.js";
import { Box } from "@mui/material";
import get from "lodash/get";

const BaseShiftItem = ({ item, daysList, weekWiseData }) => {
  const { name, displayTime } = item || {};
  const slots = get(item, "slots", []);
  return (
    <Box key={item.id}>
      <SlotsHeader title={name} />
      {slots.map((item) => {
        return (
          <AppointmentSlotsStrip
            key={item.id}
            daysList={daysList}
            appointments={item.occupied}
            displayTime={displayTime}
            weekWiseData={weekWiseData}
          />
        );
      })}
    </Box>
  );
};

const ShiftItem = memo(BaseShiftItem);
const SlotsByLocation = ({ daysList, locationSlotsInfo, weekWiseData }) => {
  const { name, shifts = [] } = locationSlotsInfo || {};
  return (
    <div>
      <LocationHeader title={name} />
      {shifts.map((item) => {
        return (
          <ShiftItem
            key={item.id}
            item={item}
            daysList={daysList}
            weekWiseData={weekWiseData}
          />
        );
      })}
    </div>
  );
};

export default SlotsByLocation;

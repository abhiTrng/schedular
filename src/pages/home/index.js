import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import useMonth from "./hooks/useMonths.js";
import MonthsStrip from "./components/months-strip";
import SlotsByLocation from "./components/slots-by-location";
import Filters from "./components/filters";
import { useFilters } from "./hooks/useFilters";
import useFilteredData from "./hooks/useFilteredData";
import PageLayout from "./page-layout";

const Root = styled(Box)`
  background-color: ${(props) => props.theme.palette.primary.main};
  max-width: 1158px;
  margin-left: auto;
  margin-right: auto;
`;

const Home = () => {
  const { activeDate, activeLocation, activeSubDepartment, onChangeFilter } =
    useFilters();
  const { daysList, weekWiseData } = useMonth({ activeDate });
  const slotsInfoByLocationList = useFilteredData({
    activeDate,
    activeLocation,
    activeSubDepartment,
  });

  return (
    <PageLayout>
      <Root p={16}>
        <Box mb={4}>
          <Filters
            activeDate={activeDate}
            activeLocation={activeLocation}
            activeSubDepartment={activeSubDepartment}
            onChange={onChangeFilter}
          />
        </Box>
        <MonthsStrip
          activeDate={activeDate}
          daysList={daysList}
          weekWiseData={weekWiseData}
        />
        {slotsInfoByLocationList.map((item) => {
          return (
            <Box key={item.id} mt={4}>
              <SlotsByLocation
                daysList={daysList}
                locationSlotsInfo={item}
                weekWiseData={weekWiseData}
              />
            </Box>
          );
        })}
      </Root>
    </PageLayout>
  );
};

export default Home;

import { memo, useMemo } from "react";
import { format } from "date-fns";
import styled from "@emotion/styled";
import { Box, lighten, Typography, useTheme } from "@mui/material";
import { isSameDay } from "date-fns";

const StyledMonthStrip = styled(Box)`
  display: grid;
  grid-template-columns: 120px 1fr;
  background-color: ${(props) =>
    lighten(props.theme.palette.secondary.main, 0.5)};
  overflow-x: hidden;
`;

const Text = ({ children }) => {
  return (
    <Typography
      variant="caption"
      display="block"
      textAlign="center"
      color="white"
      fontWeight="bold"
    >
      {children}
    </Typography>
  );
};

const StyledItem = styled(Box)`
  width: 21px;
  margin-left: 2px;
  margin-right: 2px;
  &[data-active="true"] {
    background-color: ${(props) => props.theme.palette.green.main};
  }
`;
const BaseItem = ({ id, date, isActive, index }) => {
  return (
    <StyledItem
      flex={1}
      data-active={isActive ? "true" : ""}
      py={1}
      key={index}
    >
      <Text>{WeekIndexDayMap[index]}</Text>
      {date && <Text>{new Date(date).getDate()}</Text>}
    </StyledItem>
  );
};

const Item = memo(BaseItem);

const WeekIndexDayMap = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thr",
  5: "Fri",
  6: "Sat",
};

const MonthsStrip = ({ activeDate, daysList, weekWiseData }) => {
  const { month, year } = useMemo(() => {
    const month = format(activeDate, "MMMM");
    const year = format(activeDate, "yyyy");
    return { month, year };
  }, [activeDate]);

  const theme = useTheme();

  return (
    <StyledMonthStrip>
      <Box py={1}>
        <Text>Month</Text>
        <Text>{month}</Text>
        <Text>{year}</Text>
      </Box>
      <Box display="flex" flexDirection="row">
        {weekWiseData.map((week, index) => {
          const { dates } = week;
          console.log("dates", dates);
          const date = format(
            dates[index === weekWiseData.length - 1 ? 0 : dates.length - 1],
            "MMM dd"
          );
          return (
            <div
              key={index}
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? lighten(theme.palette.secondary.main, 0.2)
                    : "",
                marginLeft: 4,
                marginRight: 4,
              }}
            >
              <Text>{`Week ending ${date}`}</Text>
              <Box display="flex" flexDirection="row">
                {dates.map((item, ind) => {
                  return (
                    <Item
                      key={ind}
                      index={ind}
                      date={item}
                      isActive={isSameDay(activeDate, item)}
                    />
                  );
                })}
              </Box>
            </div>
          );
        })}
      </Box>
    </StyledMonthStrip>
  );
};

export default MonthsStrip;

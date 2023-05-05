import { forwardRef, memo } from "react";
import keyBy from "lodash/keyBy";
import styled from "@emotion/styled";
import { Box, lighten, Tooltip, Typography, useTheme } from "@mui/material";
import { APPOINTMENT_STATUS_KEYS } from "../../constants.js";
import { USERS_MAP } from "../../data";

const StyledMonthStrip = styled(Box)`
  display: grid;
  background-color: white;
  grid-template-columns: 120px 1fr;
`;

const StyledText = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Text = ({ children }) => {
  return (
    <StyledText
      variant="caption"
      display="block"
      textAlign="center"
      fontWeight="bold"
      fontSize={10}
    >
      {children}
    </StyledText>
  );
};

const StyledItem = styled(Box)`
  height: 30px;
  width: 26px;
  border: 0.1px solid lightblue;

  &[data-status="${APPOINTMENT_STATUS_KEYS.RED}"] {
    border: 2px solid red;
  }

  &[data-status="${APPOINTMENT_STATUS_KEYS.GREEN}"] {
    border: 2px solid green;
  }
`;

const TooltipBody = forwardRef(({ name, ...props }, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Text>{name}</Text>
    </Box>
  );
});

const StyledNewItem = styled(Box)`
  height: 30px;
  width: 26px;
  padding-top: 0px;
`;
const BaseNewItem = ({ index, appointment }) => {
  const { status, userId } = appointment || {};
  if (status === APPOINTMENT_STATUS_KEYS.RED) {
    return <StyledItem flex={1} data-status={status} />;
  } else if (status === APPOINTMENT_STATUS_KEYS.GREEN) {
    const { name } = USERS_MAP[userId] || {};
    return (
      <StyledNewItem flex={1} py={1} key={index}>
        <StyledItem flex={1} data-status={status} overflow="hidden">
          <Tooltip title={name} placement="bottom-start">
            <TooltipBody name={name} />
          </Tooltip>
        </StyledItem>
      </StyledNewItem>
    );
  }
  return <StyledItem flex={1} />;
};

const Item = memo(BaseNewItem);

const StyledLeftBox = styled(Box)`
  grid-template-columns: 120px 1fr;
  background-color: ${(props) =>
    lighten(props.theme.palette.primary.main, 0.3)};
`;
const AppointmentSlotsStrip = ({
  daysList,
  appointments,
  displayTime,
  weekWiseData,
}) => {
  const appointmentsByDateMap = keyBy(appointments, "date");

  const theme = useTheme();
  return (
    <StyledMonthStrip>
      <StyledLeftBox bgcolor="primary.main" display="flex" alignItems="center">
        <Typography
          variant="caption"
          color="white"
          fontWeight="bold"
          fontSize={10}
          pl={1}
        >
          {displayTime}
        </Typography>
      </StyledLeftBox>
      <Box display="flex" flexDirection="row">
        {weekWiseData.map((week, index) => {
          const { dates } = week;
          return (
            <div
              key={index}
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? lighten(theme.palette.secondary.main, 0.2)
                    : lighten(theme.palette.secondary.main, 0.5),
              }}
            >
              <Box display="flex" flexDirection="row">
                {dates.map((item, ind) => {
                  const dateNumber = new Date(item).getDate();
                  if (item) {
                    const appointment = appointmentsByDateMap[dateNumber];
                    return (
                      <Item
                        key={ind}
                        date={item}
                        appointment={appointment}
                        index={ind}
                      />
                    );
                  }
                  return <StyledNewItem />;
                })}
              </Box>
            </div>
          );
        })}
      </Box>
    </StyledMonthStrip>
  );
};

export default AppointmentSlotsStrip;

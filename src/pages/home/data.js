import {
  APPOINTMENT_STATUS_KEYS,
  LOCATIONS,
  SUB_DEPARTMENTS,
} from "./constants.js";

export const USERS_MAP = {
  1: { name: "Will smith" },
  2: { name: "Jack" },
  3: { name: "Angela" },
  4: { name: "Micheal" },
  5: { name: "Ruby" },
  6: { name: "Felisha" },
  7: { name: "Felisha" },
  8: { name: "Doby" },
  9: { name: "Kristian" },
  10: { name: "Vilad" },
};
export const generateDummyData = () => {
  return [
    {
      id: "1",
      name: "East Wing",
      locationKey: LOCATIONS.EAST_WING,
      shifts: [
        {
          id: "1",
          name: "Day CNA 07:00 AM - 03:00 PM",
          startTime: new Date().setHours(6, 0, 0),
          endTime: new Date().setHours(6, 0, 0),
          displayTime: "",
          subDepartmentKey: SUB_DEPARTMENTS.CNA,
          slots: [
            {
              id: "1",
              occupied: [
                {
                  id: "1",
                  userId: "1",
                  date: 1,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "2",
                  userId: "2",
                  date: 7,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "3",
                  userId: "1",
                  date: 6,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
            {
              id: "2",
              occupied: [
                {
                  id: "1",
                  userId: "1",
                  date: 11,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "2",
                  userId: "2",
                  date: 18,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
            {
              id: "3",
              occupied: [
                {
                  id: "1",
                  userId: "1",
                  date: 21,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "2",
                  userId: "2",
                  date: 25,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
          ],
        },
        
        {
          id: "3",
          name: "Evening CNA 03:00 AM - 11:00 PM",
          startTime: new Date().setHours(6, 0, 0),
          endTime: new Date().setHours(6, 0, 0),
          displayTime: "",
          subDepartmentKey: SUB_DEPARTMENTS.CNA,
          slots: [
            {
              id: "1",
              occupied: [
                {
                  id: "1",
                  userId: "1",
                  date: 12,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "2",
                  userId: "10",
                  date: 28,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
            {
              id: "2",
              occupied: [
                {
                  id: "1",
                  userId: "1",
                  date: 4,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "2",
                  userId: "1",
                  date: 9,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "3",
                  userId: "1",
                  date: 19,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "4",
                  userId: "1",
                  date: 22,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "5",
                  userId: "1",
                  date: 25,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
              ],
            },
          ],
        },
       
        {
          id: "5",
          name: "Night CNA 11:00 PM - 07:00 AM",
          startTime: new Date().setHours(6, 0, 0),
          endTime: new Date().setHours(6, 0, 0),
          displayTime: "",
          subDepartmentKey: SUB_DEPARTMENTS.CNA,
          slots: [
            {
              id: "1",
              occupied: [
                {
                  id: "1",
                  userId: "1",
                  date: 2,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "2",
                  userId: "1",
                  date: 12,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "3",
                  userId: "2",
                  date: 28,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
          ],
          },
          {
              id: "2",
              name: "Day Licensed Nurse 08:00 AM - 08:00 PM",
              startTime: new Date().setHours(6, 0, 0),
              endTime: new Date().setHours(6, 0, 0),
              displayTime: "",
              subDepartmentKey: SUB_DEPARTMENTS.LICENSED,
              slots: [
                  {
                      id: "1",
                      occupied: [
                          {
                              id: "1",
                              userId: "1",
                              date: 2,
                              status: APPOINTMENT_STATUS_KEYS.RED,
                          },
                          {
                              id: "2",
                              userId: "2",
                              date: 8,
                              status: APPOINTMENT_STATUS_KEYS.GREEN,
                          },
                          {
                              id: "3",
                              userId: "1",
                              date: 11,
                              status: APPOINTMENT_STATUS_KEYS.GREEN,
                          },
                      ],
                  },
              ],
          },
      ],
    },
    {
      id: "2",
      name: "Facility Wide",
      locationKey: LOCATIONS.FACILITY_WIDE,
      shifts: [
        {
          id: "1",
          name: "Activity Assistant",
          startTime: new Date().setHours(6, 0, 0),
          endTime: new Date().setHours(6, 0, 0),
          displayTime: "11:00 AM - 07:30 AM",
          subDepartmentKey: SUB_DEPARTMENTS.ACTIVITY,
          slots: [
            {
              id: "1",
              occupied: [
                {
                  id: "1",
                  userId: "3",
                  date: 1,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "2",
                  userId: "3",
                  date: 7,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "3",
                  userId: "3",
                  date: 6,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Activity Director",
          startTime: new Date().setHours(6, 0, 0),
          endTime: new Date().setHours(6, 0, 0),
          displayTime: "07:30 AM - 04:30 PM",
          subDepartmentKey: SUB_DEPARTMENTS.ACTIVITY,
          slots: [
            {
              id: "1",
              occupied: [
                {
                  id: "1",
                  userId: "4",
                  date: 2,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "2",
                  userId: "4",
                  date: 8,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "3",
                  userId: "5",
                  date: 11,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
          ],
        },
        {
          id: "3",
            name: "Administrator 11:30 AM - 04:00 PM",
          startTime: new Date().setHours(6, 0, 0),
          endTime: new Date().setHours(6, 0, 0),
          displayTime: "",
          subDepartmentKey: SUB_DEPARTMENTS.ADMINISTRATOR,
          slots: [
            {
              id: "1",
              occupied: [
                {
                  id: "1",
                  userId: "6",
                  date: 2,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
                {
                  id: "2",
                  userId: "6",
                  date: 8,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "3",
                  userId: "8",
                  date: 11,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
              ],
            },
            {
              id: "2",
              occupied: [
                {
                  id: "1",
                  userId: "8",
                  date: 14,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "2",
                  userId: "8",
                  date: 19,
                  status: APPOINTMENT_STATUS_KEYS.GREEN,
                },
                {
                  id: "3",
                  userId: "9",
                  date: 26,
                  status: APPOINTMENT_STATUS_KEYS.RED,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
};

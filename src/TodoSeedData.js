import React from "react";
import moment from "moment";

const seedData = [
  {
    task:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    deadline: moment(Date.now()).format("YYYY-MM-DD")
  },
  {
    task:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    deadline: moment(new Date(2019, 6, 28)).format("YYYY-MM-DD")
  },
  {
    task: "Lorem ipsum dolor sit amet",
    deadline: moment(Date.now()).format("YYYY-MM-DD")
  },
  {
    task: "Lorem ipsum dolor sit amet commodo consequat.",
    deadline: moment(new Date(2019, 6, 30)).format("YYYY-MM-DD")
  },
  {
    task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    deadline: moment(new Date(2019, 6, 31)).format("YYYY-MM-DD")
  },
  {
    task:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    deadline: moment(Date.now()).format("YYYY-MM-DD")
  }
];

export default seedData;

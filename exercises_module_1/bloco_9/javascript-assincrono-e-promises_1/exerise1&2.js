const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) => `${name} is ${value} ${measurementUnit} apart from the Sun`;

const logRes = (res) => console.log(planetDistanceFromSun(res));

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

logRes(mars);
setTimeout(() => {
  logRes(venus);
}, 3000);
setTimeout(() => {
  logRes(jupiter);
}, 2000);
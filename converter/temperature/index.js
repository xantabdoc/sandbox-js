const celsiusToReamur = (c) => ((4 / 5) * c);
const celsiusToFahrenheit = (c) => (((9 / 5) * c) + 32);
const celsiusToKelvin = (c) => (c + 273);

const reamurToCelcius = (r) => ((5 / 4) * r);
const reamurToFahrenheit = (r) => (((9 / 4) * r) + 32);
const reamurToKelvin = (r) => (((5 / 4) * r) + 273);

const fahrenheitToCelsius = (f) => ((5 / 9) * (f - 32));
const fahrenheitToReamur = (f) => ((4 / 9) * (f - 32));

const kelvinToCelsius = (k) => (k - 273);
const kelvinToReamur = (k) => ((4 / 5) * (k - 273));

export {
    celsiusToReamur,
    celsiusToFahrenheit,
    celsiusToKelvin,
    reamurToCelcius,
    reamurToFahrenheit,
    reamurToKelvin,
    fahrenheitToCelsius,
    fahrenheitToReamur,
    kelvinToCelsius,
    kelvinToReamur
};

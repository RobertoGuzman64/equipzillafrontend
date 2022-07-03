export const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000/';

export const minMaxRoundedRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
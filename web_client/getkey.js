const getUrlKey = () => {
    return (new URLSearchParams(window.location.search)).get('apikey');
};
const getLocalKey = () => {
    return localStorage.getItem('blockTownTrafficReporter:apikey');
};

const getPromptKey = () => {
    return prompt('Enter API key:');
}
const setLocalKey = (key) => {
    localStorage.setItem('blockTownTrafficReporter:apikey', key);
};
const getKey = () => {
    let key = getLocalKey() || getUrlKey() || getPromptKey();
    if (!key) return null;
    setLocalKey(key);
    return key;
};
export { getKey };
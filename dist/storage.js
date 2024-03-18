const MATZIP_DATA = 'matzipData';
const storage = {
    addData(data) {
        const localStorageData = localStorage.getItem(MATZIP_DATA);
        if (localStorageData === null) {
            localStorage.setItem(MATZIP_DATA, JSON.stringify([data]));
            return;
        }
        const existingData = JSON.parse(localStorageData);
        const newData = [...existingData, data];
        localStorage.setItem(MATZIP_DATA, JSON.stringify(newData));
    },
    getData() {
        const localStorageData = localStorage.getItem(MATZIP_DATA);
        if (localStorageData === null)
            return [];
        return JSON.parse(localStorageData);
    },
};
export default storage;

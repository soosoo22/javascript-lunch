import { Restaurant } from './types';
<<<<<<< HEAD
=======
import Matzip from './matzip';
import matzipList from './mock/restaurants';
>>>>>>> step2

const MATZIP_DATA = 'matzipData';

const storage = {
  addData(data: Restaurant) {
    const localStorageData = localStorage.getItem(MATZIP_DATA);

    if (localStorageData === null) {
      localStorage.setItem(MATZIP_DATA, JSON.stringify([data]));
      return;
    }

    const existingData: Restaurant[] = JSON.parse(localStorageData);
    const newData = [...existingData, data];
    localStorage.setItem(MATZIP_DATA, JSON.stringify(newData));
  },

  getData(): Restaurant[] {
    const localStorageData = localStorage.getItem(MATZIP_DATA);
    if (localStorageData === null) return [];
    return JSON.parse(localStorageData);
  },
<<<<<<< HEAD
=======

  updateData(matzip: Matzip) {
    localStorage.setItem(MATZIP_DATA, JSON.stringify(matzip.getRestaurants()));
  },

  setMockData() {
    localStorage.setItem(MATZIP_DATA, JSON.stringify(matzipList));
  },
>>>>>>> step2
};

export default storage;

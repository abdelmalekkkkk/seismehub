/* eslint-disable react-refresh/only-export-components */
import Pocketbase from 'pocketbase';

const PB = new Pocketbase(import.meta.env.VITE_API_URL);

export default PB;
import Airport from './airport';

interface ApiHook {
  airports: Airport[],
  searchKey: string,
  setSearchKey: (searchKey: string) => void,
}

export default ApiHook;
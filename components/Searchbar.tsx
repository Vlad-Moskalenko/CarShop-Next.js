'use client';

import { useEffect, useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
import { getCars } from '@/services/axios';

function Searchbar() {
  const [manufacturer, setManufacturer] = useState('');

  useEffect(() => {
    manufacturer && getCars(manufacturer);
  }, [manufacturer]);

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  );
}

export default Searchbar;

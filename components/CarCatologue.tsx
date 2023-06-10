import { fuels, yearsOfProduction } from '@/constants';

import Searchbar from './Searchbar';
import CustomFilter from './CustomFilter';
import CarCard from './CarCard';

import { getCars } from '@/services/axios';

export default async function CarCatologue() {
  const carsData = await getCars('bmw');

  const isCarDataEmpty = !Array.isArray(carsData) || carsData.length < 1 || !carsData;
  console.log(isCarDataEmpty);

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>

      <div className="home__filters">
        <Searchbar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {!isCarDataEmpty && (
        <section>
          <div className="home__cars-wrapper">
            {carsData?.map((car: any) => (
              <CarCard car={car} />
            ))}
          </div>

          {/* <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          /> */}
        </section>
      )}
    </div>
  );
}

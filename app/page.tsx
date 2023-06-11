import { getCars } from '@/services';
import { SearchParamsProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';
import { Searchbar, CustomFilter, CarCard, Hero, ShowMore } from '@/components';

export default async function Home({ searchParams }: SearchParamsProps) {
  const carsData = await getCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isCarDataEmpty = !Array.isArray(carsData) || carsData.length < 1 || !carsData;

  return (
    <main className="overflow-hidden">
      <Hero />
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

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > carsData.length}
            />
          </section>
        )}
      </div>
    </main>
  );
}

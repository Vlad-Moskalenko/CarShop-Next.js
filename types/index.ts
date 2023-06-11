import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string,
  containerStyles?: string,
  btnType?: 'button' | 'submit',
  textStyles?: string,
  rightIcon?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void
}

export interface CustomFilterProps {
  title: string,
  options: OptionProps[]
}

export interface OptionProps {
  title: string,
  value: string
}

export interface CarProps {
  city_mpg:number,
  class:string,
  combination_mpg:number,
  cylinders:number,
  displacement:number,
  drive:string,
  fuel_type:string,
  highway_mpg:number,
  make:string,
  model:string,
  transmission:string,
  year:number
}

export interface CarDetailsProps {
  isOpen:boolean,
  closeModal: () => void,
  car: CarProps
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface SearchParamsProps {
  searchParams: FilterProps;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

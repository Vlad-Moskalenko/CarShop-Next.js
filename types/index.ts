import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string,
  containerStyles?: string,
  btnType?: 'button' | 'submit',
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
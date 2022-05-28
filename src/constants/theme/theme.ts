import { ITheme } from "../types/theme"

export interface IUseData {
  theme: ITheme
  setTheme: (theme?: ITheme) => void
}


export interface Styles {
  'container': string;
  'active': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

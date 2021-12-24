export interface Styles {
  'container': string;
  'number': string;
  'actions': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

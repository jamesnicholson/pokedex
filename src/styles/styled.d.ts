// import original module declarations
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
    pixels:{
      heart:string;
      heartGrey: string;
      pokeball: string;
    }
  }
}
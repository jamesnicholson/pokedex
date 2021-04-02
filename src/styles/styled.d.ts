// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      heart:string;
      heartGrey:string;
    };
    pixels:{
      heart: string;
      heartTwo:string;
      heartGrey: string;
      heartGreyTwo: string;
      heartGreyThree: string;
    }
  }
}
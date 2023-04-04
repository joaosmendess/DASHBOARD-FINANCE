import styled from "styled-components";


declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;




    color: {
        primary: string;
        secondary:string;
        tertiary: string;

        White:string;
        black: string;
        gray:string;

        sucess: string;
        info:string;
        warning:string;
    },
    }
}
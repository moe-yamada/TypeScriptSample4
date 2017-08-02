export namespace App{ 
    export class Talk{ 
        public static GetGreeting( now : Date) : string { 
            let h = now.getHours(); 
            if( h < 5 ){ 
                return "Welcom back!"; 
            }else if( h < 12 ){ 
                return "Good morning!"; 
            }else if( h < 16 ){ 
                return "Good afternoon!"; 
            }else if( h < 22 ){ 
                return "Good evening!"; 
            }else{ 
                return "Welcom back!"; 
            } 
        } 
    } 
} 

// export namespace App{ 
//     export class Talk{ 
//         public static GetGreeting( now : Date) : string { 
//             if( now.getHours() < 12 ){ 
//                 return "Hello!"; 
//             }else{ 
//                 return "Good evening!"; 
//             } 
//         } 
//     } 
// } 
// export namespace App{ 
//     export class Talk{ 
//         public static GetGreeting( now : Date ) : string { 
//             return "Hello!"; 
//         } 
//     } 
// } 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App;
(function (App) {
    var Talk = (function () {
        function Talk() {
        }
        Talk.GetGreeting = function (now) {
            var h = now.getHours();
            if (h < 5) {
                return "Welcom back!";
            }
            else if (h < 12) {
                return "Good morning!";
            }
            else if (h < 16) {
                return "Good afternoon!";
            }
            else if (h < 22) {
                return "Good evening!";
            }
            else {
                return "Welcom back!";
            }
        };
        return Talk;
    }());
    App.Talk = Talk;
})(App = exports.App || (exports.App = {}));
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
//# sourceMappingURL=app-talk.js.map
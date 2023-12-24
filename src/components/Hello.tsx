import React, { FC } from "react";

export interface HelloProps
{
    message: string;
    children?: React.ReactNode | React.ReactNode[]    
}

export const Hello: FC<HelloProps> = (props) => 
{
    return (
        <div className="hello">
            <h1>{props.message}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}


// export interface HelloProps
// {
//     message: string;
//     children: any;
// }

// interface HelloState
// {

// }

// export class Hello extends React.Component<HelloProps, HelloState>
// {
//     public override render(): JSX.Element
//     {
//         return (
//             <div className="hello">
//                 <h1>{this.props.message}</h1>
//                 <div>
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// }

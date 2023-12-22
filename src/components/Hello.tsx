import * as React from "react";

export interface HelloProps
{
    message: string;
    children: any;
}

interface HelloState
{

}

export class Hello extends React.Component<HelloProps, HelloState>
{
    public override render(): JSX.Element
    {
        return (
            <div className="hello">
                <h1>{this.props.message}</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

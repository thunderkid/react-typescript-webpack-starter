import * as React from "react";
import { App } from "./App";
import { Hello } from "./components/Hello";

export interface MainProps
{
    app: App;
}

interface MainState 
{
}

export class Main extends React.Component<MainProps, MainState>
{
    constructor(props: MainProps)
    {
        super(props);
    }

    public override render(): JSX.Element
    {
        return (
            <Hello message="Thunder Webpack Lab v3.8">
                <div className="features">
                    <div>Webpack 5 + HMR</div>
                    <div>TypeScript + React</div>
                    <div>SCSS + Autoprefixing</div>
                </div>
            </Hello>
        );
    }
}

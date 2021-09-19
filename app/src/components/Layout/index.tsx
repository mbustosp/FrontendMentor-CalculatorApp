import {ReactNode, FC} from "react";
import "./Layout.styles.scss";

export type LayoutProps = {
    /**
    * Component that will be rendered on the top
    */
    topComponent: ReactNode,
    /**
    * Component that will be rendered under the top component where the screen should be placed.
    */
    screenComponent: ReactNode,
    /**
    * Component that will be rendered on the bottom where the keyboard should be placed.
    */
    keyboardComponent: ReactNode,
}

/**
 Layout component. It provides the "skeleton" for the calculator.
 */
const Layout: FC<LayoutProps> = (props: LayoutProps) => {
    const {topComponent, screenComponent, keyboardComponent} = props;
    return(
        <main className="layout">
            <div className="layout__body">
                <div className="layout__body__top">
                    {topComponent}
                </div>
                <div className="layout__body__screen">
                    {screenComponent}
                </div>
                <div className="layout__body__keyboard">
                    {keyboardComponent}
                </div>
            </div>
        </main>
    )
}

export default Layout;
import React from "react";
import { Story, Meta } from '@storybook/react';

enum Themes {
    MainTheme = "theme-1",
    LightTheme = "theme-2",
    DarkTheme = "theme-3",
}

enum Colors {
// Backgrounds
    MainBackground = "main-background",
    ToggleBackground = "toggle-background",
    KeypadBackground = "keypad-background",
    ScreenBackground = "screen-background",

// Primary key
    PrimaryKeyBackground = "primary-key-background",
    PrimaryKeyShadow = "primary-key-shadow",

// Secondary key
    SecondaryKeyBackground = "secondary-key-background",
    SecondaryKeyShadow = "secondary-key-shadow",

// Important key
    ImportantKeyBackground = "important-key-background",
    ImportantKeyShadow = "important-key-shadow",

// Text
    TextOpaque = "text-opaque",
    TextClear = "text-clear"
}

type TemplateProps = {
    theme: Themes
}

const Template: Story<TemplateProps>  = ({theme}) => <ul className={theme}>
    {
        Object.values(Colors)
            .map((color) =>
                <li key={color} style={{ margin: "16px 0"}}>
                    <div
                        style={{
                            verticalAlign: "bottom",
                            display: "inline-block",
                            marginRight: "8px",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            backgroundColor: `var(--${color})`,
                        }}/>
                    {color}

                </li>
            )
    }
</ul>

export const Theme1 = Template.bind({});
Theme1.args = {
    theme: Themes.MainTheme
}

export const Theme2 = Template.bind({});
Theme2.args = {
    theme: Themes.LightTheme
}

export const Theme3 = Template.bind({});
Theme3.args = {
    theme: Themes.DarkTheme
}

export default {
    title: "Theme/Colors",
    argTypes: {
        theme: {
            options: Object.values(Themes),
            control: { type: 'select' }
        }
    }
} as Meta;

import React from "react";
import Layout from ".";

const Top = "This is the top";
const Screen = "This is a screen";
const Keyboard = "This is a keyboard";

export const WithComponents: React.ElementType = () => <Layout keyboardComponent={Keyboard} screenComponent={Screen} topComponent={Top} />

export default {
    component: Layout,
    title: "Components/Layout"
}

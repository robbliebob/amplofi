/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, CheckboxFieldProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPageOverridesProps = {
    LoginPage?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Welcome back!"?: PrimitiveOverrideProps<TextProps>;
    TextField38622045?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38622046?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Button38622049?: PrimitiveOverrideProps<ButtonProps>;
    Button38622050?: PrimitiveOverrideProps<ButtonProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button38622053?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "We\u2019ve been using Amplify UI and it changed our lives!"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4378"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 4380"?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginPageOverridesProps | undefined | null;
}>;
export default function LoginPage(props: LoginPageProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type SongCardOverridesProps = {
    SongCard?: PrimitiveOverrideProps<ViewProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame38463284?: PrimitiveOverrideProps<FlexProps>;
    Frame38463285?: PrimitiveOverrideProps<FlexProps>;
    Frame38463286?: PrimitiveOverrideProps<FlexProps>;
    Scott?: PrimitiveOverrideProps<TextProps>;
    Frame38463288?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
    Button38463319?: PrimitiveOverrideProps<ButtonProps>;
    Button38463332?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SongCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    song?: any;
} & {
    overrides?: SongCardOverridesProps | undefined | null;
}>;
export default function SongCard(props: SongCardProps): React.ReactElement;

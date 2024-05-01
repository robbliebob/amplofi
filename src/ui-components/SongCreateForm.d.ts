/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SongCreateFormInputValues = {
    title?: string;
    artist?: string;
    Description?: string;
    url?: string;
};
export declare type SongCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    artist?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SongCreateFormOverridesProps = {
    SongCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SongCreateFormProps = React.PropsWithChildren<{
    overrides?: SongCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SongCreateFormInputValues) => SongCreateFormInputValues;
    onSuccess?: (fields: SongCreateFormInputValues) => void;
    onError?: (fields: SongCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SongCreateFormInputValues) => SongCreateFormInputValues;
    onValidate?: SongCreateFormValidationValues;
} & React.CSSProperties>;
export default function SongCreateForm(props: SongCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  CheckboxField,
  Flex,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function LoginPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1600px"
      height="1053px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="600px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 60px 16px 60px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="48px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome back!"
          {...getOverrideProps(overrides, "Welcome back!")}
        ></Text>
        <TextField
          width="unset"
          height="unset"
          label="Email"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38622045")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Password"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38622046")}
        ></TextField>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4372")}
        >
          <CheckboxField
            width="unset"
            height="unset"
            label="Remember me"
            shrink="0"
            size="default"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField")}
          ></CheckboxField>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="Forgot password"
            {...getOverrideProps(overrides, "Button38622049")}
          ></Button>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Sign in"
          {...getOverrideProps(overrides, "Button38622050")}
        ></Button>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "sign up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Don't have an account? "
            {...getOverrideProps(overrides, "Don't have an account?")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
            children="Sign up"
            {...getOverrideProps(overrides, "Button38622053")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="48px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="60px 60px 60px 60px"
        backgroundColor="rgba(0,85,102,1)"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="600"
          color="rgba(233,249,252,1)"
          lineHeight="60px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="We’ve been using Amplify UI and it changed our lives!"
          {...getOverrideProps(
            overrides,
            "We\u2019ve been using Amplify UI and it changed our lives!"
          )}
        ></Text>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4378")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 4380")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Wesley Peck"
              {...getOverrideProps(overrides, "name")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Product Manager"
              {...getOverrideProps(overrides, "title")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

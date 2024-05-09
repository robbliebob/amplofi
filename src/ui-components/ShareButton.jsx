/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSong } from "../graphql/mutations";
import { Button, Flex } from "@aws-amplify/ui-react";
const client = generateClient();
export default function ShareButton(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const buttonOnClick = async () => {
    await client.graphql({
      query: createSong.replaceAll("__typename", ""),
      variables: {
        input: {
          artist: authAttributes["preferred_username"],
        },
      },
    });
  };
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="58px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ShareButton")}
      {...rest}
    >
      <Button
        width="647px"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Share Your Latest Song!"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}

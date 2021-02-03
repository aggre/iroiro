import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { BrowserRouter } from "react-router-dom";
import TokenInformationBar from "./index";
import { tokenInformationState } from "../../../utils/mockData";
import { TokenProvider } from "../../../context/token";
import { initialValue, tokenReducer } from "../../../reducers/tokenContext";

export default {
  title: "Organisms/TokenInformationBar",
  component: TokenInformationBar,
} as Meta;

const Template: Story = () => (
  <BrowserRouter>
    <TokenProvider
      initialValue={{
        token: tokenInformationState.token,
        userAddress: tokenInformationState.userAddress,
        userBalance: tokenInformationState.userBalance,
      }}
      reducer={tokenReducer}
    >
      <TokenInformationBar />
    </TokenProvider>
  </BrowserRouter>
);

const TemplateLoading: Story = () => (
  <BrowserRouter>
    <TokenProvider initialValue={initialValue} reducer={tokenReducer}>
      <TokenInformationBar />
    </TokenProvider>
  </BrowserRouter>
);

export const Default = Template.bind({});
export const Loading = TemplateLoading.bind({});

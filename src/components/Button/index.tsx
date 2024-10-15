import React, { ReactElement } from "react";

import { Button as ButtonInner, ButtonProps as ButtonInnerProps } from "antd";

export const Button: React.FC<ButtonInnerProps> = (props): ReactElement => <ButtonInner {...props} /> 
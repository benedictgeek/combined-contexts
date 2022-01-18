import { FC, ComponentProps } from "react";

export const combinedContexts = (...contexts: FC[]): FC => {
  return contexts.reverse().reduce(
    (AccumulatedContexts, CurrentContext) => {
      return ({ children }: ComponentProps<FC>): JSX.Element => (
        <AccumulatedContexts>
          <CurrentContext>{children}</CurrentContext>
        </AccumulatedContexts>
      );
    },
    ({ children }: ComponentProps<FC>): JSX.Element => <>{children}</>
  );
};

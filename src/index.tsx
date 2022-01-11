import ForgeUI, { render, Fragment, Macro} from '@forge/ui';
import Body from './Body';

const App = () => {
  return (
    <Fragment>
      <Body />
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
  />
);
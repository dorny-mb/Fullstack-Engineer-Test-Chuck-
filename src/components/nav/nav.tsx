import * as React from "react";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import { compose } from "recompose";

import MenuButton from "./MenuButton";
import Category from "./Category";
import { throwJoke } from "../../store/actions";
import { getCategories, getJoke } from "../../queries";
import Loader from "../../shared/components/Loader";
import { AppState } from "../../store/reducers";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { AppActions } from "../../store/actions/types";
import Joke from "../../shared/types/joke";

interface JokeWrapper {
  loading: boolean;
  getJoke: Joke;
  refetch: any;
  getJokesCategories?: Array<string>;
}
interface Props extends StateProps, DispatchProps {
  joke: JokeWrapper;
  getAllJokesCategories: JokeWrapper;
}

const Nav: React.FC<Props> = ({
  throwJoke,
  joke,
  getAllJokesCategories
}): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(true);

  const { loading, getJokesCategories } = getAllJokesCategories;

  React.useEffect(() => {
    !joke.loading && throwJoke(joke.getJoke);
  }, [joke.getJoke, joke.loading, throwJoke]);

  return (
    <nav className="center py-1 contenair">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ul className={`center ${open && "show"}`}>
            {getJokesCategories &&
              getJokesCategories.map((category, index) => (
                <Category
                  refetch={joke.refetch}
                  key={index}
                  category={category}
                />
              ))}
          </ul>
          <MenuButton open={open} setOpen={setOpen} />
        </>
      )}
    </nav>
  );
};

interface StateProps {
  currentCategory: string;
}
interface DispatchProps {
  throwJoke: (joke: Joke) => void;
}
const mapStateToProps = (state: AppState): StateProps => ({
  currentCategory: state.currentCategory
});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): DispatchProps => ({
  throwJoke: bindActionCreators(throwJoke, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(getCategories, { name: "getAllJokesCategories" }),
    graphql(getJoke, {
      name: "joke",
      options: <T extends Props>(props: T) => {
        const { currentCategory } = props;
        return {
          variables: { category: currentCategory }
        };
      }
    })
  )(React.memo(Nav))
);

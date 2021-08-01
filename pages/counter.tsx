import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Button } from "@material-ui/core";
import { selectCurrentCount } from "../features/counter/state/selectors";
import { increment, reset } from "../features/counter/state";
import { wrapper } from "../store";
// import { getServerCount } from "../features/counter/state/thunks";

const CounterPage = (props: any) => {
  console.log("State on render", useStore().getState(), { props });
  const theCount = useSelector(selectCurrentCount());
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment(1));
  };
  const resetCount = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h2>This example shows how to persist data across page reloads</h2>
      <h3>{theCount}</h3>
      <Button color="primary" onClick={incrementCount}>
        Increment
      </Button>
      <Button color="secondary" onClick={resetCount}>
        Reset
      </Button>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // await store.dispatch(getServerCount());
      console.log("State on server", store.getState());

      return {
        props: {
          sucess: true,
        },
      };
    }
);

export default CounterPage;

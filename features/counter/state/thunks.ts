import { increment } from ".";
import { AppThunk } from "../../../store";

export const getServerCount = (): AppThunk => async (dispatch) => {
  await timeoutPromise(200);
  dispatch(increment(10));
};

const timeoutPromise = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

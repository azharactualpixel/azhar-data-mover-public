import { useAppDispatch, useAppSelector } from "hooks/redux/reduxHooks";
import { increment } from "redux/user/userSlice";

function Home() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  function clickHandler() {
    dispatch(increment());
  }

  return (
    <div>
      <h1>
        Counter
        {counter.value}
      </h1>
      <button onClick={clickHandler} type="button">
        click me
      </button>
    </div>
  );
}

export default Home;

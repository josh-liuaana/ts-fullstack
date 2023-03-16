import { useAppSelector } from "../../ts-utils/hooks";

function Waiting() {
  const show = useAppSelector((state) => state.waiting)

  return (
    <div>
      {show 
        ? <img src="/waiting.gif" alt="loading screen"/>
        : null}
    </div>
  );
}

export default Waiting;
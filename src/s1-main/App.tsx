import s from "./App.module.css";
import HW1 from "../s2-homeworks/hw01/HW1";

function App() {
  return (
    <div className={s.App}>
      <div className={s.container}>
        <HW1 />
        {/*раскомментировать по ходу выполнения*/}
        {/*<HW2/>*/}
        {/*<HW3/>*/}
        {/*<HW4/>*/}

        {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
        {/*<HW5/>*/}
      </div>
    </div>
  );
}

export default App;

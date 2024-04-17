import styles from "./App.module.css";
import './global.css';

import { Header } from "./components/Header";

import { PlusCircle } from "@phosphor-icons/react";

export function App() {

  return (
   <div className={styles.wrapper}>
    <Header />

    <main>

      <form action="" className={styles.form}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit">
          Criar
          <PlusCircle />
        </button>
      </form>

    </main>

   </div>
  )
}


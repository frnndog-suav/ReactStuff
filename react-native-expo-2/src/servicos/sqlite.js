import * as SQLite from "expo-sqlite";

function abreConexao() {
  const db = SQLite.openDatabase("db");
  return db;
}

export const db = abreConexao();

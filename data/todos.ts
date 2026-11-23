export interface TodoTask {
  content: string;
  isDone: boolean;
}
export interface TodoList {
  date: string;
  list: TodoTask[];
}
/* Data TodoList */
export const todoLists: TodoList[] = [
  {
    date: "Selasa, 20 Mei 2026",
    list: [
      {
        content: "Belajar Bahasa Jepang",
        isDone: false,
      },
      {
        content: "Lanjut Project NokaMemo",
        isDone: false,
      },
    ],
  },
  {
    date: "Selasa, 21 Mei 2026",
    list: [
      {
        content: "Belajar Bahasa Jepang",
        isDone: false,
      },
      {
        content: "Lanjut Project NokaMemo",
        isDone: false,
      },
    ],
  },
];

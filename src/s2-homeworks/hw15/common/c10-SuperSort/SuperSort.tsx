import React from "react";

// добавить в проект иконки и импортировать
const downIcon = "[\\/]";
const upIcon = "[/\\]";
const noneIcon = "[--]";

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === "") {
    return down; // Переключаем с пустого на down
  } else if (sort === down) {
    return up; // Переключаем с down на up
  } else if (sort === up) {
    return ""; // Сбрасываем с up на пустое
  }
  return down; // Если сортировка не совпадает ни с одним из значений, устанавливаем down
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value; // код для сортировки по возрастанию
  const down = "1" + value; // код для сортировки по убыванию

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up)); // обновить сортировку
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon; // выбрать соответствующий иконку в зависимости от состояния

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/* Здесь можно добавить иконку, если нужно */}
      {/*<img
                id={id + '-icon-' + sort}
                src={icon}
            />*/}
      {icon}{" "}
      {/* Вместо иконки показываем текстовое представление состояния сортировки */}
    </span>
  );
};

export default SuperSort;

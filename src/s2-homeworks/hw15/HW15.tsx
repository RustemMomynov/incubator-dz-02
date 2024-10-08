import React, { useEffect, useState } from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW15.module.css";
import axios from "axios";
import SuperPagination from "./common/c9-SuperPagination/SuperPagination";
import { useSearchParams } from "react-router-dom";
import SuperSort from "./common/c10-SuperSort/SuperSort";

/*

 * 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW15 в HW5/pages/JuniorPlus
 * */

type TechType = {
  id: number;
  tech: string;
  developer: string;
};

type ParamsType = {
  sort: string;
  page: number | string;
  count: number | string;
};

const getTechs = (params: ParamsType) => {
  return axios
    .get<{ techs: TechType[]; totalCount: number }>(
      "https://samurai.it-incubator.io/api/3.0/homework/test3",
      { params }
    )
    .catch((e) => {
      alert(e.response?.data?.errorText || e.message);
    });
};

const HW15 = () => {
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(4);
  const [idLoading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(100);
  const [searchParams, setSearchParams] = useSearchParams();
  const [techs, setTechs] = useState<TechType[]>([]);

  const sendQuery = (params: ParamsType) => {
    setLoading(true);
    getTechs(params)
      .then((res: any) => {
        if (res && res.data) {
          setTechs(res.data.techs); // Сохраняем пришедшие данные
          setTotalCount(res.data.totalCount); // Сохраняем общее количество
        }
      })
      .finally(() => {
        setLoading(false); // Убираем индикатор загрузки
      });
  };

  const onChangePagination = (newPage: number, newCount: number) => {
    // делает студент
    setPage(newPage);
    setCount(newCount);
    sendQuery({ count: newCount, page: newPage, sort: sort });
    setSearchParams({ page: newPage.toString(), count: newCount.toString() });
  };

  const onChangeSort = (newSort: string) => {
    setSort(newSort);
    setPage(1);
    sendQuery({ count, page: 1, sort: newSort });
    setSearchParams({ page: "1", count: count.toString(), sort: newSort });
  };

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    sendQuery({ page: params.page, count: params.count, sort: params.sort });
    setPage(+params.page || 1);
    setCount(+params.count || 4);
  }, []);

  const mappedTechs = techs.map((t) => (
    <div key={t.id} className={s.row} style={{ fontSize: "20px" }}>
      <div id={"hw15-tech-" + t.id} className={s.tech}>
        {t.tech}
      </div>

      <div id={"hw15-developer-" + t.id} className={s.developer}>
        {t.developer}
      </div>
    </div>
  ));

  return (
    <div id={"hw15"} style={{ width: "700px", margin: "0 auto" }}>
      <div className={s2.hwTitle}>Homework #15</div>

      <div className={s2.hw}>
        {idLoading && (
          <div id={"hw15-loading"} className={s.loading}>
            Loading...
          </div>
        )}

        <SuperPagination
          page={page}
          itemsCountForPage={count}
          totalCount={totalCount}
          onChange={onChangePagination}
        />

        <div className={s.rowHeader} style={{ fontSize: "20px" }}>
          <div className={s.techHeader}>
            tech
            <SuperSort sort={sort} value={"tech"} onChange={onChangeSort} />
          </div>

          <div className={s.developerHeader} style={{ fontSize: "20px" }}>
            developer
            <SuperSort
              sort={sort}
              value={"developer"}
              onChange={onChangeSort}
            />
          </div>
        </div>

        {mappedTechs}
      </div>
    </div>
  );
};

export default HW15;

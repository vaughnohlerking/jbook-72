import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { Fragment, useEffect } from "react";
import "./cell-list.css";
import { useActions } from "../hooks/use-actions";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id: any) => {
      return data[id];
    });
  });

  const { fetchCells, saveCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map((cell: any) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellID={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell previousCellID={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;

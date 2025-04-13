import { Trash } from "@phosphor-icons/react";
import { useState } from "react";
import style from "./index.module.css";

function TaskItem() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const styleIfchecked = checked
    ? style.customCheckboxChecked
    : style.customCheckbox;

  return (
    <div className={style.taskItem}>
      <label className={styleIfchecked}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className={style.checkmark}></span>
      </label>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
}

export default TaskItem;

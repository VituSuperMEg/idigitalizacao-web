import { Hourglass, Send } from "lucide-react";
import { useState } from "react";


export default function ButtonAsync () {

  const [stage_control, setStageControl] = useState(1);

  const stage : any = {
    1 : "Send",
    2 : "Pending",
    3 : "Running",
    4 : "Completed",
  }
  const stage_icon : any = {
    1 : <Send />,
    2 : <Hourglass />
  }

  const stage_color : any = {
    1 : "bg-zinc-900",
    2 : "bg-orange-900",
    3 : "bg-lime-900",
    4 : "bg-emerald-500",
  }

  function handleChange () {
    const count = stage_control + 1;

    if(stage_control === 4) {
      setStageControl(1);
    }else{
      setStageControl(count);
    }
  }

  return (
    <button className={`${stage_color[stage_control]} p-4 w-60 rounded-lg hover:brightness-75`} onClick={() => handleChange()}>
      <strong className="flex items-center justify-center gap-5 text-white">
        {stage_icon[stage_control]}{stage[stage_control]}
      </strong>
    </button>
  )
}

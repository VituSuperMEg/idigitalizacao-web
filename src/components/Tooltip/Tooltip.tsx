import * as Tooltip from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

interface tooltip {
  element : ReactNode;
  description : string;
}
export default function ToolTip({ element, description }:tooltip) {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button>
          {element}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="bg-zinc-900 text-white p-1 rounded-md" sideOffset={5}>
           {description}          
        <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  )
}
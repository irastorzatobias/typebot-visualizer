import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeWrapper } from './node-wrapper';
import { GitBranch } from 'lucide-react';

// Helper to get variable name from id
function getVariableName(variableId: string, variables: any[]): string {
  const found = variables?.find((v) => v.id === variableId)
  return found ? found.name : variableId
}

export default function ConditionNode({ id, data }: { id: string; data: any }) {
  console.log(id, data)
  // Try to get variables from data, fallback to empty array
  const variables = data.variables || [];

  return (
    <NodeWrapper ref={data.ref} accentColor="#f59e42" icon={GitBranch} badge="CONDITION" className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />
      <div className="flex flex-col">
        <div className="text-white text-sm font-medium break-words whitespace-pre-line">Conditions <span className="text-gray-400">({data.items.length})</span>:</div>
        <div className="flex flex-col gap-1 mt-1">
          {data.items.map((item: any, idx: number) => (
            <div key={item.id || idx} className="relative bg-gray-800 border border-yellow-500/30 rounded px-3 py-2 text-xs text-white flex flex-col max-w-full">
              <div className="flex flex-row items-center flex-wrap w-full">
                <span className="text-gray-400 font-semibold mr-1">IF</span>
                {item.content?.comparisons?.map((cmp: any, cidx: number) => (
                  <span key={cmp.id || cidx} className="flex flex-row flex-wrap items-center gap-1 max-w-full">
                    <span className="text-white font-bold break-all">{getVariableName(cmp.variableId, variables)}</span>
                    <span className="text-gray-300 font-bold break-all">{cmp.comparisonOperator || "="}</span>
                    <span className="text-white font-medium break-all">{cmp.value}</span>
                    {cidx < item.content.comparisons.length - 1 && (
                      <span className="text-gray-500 mx-1">AND</span>
                    )}
                  </span>
                ))}
              </div>
              <Handle
                type="source"
                position={Position.Right}
                id={`condition-${item.id}`}
                className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2"
              />
            </div>
          ))}
        </div>
        {/* Else row always present, now with a handle */}
        <div className="relative bg-gray-800 border border-gray-700 rounded px-3 py-2 flex items-center gap-2 opacity-60 select-none mt-1">
          <span className="text-gray-400 font-semibold">Else</span>
          <Handle
            type="source"
            position={Position.Right}
            id="condition-else"
            className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2"
          />
        </div>
        {data.description && <div className="text-gray-400 text-xs mt-1">{data.description}</div>}
      </div>
      {/* Invisible fallback handle for React Flow layout, not used visually */}
      <Handle type="source" position={Position.Right} className="w-3 h-3 invisible" />
    </NodeWrapper>
  );
}
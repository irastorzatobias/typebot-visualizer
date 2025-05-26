import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeWrapper } from './node-wrapper';
import { GitBranch } from 'lucide-react';

export default function ConditionNode({ id, data }: { id: string; data: any }) {
  return (
    <NodeWrapper ref={data.ref} accentColor="#f59e42" icon={GitBranch} badge="CONDITION" className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="text-white text-sm font-medium break-words whitespace-pre-line">Condition</div>
        <div className="text-gray-400 text-xs break-words whitespace-pre-line">
          {data.expression.length > 60 ? `${data.expression.substring(0, 57)}...` : data.expression}
        </div>
        {data.description && <div className="text-gray-400 text-xs">{data.description}</div>}
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  );
} 
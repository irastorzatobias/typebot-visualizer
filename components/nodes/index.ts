import TextNode from "./text-node"
import ChoiceNode from "./choice-node"
import InputNode from "./input-node"
import StartNode from "./start-node"
import GroupNode from "./group-node"
import VariableNode from "./variable-node"
import JumpNode from "./jump-node"
import AINode from "./ai-node"
import ConditionNode from "./condition-node"

export const nodeTypes = {
  textNode: TextNode,
  choiceNode: ChoiceNode,
  inputNode: InputNode,
  startNode: StartNode,
  groupNode: GroupNode,
  variableNode: VariableNode,
  jumpNode: JumpNode,
  aiNode: AINode,
  conditionNode: ConditionNode,
}

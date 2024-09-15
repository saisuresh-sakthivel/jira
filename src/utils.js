import { workflow } from "./data/ticket_data";
const isValidState = function (target_state, current_state) {
  const current_step = workflow[current_state].step;
  const target_step = current_step + 1;
  return (
    workflow[target_state].step == target_step ||
    workflow[target_state].step < current_step
  );
};
export { isValidState };

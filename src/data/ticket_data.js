const status = ["todo", "in_progress", "in_review", "qa", "production", "done"];
const tickets = {
  1: {
    id: 1,
    title: "Build Jira",
    current: "in_progress",
  },
  2: {
    id: 2,
    title: "State Management",
    current: "todo",
  },
};
const workflow = {
  todo: {
    next: "in_progress",
    name: "TO DO",
    step: 1,
  },
  in_progress: {
    next: "in_review",
    name: "IN Progress",
    step: 2,
  },
  in_review: {
    next: "qa",
    name: "Review",
    step: 3,
  },
  qa: {
    next: "production",
    name: "QA",
    step: 4,
  },
  production: {
    next: "done",
    name: "Production",
    step: 5,
  },
  done: {
    next: "null",
    name: "Done",
    step: 6,
  },
};
export { status, workflow, tickets };

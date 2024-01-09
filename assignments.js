const ASSIGNMENTS_AMOUNT = 8;

const tests = Array.from({ length: ASSIGNMENTS_AMOUNT }, (_, index) => {
  const assignmentNumber = (index + 1).toString().padStart(2, '0');
  return {
    name: `Assignment${assignmentNumber}`,
    title: `Assignment ${assignmentNumber}`,
  };
});

export { tests };

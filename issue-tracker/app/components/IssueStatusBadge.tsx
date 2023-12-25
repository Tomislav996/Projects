import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

// interface Props {
//   status: Status;
// }

// this way we are saying that statusMap will be an object of type Record, where the key will be the Status and its values will be an object with
// two properties label and color

const statusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet" }
> = {
  OPEN: { label: "Open", color: "red" },
  CLOSED: { label: "Closed", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;

import { FC } from "react";
import { PrimaryLayout } from "../layout/PrimaryLayout";

/**
 * Detail Page
 */
export const DetailPage: FC = () => {
  const query = new URLSearchParams(window.location.search);
  const threadId = query.get("threadId");

  return (
    <PrimaryLayout>
      <div>
        DetailPage
        <div>{threadId}</div>
      </div>
    </PrimaryLayout>
  );
};

import React from "react";
import { Button } from "@/features/_global/libs/shadcn/components/ui/button";

export interface DashboardEmptyDataProps {
  title?: string;
  description?: string;
  button?: React.ReactNode;
  actionTitle?: string;
  onActionClick?: () => void;
}

export const DashboardEmptyData = React.memo(
  (props: DashboardEmptyDataProps) => {
    return (
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">{props.title}</h3>
          <p className="text-sm text-muted-foreground">{props.description}</p>
          {props.button ? (
            props.button
          ) : props.actionTitle ? (
            <Button onClick={props.onActionClick} className="mt-4">
              Add Product
            </Button>
          ) : null}
        </div>
      </div>
    );
  },
);

DashboardEmptyData.displayName = "DashboardEmptyData";

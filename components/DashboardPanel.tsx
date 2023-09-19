import clsx from "clsx"
import React from "react"

export default function DashboardPanel(props: {
  children: React.ReactNode
  className?: string
}) {
  let action
  let title
  let body: any = []

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return
    if (child.type === DashboardPanel.Action) {
      action = child
    } else if (child.type === DashboardPanel.Title) {
      title = child
    } else {
      body.push(child)
    }
  })

  return (
    <div
      className={clsx(
        "card shadow-lg shadow-base-300 bg-base-100 card-body px-6 py-4",
        props.className
      )}
    >
      <div className="flex justify-between mb-2">
        {title}
        {action}
      </div>
      {body}
    </div>
  )
}

DashboardPanel.Title = function DashboardPanelTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode
}) {
  return <h4 className="card-title">{children} </h4>
}

DashboardPanel.Action = function DashboardPanelAction({
  children,
  ...restProps
}: {
  children: React.ReactNode
}) {
  return (
    <div className="btn btn-link" {...restProps}>
      {children}
    </div>
  )
}

DashboardPanel.Body = function DashboardPanelBody({
  children,
  ...restProps
}: {
  children: React.ReactNode
}) {
  return (
    <div className="" {...restProps}>
      {children}
    </div>
  )
}

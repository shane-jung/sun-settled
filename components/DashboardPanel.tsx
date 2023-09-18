import clsx from "clsx"
import Link from "next/link"
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
    <div className={clsx("panel", props.className)}>
      <div className="flex justify-between mb-2">
        {title}
        {action}
      </div>
      {body}
    </div>
  )
}

DashboardPanel.Title = function DashboardPanelAction({
  children,
  ...restProps
}: {
  children: React.ReactNode
}) {
  return <h3 className="text-xl font-medium">{children} </h3>
}

DashboardPanel.Action = function DashboardPanelAction({
  children,
  ...restProps
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
      {...restProps}
    >
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
